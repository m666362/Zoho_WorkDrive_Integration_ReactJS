import React, { useEffect, useState } from "react";
import useTrackedStore from "../../store/useTrackedStore";
import * as ApiCall from "./api/ApiCalling";
import Response from "./Response";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function RootFolderResponse(props) {
  const { rootFolderId, userAccessToken, name, settingId } = props;
  const state = useTrackedStore();
  const [post, setPost] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  useEffect(async () => {
    setSearchVal("");
    if(rootFolderId){
        if (
            !state?.settingData?.[settingId]?.previousData?.hasOwnProperty(`${rootFolderId}`)
          ) {
            let res = await ApiCall.getFoldersItem(userAccessToken, rootFolderId);
            try {
              await setPost(res.data);
              await state?.setApiSettingData(settingId, rootFolderId, res.data);
              await state?.setLoading(false);
            } catch (error) {
              console.log({ error });
            }
          } else{
            let lastIndex = state?.settingData?.[settingId]?.breadCrumbs?.length - 1;
            let lastIndexId =
              state?.settingData?.[settingId]?.breadCrumbs?.[lastIndex]?.id;
            console.log({
              lastData: state?.settingData?.[settingId]?.previousData?.[lastIndexId],
              lastIndex,
              lastIndexId
            });
            await setPost(state?.settingData?.[settingId]?.previousData?.[lastIndexId]);
          }
    }
  }, [userAccessToken, rootFolderId, settingId]);

  async function handleClick(file, data) {
    if (data) {
      console.log({ handleClickIdFound: "id found handleClick", file });
      await setPost(data);
      await setSearchVal("");
      await state?.setApiSettingData(settingId, file, data);
    } else {
      try {
        console.log({ handleClickNotFound: "id not  found handleClick", file });
        let res = await ApiCall.getFoldersItem(userAccessToken, file?.id);
        await setSearchVal("");
        await setPost(res.data);
        await state?.setApiSettingData(settingId, file, res.data);
      } catch (error) {
        console.log({ error });
      }
    }

    // console.log({
    //   file: file?.id,
    //   hit: state?.settingData?.[settingId]?.previousData?.hasOwnProperty(
    //     file?.id
    //   ),
    //   previous: state?.settingData?.[settingId]?.previousData,
    // });
    // if (
    //   state?.settingData?.[settingId]?.previousData?.hasOwnProperty(file?.id)
    // ) {
    //   console.log({ handleClickIdFound: "id found handleClick", file });
    //   setSearchVal("");
    //   setPost(state?.settingData?.[settingId]?.previousData?.[file?.id]);
    //   state?.setApiSettingData(
    //     settingId,
    //     file,
    //     state?.settingData?.[settingId]?.previousData?.[file?.id]
    //   );
    // } else {
    //   try {
    //     console.log({ handleClickNotFound: "id not  found handleClick", file });
    //     let res = await ApiCall.getFoldersItem(userAccessToken, file?.id);

    //     await state?.setApiSettingData(settingId, file, res.data);
    //     setPost(res.data);
    //     setSearchVal("");
    //   } catch (error) {
    //     console.log({ error });
    //   }
    // }
  }

  return (
    <>
      {rootFolderId && (
        <>
          <Response
            rootFolderId={rootFolderId}
            userAccessToken={userAccessToken}
            name={name}
            settingId={settingId}
            post={post}
            setPost={setPost}
            searchVal={searchVal}
            setSearchVal={setSearchVal}
            handleClick={handleClick}
          />
          {/* <Backdrop
            sx={{
              color: "#fff",
              zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
            open={state.loading}
          >
            <CircularProgress color="inherit" />
          </Backdrop> */}
        </>
      )}
    </>
  );
}

export default RootFolderResponse;
