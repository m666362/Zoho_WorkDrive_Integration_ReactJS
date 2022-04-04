import React, { useEffect, useState, useCallback, useRef } from "react";
import { useDropzone } from "react-dropzone";
import CommonComponent from "./CommonComponent";
import useTrackedStore from "./../../store/useTrackedStore";
import { Typography } from "@material-ui/core";

import { Grid } from "@material-ui/core";
import { useTableSearch } from "./UseTableSearch";
import CustomSeparator from "./BreadCumb";
import Box from "@mui/material/Box";

import ModalFileUpload from "./ModalFileUpload";
import * as ApiCall from "./api/ApiCalling";
import * as FileUploadResponse from "./api/FileUploadResponse";
import SnackAlert from "./SnackAlert";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

function Response(props) {
  // const { rootFolderId, userAccessToken, name, settingId} = props;
  const { rootFolderId, userAccessToken, name, settingId, post, setPost, searchVal, setSearchVal, handleClick } = props;
  const state = useTrackedStore();
  // const [post, setPost] = React.useState([]);
  // const [searchVal, setSearchVal] = React.useState("");
  const [snackOpen, setSnackOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  let moveCopyItem = useRef(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const { filteredData, loading } = useTableSearch({
    searchVal,
    retrieve: post,
  });

  // useEffect(async () => {
  //   setSearchVal("");
  //   if (
  //     !state?.settingData?.[settingId]?.previousData?.hasOwnProperty(
  //       rootFolderId
  //     )
  //   ) {
  //     let res = await ApiCall.getFoldersItem(userAccessToken, rootFolderId);
  //     try {
  //       setPost(res.data);
  //       state?.setApiSettingData(settingId, rootFolderId, res.data);
  //       state?.setLoading(false);
  //     } catch (error) {
  //       console.log({ error });
  //     }
  //   } else {
  //     let lastIndex = state?.settingData?.[settingId]?.breadCrumbs?.length - 1;
  //     let lastIndexId =
  //       state?.settingData?.[settingId]?.breadCrumbs?.[lastIndex].id;
  //     console.log({
  //       lastData: state?.settingData?.[settingId]?.previousData?.[lastIndexId],
  //     });
  //     setPost(state?.settingData?.[settingId]?.previousData?.[lastIndexId]);
  //   }
  // }, [userAccessToken, rootFolderId, settingId]);

  function scriptLoaded() {
    window.A.sort();
  }

  function handleCloseModal() {
    setOpen(false);
  }

  function moveCopyData(e, data) {
    moveCopyItem.current = data;
    // moveCopyItem.type = "move";
    console.log({ moveCopyItem });
  }

  async function pasteData(e, data) {
    
    console.log({previous: state.settingData?.[settingId], moveItem: moveCopyItem?.current, Des: data}); // pastePost
    if (
      moveCopyItem?.current?.type &&
      moveCopyItem?.current?.file?.id !== data?.pasteFile?.id &&
      data?.pasteFile?.attributes?.type === "folder"
    ) {
      console.log("Paste True");
      console.log(state.settingData?.[settingId]); // pastePost
      if (moveCopyItem?.current?.type==="copy") {
        if (state.settingData?.[settingId]?.previousData?.[data?.pasteFile?.id]) {
          console.log("Copy Folder exist in state");
        }else{
          console.log("Copy Folder doesn't exist");
        }
      }else if (moveCopyItem?.current?.type==="move") {
        // const res = await ApiCall.moveFile(userAccessToken, data?.pasteFile, moveCopyItem?.current?.file?.id);
        // let xArray = post?.filter((file) => file.id != moveCopyItem?.current?.file?.id);

        let parent_id = moveCopyItem?.current?.file?.attributes?.parent_id;
        let filteredData = state.settingData?.[settingId]?.previousData?.[parent_id]
        filteredData = filteredData?.filter((file) => file?.id != moveCopyItem?.current?.file?.id);

        // let destinationData = state.settingData?.[settingId]?.previousData?.[data?.pasteFile?.id]
        // destinationData = [moveCopyItem?.current?.file, ...destinationData];

        // setPost(xArray);
        // setSnackOpen(true);
        // state.setAddItemSettingData(settingId, moveCopyItem?.current?.file?.attributes?.parent_id, filteredData)
        // state.setAddItemSettingData(settingId, data?.pasteFile?.id, destinationData)
        console.log({
          parent_id,
          filteredData,

        });

        if (state.settingData?.[settingId]?.previousData?.[data?.pasteFile?.id]) {
          console.log("Move Folder exist in state");
        }else{
          console.log("Move Folder doesn't exist");
        }
      }

      // if (data?.id === lastIndexId) {
      //   console.log("Same dir");
      // } else {
      //   console.log("Different Dir");
      // }
    } else {
      console.log("Paste false");
    }
    if (false) {
      ApiCall.moveFile(state?.token, data, moveCopyItem.current)
        .then((res) => {
          let xArray = post.filter((file) => file.id != moveCopyItem.current);
          setSnackOpen(true);
          console.log({ xArray });
          setPost(xArray);

          let lastIndex =
            state?.settingData?.[settingId]?.breadCrumbs?.length - 1;
          let lastIndexId =
            state?.settingData?.[settingId]?.breadCrumbs?.[lastIndex].id;

          state?.setAddItemSettingData(settingId, lastIndexId, xArray);
          console.log(res);
        })
        .catch((err) => console.log(err));
      console.log({ id: moveCopyItem.current });
    }
  }

  // const moveCopyData = (e, data) => {
  //   console.log(data?.id);
  //   state?.setPasteChildId(data?.id)
  // };

  // const pasteData = (e, data) => {
  //   console.log({id: state?.pasteChildId});
  //   // console.log(data?.id);
  // };

  useEffect(() => {
    console.log({ XXXapiSetsDataXXX: state?.settingData });
  }, );

  // async function handleClick(file, data) {
  //   if (data) {
  //     console.log({ handleClickIdFound: "id found handleClick", file });
  //     checker.current = checker.current + 1; 
  //     setSearchVal("");
  //     state?.setApiSettingData(settingId, file, data);
  //     setPost(data);
  //   } else {
  //     try {
  //       console.log({ handleClickNotFound: "id not  found handleClick", file });
  //       let res = await ApiCall.getFoldersItem(userAccessToken, file?.id);
  //       checker.current = checker.current + 1; 

  //       state?.setApiSettingData(settingId, file, res.data);
  //       setPost(res.data);
  //       setSearchVal("");
  //     } catch (error) {
  //       console.log({ error });
  //     }
  //   }

  //   // console.log({
  //   //   file: file?.id,
  //   //   hit: state?.settingData?.[settingId]?.previousData?.hasOwnProperty(
  //   //     file?.id
  //   //   ),
  //   //   previous: state?.settingData?.[settingId]?.previousData,
  //   // });
  //   // if (
  //   //   state?.settingData?.[settingId]?.previousData?.hasOwnProperty(file?.id)
  //   // ) {
  //   //   console.log({ handleClickIdFound: "id found handleClick", file });
  //   //   setSearchVal("");
  //   //   setPost(state?.settingData?.[settingId]?.previousData?.[file?.id]);
  //   //   state?.setApiSettingData(
  //   //     settingId,
  //   //     file,
  //   //     state?.settingData?.[settingId]?.previousData?.[file?.id]
  //   //   );
  //   // } else {
  //   //   try {
  //   //     console.log({ handleClickNotFound: "id not  found handleClick", file });
  //   //     let res = await ApiCall.getFoldersItem(userAccessToken, file?.id);

  //   //     await state?.setApiSettingData(settingId, file, res.data);
  //   //     setPost(res.data);
  //   //     setSearchVal("");
  //   //   } catch (error) {
  //   //     console.log({ error });
  //   //   }
  //   // }
  // }

  async function setBreadCrumbsUrl(file, data) {
    state?.setBreadCrumbsSettingData(settingId, file);
    setPost(data); 
    console.log({
      breadCrumbs: state?.settingData?.[settingId]?.breadCrumbs,
    });
    setSearchVal("");
    console.log({
      setBread: {
        data,
        file: file?.id,
        hit: state?.settingData?.[settingId]?.previousData?.hasOwnProperty(
          file?.id
        ),
        settingId: settingId,
        previous: state?.settingData,
      },
    });

    // if (
    //   state?.settingData?.[settingId]?.previousData?.hasOwnProperty(file?.id)
    // ) {
    //   console.log(
    //     { setBreadCrumbsUrlFound: "id found setBreadCrumbsUrl" },
    //     file
    //   );
    //   state?.setBreadCrumbsSettingData(settingId, file);
    //   setPost(state?.settingData?.[settingId]?.previousData?.[file?.id]);
    //   console.log({
    //     breadCrumbs: state?.settingData?.[settingId]?.breadCrumbs,
    //   });
    //   setSearchVal("");
    // } else {
    //   console.log({
    //     setBreadCrumbsUrlNotFount: "id not Found found setBreadCrumbsUrl",
    //     file,
    //   });
    //   try {
    //     const response = await ApiCall.getFoldersItem(
    //       userAccessToken,
    //       file?.id
    //     );

    //     state?.setApiSettingData(settingId, file?.id, response.data);
    //     state?.setBreadCrumbsSettingData(settingId, file);
    //     setPost(response.data);
    //     setSearchVal("");
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
  }

  const [files, setFiles] = React.useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    noClick: true,
    noKeyboard: true,
    // accept: "image/*",
    onDrop: (acceptedFiles) => {
      console.log("File type detection", acceptedFiles);
      setOpen(true);
      setFiles(
        acceptedFiles.map((file, index) => {
          if (file.type.split("/")[1] == "pdf")
            return Object.assign(file, {
              preview: URL.createObjectURL(file),
              special: true,
              specialType: "pdf",
              id: index,
            });
          else if (file.type.split("/")[0] == "image") {
            return Object.assign(file, {
              preview: URL.createObjectURL(file),
              special: false,
              specialType: "image",
              id: index,
            });
          } else if (file.type.split("/")[1] == "zip") {
            return Object.assign(file, {
              preview: URL.createObjectURL(file),
              special: false,
              specialType: "zip",
              id: index,
            });
          } else if (file.type.split("/")[1] == "msword") {
            return Object.assign(file, {
              preview: URL.createObjectURL(file),
              special: false,
              specialType: "msword",
              id: index,
            });
          } else {
            return Object.assign(file, {
              preview: URL.createObjectURL(file),
              special: false,
              specialType: "other",
              id: index,
            });
          }
        })
      );
    },
  });

  const removeFile = (deleteFile) => {
    console.log(deleteFile);
    setFiles(files.filter((file) => file.id != deleteFile.id));
  };

  const uploadFile = (folderId) => {
    // Do something with the files
    console.log(files);
    let lastIndex = state?.settingData?.[settingId]?.breadCrumbs?.length - 1;
    let lastIndexId =
      state?.settingData?.[settingId]?.breadCrumbs?.[lastIndex].id;
    var myCustomArray = post;
    files.forEach(async (element, index) => {
      const data = new FormData();
      data.append("file", element);
      // console.warn(element);
      console.log({
        formData: data,
        element,
      });
      // console.log({fileUploading: myUrl});
      try {
        const response = await ApiCall.fileUploader(
          state?.settingData?.[settingId]?.userAccessToken,
          data,
          lastIndexId
        );

        let myCustomFile = FileUploadResponse.makeCustomFile(response);
        myCustomArray.unshift(myCustomFile);
        console.log({ myCustomArray: myCustomArray });
        state?.setAddItemSettingData(settingId, lastIndexId, myCustomArray);
        setPost(myCustomArray);
        setSnackOpen(true);
        console.log({ post: post });
      } catch (error) {
        console.log({ error: error });
      }
    });
    setFiles([]);
  };

  const thumbs = files.length ? (
    <ModalFileUpload
      files={files}
      removeFile={removeFile}
      open={open}
      setOpen={setOpen}
      handleCloseModal={handleCloseModal}
      uploadFile={uploadFile}
    />
  ) : (
    <></>
  );

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackOpen(false);
  };

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      {...getRootProps({ className: "dropzone disabled" })}
    >
      {/* <Grid item container>
        <CustomSeparator
          settingId={settingId}
          setBreadCrumbsUrl={setBreadCrumbsUrl}
          searchVal={searchVal}
          setSearchVal={setSearchVal}
          handleClickOpen={handleClickOpen}
          setPost={setPost}
          post={post}
          setSnackOpen={setSnackOpen}
        />
      </Grid> */}
      {filteredData && !state?.loading && (
        <Grid item container>
        <CustomSeparator
          settingId={settingId}
          setBreadCrumbsUrl={setBreadCrumbsUrl}
          searchVal={searchVal}
          setSearchVal={setSearchVal}
          handleClickOpen={handleClickOpen}
          setPost={setPost}
          post={post}
          setSnackOpen={setSnackOpen}
        />
      </Grid>
      )}
      <input {...getInputProps()} />
      <div style={thumbsContainer}>{thumbs}</div>

      {filteredData.length === 0 && !state?.loading && (
        <Grid item fullheight justifyContent="center">
          <Typography fullwidth variant="h1" component="div">
            Nothing here!!!
          </Typography>
        </Grid>
      )}
      {/* <div>{JSON.stringify(post??[])}</div> */}
      {filteredData.length !== 0 && (
        <Grid
          container
          item
          xs={12}
          spacing={{ xs: 2, md: 3 }}
          sx={{ padding: 5 }}
        >
          <Grid item xs={12} spacing={2}>
            {filteredData.filter((file) => file.attributes.type === "folder")
              .length !== 0 && (
              <Typography
                variant="h5"
                component="div"
                gutterBottom
                sx={{ textAlign: "left" }}
              >
                Folder
              </Typography>
            )}

            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              // columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {filteredData?.map((file, index) => {
                if (file.attributes.type == "folder")
                  return (
                    <Grid item xs={12} sm={4} md={3}>
                      <CommonComponent
                        settingId={settingId}
                        file={file}
                        handleClick={handleClick}
                        setPost={setPost}
                        post={post}
                        setSnackOpen={setSnackOpen}
                        moveCopyData={moveCopyData}
                        pasteData={pasteData}
                      />
                    </Grid>
                  );
              })}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            {filteredData.filter((file) => file.attributes.type !== "folder")
              .length !== 0 && (
              <Typography
                variant="h5"
                component="div"
                gutterBottom
                sx={{ textAlign: "left" }}
              >
                Files
              </Typography>
            )}

            {!state?.settingData?.[settingId]?.listView ? (
              <Grid
                container
                spacing={true ? { xs: 2, md: 4 } : {}}
                rowSpacing={false ? 0 : 1}
                columnSpacing={false ? {} : { xs: 1, sm: 2, md: 3 }}
              >
                {filteredData?.map((file, index) => {
                  if (file.attributes.type !== "folder")
                    return (
                      <Grid item xs={12} sm={6} md={4}>
                        <CommonComponent
                          settingId={settingId}
                          file={file}
                          handleClick={handleClick}
                          setPost={setPost}
                          post={post}
                          setSnackOpen={setSnackOpen}
                          moveCopyData={moveCopyData}
                          pasteData={pasteData}
                        />
                      </Grid>
                    );
                })}
              </Grid>
            ) : (
              <Grid
                container
                spacing={
                  state?.settingData?.[settingId]?.listView
                    ? { xs: 2, md: 3 }
                    : {}
                }
                columns={
                  state?.settingData?.[settingId]?.listView
                    ? { xs: 4, sm: 8, md: 12 }
                    : {}
                }
                rowSpacing={state?.settingData?.[settingId]?.listView ? 0 : 1}
                columnSpacing={
                  state?.settingData?.[settingId]?.listView
                    ? {}
                    : { xs: 1, sm: 2, md: 3 }
                }
              >
                {filteredData?.map((file, index) => {
                  if (file.attributes.type !== "folder")
                    return (
                      <Grid item xs={12} md={3}>
                        <CommonComponent
                          settingId={settingId}
                          file={file}
                          handleClick={handleClick}
                          setPost={setPost}
                          post={post}
                          setSnackOpen={setSnackOpen}
                          moveCopyData={moveCopyData}
                          pasteData={pasteData}
                        />
                      </Grid>
                    );
                })}
              </Grid>
            )}
          </Grid>
        </Grid>
      )}
      <SnackAlert
        snackOpen={snackOpen}
        handleCloseSnack={handleCloseSnack}
        severity={"success"}
        message={"This is a success message!"}
      />
    </Grid>
  );
}

export default Response;
