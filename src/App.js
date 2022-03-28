import React, { useEffect, useState } from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import { BuildTheme } from "./assets/global/Theme-variable";
import Response from "./components/Playground/Response";
import "./App.css";

import { makeStyles } from "@mui/styles";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import useTrackedStore from "./store/useTrackedStore";
import CryptoJS from "crypto-js";
import * as ApiCall from "./components/Playground/api/ApiCalling";
import axios from "axios";

const ZOHO = window.ZOHO;
const useStyles = makeStyles({
  grid: {
    border: "1px solid black",
  },
  icon: {
    fontSize: "30px !important",
  },
});

function converConncectionMap(connMap) {
  return {
    clientId: connMap?.client_id,
    clientSecret: connMap?.client_secret,
    authUrl: connMap?.auth_url,
    refreshUrl: connMap?.refresh_url,
    refreshToken: connMap?.refresh_token,
    token_type: connMap?.token_type,
    connName: connMap?.conn_name,
    orgId: connMap?.org_id,
    apiKey: connMap?.api_key,
  };
}

const App = () => {
  const classes = useStyles();
  const state = useTrackedStore();
  const [entity, setEntity] = useState("");
  const [entityId, setEntityId] = useState("");
  const [zohoLoaded, setZohoLoaded] = useState(false);
  const [rootFolderId, setRootFolderId] = useState(null);
  const [userAccessToken, setUserAccessToken] = useState(null);
  useEffect(() => {
    /*
     * Subscribe to the EmbeddedApp onPageLoad event before initializing
     */

    ZOHO.embeddedApp.on("PageLoad", function (data) {
      console.log("Module Data ", data);
      setEntity(data?.Entity);
      setEntityId(data?.EntityId);
      setZohoLoaded(true);
      //Custom Bussiness logic goes here
    });

    /*
     * initializing the widget.
     */
    ZOHO.embeddedApp.init();
  }, []);

  useEffect(async () => {
    if (zohoLoaded && entity !== "" && entityId !== "") {
      const settings = await ZOHO.CRM.API.searchRecord({
        Entity: "zworkflows__ZWorkFlow_Settings",
        Type: "criteria",
        Query:
          "(((zworkflows__Service_Type:equals:'ZOHO Workdrive') and (zworkflows__Settings_Type:equals:Addon)) and (zworkflows__Module_Name:equals:" +
          entity +
          " ))",
      });
      const setting1 = settings?.data?.[1];
      const encSchema = setting1?.zworkflows__Setting_Schema_Frontend;
      console.log({ encSchema }, entityId);
      const bytes = CryptoJS.AES.decrypt(encSchema, setting1?.id);
      console.log({ bytes });
      var originalText = bytes.toString(CryptoJS.enc.Utf8);
      const settingSchema = JSON.parse(originalText);
      console.log({
        settingSchema:
          settingSchema?.zoho_workdrive__crm_field_for_folder_id?.api_name,
      });
      const connSchemaStr = CryptoJS.AES.decrypt(
        settingSchema?.conn_name?.zworkflows__Connection_Settings_Frontend,
        settingSchema?.conn_name?.id
      ).toString(CryptoJS.enc.Utf8);
      console.log(JSON.parse(connSchemaStr));
      const connMap = JSON.parse(connSchemaStr);
      console.log({ connMap });
      const accessokenUrl =
        "https://instafunctions-695631012.development.catalystserverless.com/server/v1/auth/tokens/accesstoken";
      
      const accessTokenMap = await axios.post(
        accessokenUrl,
        converConncectionMap(connMap)
      );
      console.log({ accessTokenMap: accessTokenMap?.data?.data?.token });
      const userToken = accessTokenMap?.data?.data?.token;
      setUserAccessToken(accessTokenMap?.data?.data?.token);
      state.setToken(accessTokenMap?.data?.data?.token)
      state.setUserToken(userToken);
      const contactMap = await ZOHO.CRM.API.getRecord({
        Entity: entity,
        RecordID: entityId,
      }).then(function (data) {
        const rootTolderId =
          data?.data?.[0]?.[
            settingSchema?.zoho_workdrive__crm_field_for_folder_id?.api_name
          ];
        setRootFolderId(
          data?.data?.[0]?.[
            settingSchema?.zoho_workdrive__crm_field_for_folder_id?.api_name
          ]
        );
        console.log({
          data: data?.data?.[0]?.[
            settingSchema?.zoho_workdrive__crm_field_for_folder_id?.api_name
          ],
        });
        // state.setRootBread(rootTolderId);
        // { name: folder?.attributes?.name, id: folder?.id }
        // const folder = {
        //   attributes:{
        //     name: "Something"
        //   },
        //   id: rootTolderId
        // }
        ApiCall.getFoldersItem(userToken, rootTolderId)
          .then((res) => console.log({ myxRes: res }))
          .catch((err) => {
            console.log({ myxREs: err });
          });
        // let myUrl = `https://workdrive.zoho.com/api/v1/files/${rootTolderId}/files`;
        // axios(myUrl, {
        //   method: "GET",
        //   headers: {
        //     Accept: "application/vnd.api+json",
        //     Authorization: `Bearer ${userToken}`,
        //   },
        // })
        //   .then((response) => console.log(response))
        //   .catch((error) => {
        //     throw error;
        //   });
        // state.setBreadCrumbs(folder)
        console.log({ bread: state.bread });
      });
    }
  }, [zohoLoaded, entity, entityId]);

  // React.useEffect(() => {
  //   ApiCall.getAccessToken()
  //     .then((res) => {
  //       state.setToken(res.access_token);
  //       state.setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // });

  const customizer = {
    direction: "ltr",
    theme: "PURPLE_THEME",
    activeMode: "light",
  };
  const theme = BuildTheme(customizer);
  return (
    <div className="App">
      <Response rootFolderId={rootFolderId} userAccessToken={userAccessToken} />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={state.loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default App;
