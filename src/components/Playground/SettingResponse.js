import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import React, { useEffect, useState } from "react";
import useTrackedStore from "../../store/useTrackedStore";
import * as ApiCall from "./api/ApiCalling";

function SettingResponse(props) {
  const { rootFolderId, userAccessToken, name, settingId } = props;
  const state = useTrackedStore();
  const [post, setPost] = useState;
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    console.log({
      rootFolderId,
      userAccessToken,
      name,
      settingId,
    });
  });

  //   async function handleClick(file) {
  //     console.log({
  //       file: file?.id,
  //       hit: state?.settingData?.[settingId]?.previousData?.hasOwnProperty(
  //         file?.id
  //       ),
  //       previous: state?.settingData?.[settingId]?.previousData,
  //     });
  //     if (
  //       state?.settingData?.[settingId]?.previousData?.hasOwnProperty(file?.id)
  //     ) {
  //       console.log({ handleClickIdFound: "id found handleClick", file });
  //       setSearchVal("");
  //       setPost(state?.settingData?.[settingId]?.previousData?.[file?.id]);
  //       state?.setApiSettingData(
  //         settingId,
  //         file,
  //         state?.settingData?.[settingId]?.previousData?.[file?.id]
  //       );
  //     } else {
  //       try {
  //         console.log({ handleClickNotFound: "id not  found handleClick", file });
  //         let res = await ApiCall.getFoldersItem(userAccessToken, file?.id);

  //         await state?.setApiSettingData(settingId, file, res.data);
  //         setPost(res.data);
  //         setSearchVal("");
  //       } catch (error) {
  //         console.log({ error });
  //       }
  //     }
  //   }

  //   useEffect(async () => {
  //     setSearchVal("");
  //     if (
  //       !state?.settingData?.[settingId]?.previousData?.hasOwnProperty(
  //         rootFolderId
  //       )
  //     ) {
  //       let res = await ApiCall.getFoldersItem(userAccessToken, rootFolderId);
  //       try {
  //         setPost(res.data);
  //         state?.setApiSettingData(settingId, rootFolderId, res.data);
  //         state?.setLoading(false);
  //       } catch (error) {
  //         console.log({ error });
  //       }
  //     } else {
  //       let lastIndex = state?.settingData?.[settingId]?.breadCrumbs?.length - 1;
  //       let lastIndexId =
  //         state?.settingData?.[settingId]?.breadCrumbs?.[lastIndex].id;
  //       console.log({
  //         lastData: state?.settingData?.[settingId]?.previousData?.[lastIndexId],
  //       });
  //       setPost(state?.settingData?.[settingId]?.previousData?.[lastIndexId]);
  //     }
  //   }, [userAccessToken, rootFolderId, settingId]);

  return (
    <>
      {/* {JSON.stringify(post ?? [])} */}
      {/* <Response
        rootFolderId={rootFolderId}
        userAccessToken={userAccessToken}
        name={name}
        settingId={settingId}
        post={post}
        setPost={setPost}
        searchVal={searchVal}
        setSearchVal={setSearchVal}
        handleClick={handleClick}
      /> */}
    </>
  );
}

export default SettingResponse;
