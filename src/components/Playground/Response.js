import React, { useEffect, useState, useCallback, useRef } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
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
  const state = useTrackedStore();
  const pageRenderCount = useRef(0);
  const [post, setPost] = React.useState([]);
  const [searchVal, setSearchVal] = React.useState("");
  const [snackOpen, setSnackOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");

  useEffect(() => {
    pageRenderCount.current = pageRenderCount.current + 1;
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const { filteredData, loading } = useTableSearch({
    searchVal,
    retrieve: post ?? [],
  });

  // const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  // useEffect(() => {
  //   setSearchVal("");

  //   ApiCall.getFoldersItem(state.token, "84vmz6929609281b747e08cf692610413af1b")
  //     .then((res) => {
  //       setPost(res.data);
  //       state.setApiData("84vmz6929609281b747e08cf692610413af1b", res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [state.token]);

  // useEffect(() => {
  //   setSearchVal("");

  //   ApiCall.getFoldersItem(state.token, "pozgm6f2fd75302dc44b2ae733a74b8b77e87")
  //     .then((res) => {
  //       setPost(res.data);
  //       state.setApiData("pozgm6f2fd75302dc44b2ae733a74b8b77e87", res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [state.token]);

  useEffect(() => {
    setSearchVal("");

    ApiCall.getFoldersItem(state.token, "igmch451bbcad1ac04521b63eb9609ab84b0f")
      .then((res) => {
        setPost(res.data);
        state.setApiData("igmch451bbcad1ac04521b63eb9609ab84b0f", res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [state.token]);

  function scriptLoaded() {
    window.A.sort();
  }

  function handleCloseModal() {
    setOpen(false);
  }

  async function handleClick(file) {
    if (!state.apiData.hasOwnProperty(file?.id)) {
      console.log({ notFound: "id found handleClick" });
      Object.keys(state.apiData).map((i) => console.log(i));
      // console.log(file.id, ' handleClick');
      // console.log({notFound: 'id not found handleClick'});
      ApiCall.getFoldersItem(state.token, file?.id)
        .then((res) => {
          state.setApiData(file.id, res.data);
          state.setBreadCrumbs(file);
          setPost(res.data);
          setSearchVal("");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      Object.keys(state.apiData).map((i) => console.log(i));
      console.log({ idFound: "id found handleClick" });
      state.setBreadCrumbs(file);
      setPost(state.apiData[file.id]);
      setSearchVal("");
    }
  }

  async function setBreadCrumbsUrl(file) {
    if (!state.apiData.hasOwnProperty(file?.id)) {
      Object.keys(state.apiData).map((i) => console.log(i));
      console.log({ notFound: "id notFound found setBreadCrumbsUrl" });

      // console.log(file.id, ' setBreadCrumbsUrl');
      // console.log({notFound: 'id not found setBreadCrumbsUrl'});
      let myUrl = `https://workdrive.zoho.com/api/v1/files/${file?.id}/files`;
      try {
        const response = await axios.get(myUrl, {
          headers: {
            Authorization: state.token,
            Accept: "application/vnd.api+json",
          },
        });

        state.setBreadCrumbsUrl(file);
        state.setApiData(file.id, response.data.data);
        setPost(response.data.data);
        setSearchVal("");
      } catch (error) {
        console.log(error);
      }
    } else {
      Object.keys(state.apiData).map((i) => console.log(i));
      console.log({ idFound: "id found setBreadCrumbsUrl" });
      state.setBreadCrumbsUrl(file);
      setPost(state.apiData[file.id]);
      setSearchVal("");
    }
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

    var myCustomArray = post;
    files.forEach(async (element, index) => {
      console.log({ FolderId: state.bread[state.bread.length - 1].id });
      const data = new FormData();
      data.append("content", element);
      console.warn(element);
      // console.log({fileUploading: myUrl});
      try {
        const response = await ApiCall.fileUploader(
          state.token,
          data,
          folderId
        );
        console.log({ testPurpose: response });
        console.log({
          dataTesting: response.data.data[0].attributes.resource_id,
        });

        let myCustomFile = FileUploadResponse.makeCustomFile(response);
        myCustomArray.unshift(myCustomFile);
        console.log({ myCustomArray: myCustomArray });
        state.setApiData(state.bread[state.bread.length - 1].id, myCustomArray);
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
      {/* <div>
        <div>{
          state.bread.map(i => <div>{JSON.stringify(i)}</div>)
        }</div>
        <br />
        <div>{
          Object.keys(state.apiData).map(i => <div>{JSON.stringify(i)}</div>)
        }</div>
        <br />
        <div>{
          state.bread[state.bread.length - 1].id
        }</div></div> */}

      <Box sx={{ display: "none" }}>
        <div>
          {state.bread.map((i) => (
            <div>{JSON.stringify(i)}</div>
          ))}
        </div>
        <br />
        <div>
          {Object.keys(state.apiData).map((i) => (
            <div>{JSON.stringify(i)}</div>
          ))}
        </div>
        <br />
        <div>{state.bread[state.bread.length - 1].id}</div>
      </Box>
      <Grid item container>
        <CustomSeparator
          setBreadCrumbsUrl={setBreadCrumbsUrl}
          searchVal={searchVal}
          setSearchVal={setSearchVal}
          handleClickOpen={handleClickOpen}
          setPost={setPost}
          post={post}
          setSnackOpen={setSnackOpen}
        />
      </Grid>
      <input {...getInputProps()} />
      <div style={thumbsContainer}>{thumbs}</div>

      {filteredData.length === 0 && !state.loading && (
        <Grid item fullheight justifyContent="center">
          <Typography fullwidth variant="h1" component="div">
            Nothing here!!!
          </Typography>
        </Grid>
      )}
      <div>{JSON.stringify(post??[])}</div>
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
                        file={file}
                        handleClick={() => handleClick(file)}
                        setPost={setPost}
                        post={post}
                        setSnackOpen={setSnackOpen}
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

            {state.listView ? (
              <Grid
                container
                spacing={true ? { xs: 2, md: 3 } : {}}
                columns={true ? { xs: 4, sm: 8, md: 12 } : {}}
                rowSpacing={false ? 0 : 1}
                columnSpacing={false ? {} : { xs: 1, sm: 2, md: 3 }}
              >
                {filteredData?.map((file, index) => {
                  if (file.attributes.type !== "folder")
                    return (
                      <Grid item xs={6} md={false ? 3 : 6}>
                        <CommonComponent
                          file={file}
                          handleClick={() => handleClick(file)}
                          setPost={setPost}
                          post={post}
                          setSnackOpen={setSnackOpen}
                        />
                      </Grid>
                    );
                })}
              </Grid>
            ) : (
              <Grid
                container
                spacing={state.listView ? { xs: 2, md: 3 } : {}}
                columns={state.listView ? { xs: 4, sm: 8, md: 12 } : {}}
                rowSpacing={state.listView ? 0 : 1}
                columnSpacing={state.listView ? {} : { xs: 1, sm: 2, md: 3 }}
              >
                {filteredData?.map((file, index) => {
                  if (file.attributes.type !== "folder")
                    return (
                      <Grid item xs={6} md={false ? 3 : 6}>
                        <CommonComponent
                          file={file}
                          handleClick={() => handleClick(file)}
                          setPost={setPost}
                          post={post}
                          setSnackOpen={setSnackOpen}
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
