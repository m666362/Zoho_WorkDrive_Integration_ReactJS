import React, { useState } from "react";
import ActionAreaCard from "./ImageCard";

import Button from "@mui/material/Button";
import { useForm, Controller } from "react-hook-form";

import * as ApiCall from "./api/ApiCalling";
import * as FileUploadResponse from "./api/FileUploadResponse";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField,
} from "@material-ui/core";
import DisplayImage from "./DisplayImage";
import "./coupon.css";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { RiPencilLine } from "react-icons/ri";

import { RiSendPlaneFill, RiDeleteBin6Line } from "react-icons/ri";
import Folder from "./Folder";

import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { makeStyles } from "@mui/styles";
import "./project_folder.css";
import ListItems from "./ListItems";
import useTrackedStore from "../../store/useTrackedStore";
import FileImageCard from "./FileImageCard";

const useStyles = makeStyles({
  grid: {
    border: "1px solid black",
  },
  icon: {
    fontSize: "30px !important",
  },
});

function CommonComponent({ file, handleClick, setPost, post, setSnackOpen }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState(file.attributes.name);
  const state = useTrackedStore();

  const { handleSubmit, control, reset } = useForm();
  const onSubmit = (data) => {
    if (file.attributes.type === "folder") {
      ApiCall.renameFileFolder(state.token, data, file)
        .then((response) => {
          let xArray = post.map((file) =>
            file.id !== response.data.data.id ? file : response.data.data
          );
          // xArray.push(response.data.data);
          console.log({ xArray: xArray });
          setSnackOpen(true);
          setPost(xArray);
          state.setApiData(state.bread[state.bread.length - 1].id, xArray);
          console.log({ fileNameChangeResponse: response });
        })
        .catch((error) => {
          alert(error);
          console.log(error);
        });
    } else {
      ApiCall.renameFile(state.token, data, file)
        .then((response) => {
          let xArray = post.map((file) =>
            file.id !== response.data.data.id ? file : response.data.data
          );
          // xArray.push(response.data.data);
          console.log({ xArray: xArray });
          setSnackOpen(true);
          setPost(xArray);
          state.setApiData(state.bread[state.bread.length - 1].id, xArray);
          console.log({ fileNameChangeResponse: response });
        })
        .catch((error) => {
          alert(error);
          console.log(error);
        });
    }

    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const copyCoupon = (e, data) => {
    // var coupon = data.attributes.name;
    // navigator.clipboard.writeText(coupon);
    console.log("copy", data.id);
  };

  const deleteData = (e, data) => {
    // var coupon = data.id;
    console.log("delete", data.id);
    // alert(`Coupon code ${data.attributes.name} deleted`);

    if (file.attributes.type === "folder") {
      ApiCall.deleteFileFolder(state.token, data)
        .then((response) => {
          let xArray = post.filter((file) => file.id != data.id);
          setSnackOpen(true);
          setPost(xArray);
          state.setApiData(state.bread[state.bread.length - 1].id, xArray);
          console.log(response);
        })
        .catch((error) => {
          alert(error);
          console.log(error);
        });
    } else {
      ApiCall.deleteFile(state.token, data)
        .then((response) => {
          let xArray = post.filter((file) => file.id != data.id);
          setSnackOpen(true);
          setPost(xArray);
          state.setApiData(state.bread[state.bread.length - 1].id, xArray);
          console.log(response);
        })
        .catch((error) => {
          alert(error);
          console.log(error);
        });
    }
  };

  return (
    // <InputDecider file={file} handleClick={handleClick} />
    <>
      <ContextMenuTrigger id={file.id}>
        {state.listView && file.attributes.type !== "folder" ? (
          <ListItems file={file} />
        ) : (
          <InputDecider
            file={file}
            handleClick={handleClick}
            post={post}
            setSnackOpen={setSnackOpen}
            setPost={setPost}
          />
        )}
      </ContextMenuTrigger>
      <ContextMenu id={file.id}>
        <MenuItem data={file} onClick={deleteData}>
          <RiDeleteBin6Line className="delete" />
          <span> Delete </span>
        </MenuItem>
        <MenuItem data={file} onClick={handleClickOpen}>
          <RiPencilLine className="RiPencilLine" />
          <span> Rename </span>
        </MenuItem>
        <MenuItem data={file} onClick={handleClickOpen}>
          <RiPencilLine className="RiPencilLine" />
          <span> Move </span>
        </MenuItem>
      </ContextMenu>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Rename"}</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="name"
              control={control}
              defaultValue={file.attributes.name.split(".")[0]}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField id="standard-basic" variant="standard" {...field} />
              )}
            />

            <div>
              <Button
                sx={{ marginTop: "10px" }}
                type="submit"
                variant="contained"
              >
                Rename
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default CommonComponent;

const InputDecider = ({ file, handleClick, post, setSnackOpen, setPost }) => {
  const classes = useStyles();
  const state = useTrackedStore();
  const handleStart = (e, file) => {
    console.log(file.file);
    e.dataTransfer.setData("dropFile", file.file.id);
    e.dataTransfer.setData("dropFileParentId", file.file.attributes.parent_id);
    e.dataTransfer.setData("fileType", file.file.attributes.type);
    e.dataTransfer.setData("fileName", file.file.attributes.name);
    e.dataTransfer.setData("filePermanentLink", file.file.attributes.permalink);
    e.dataTransfer.setData("fileSize", file.file.attributes.storage_info.size);
    e.dataTransfer.setData(
      "fileSizeInBytes",
      file.file.attributes.storage_info.size_in_bytes
    );
    // e.preventDefault();
    // e.stopPropagation();
  };

  const handleDrop = (e, file) => {
    console.log({ e: file.id });
    let childId = e.dataTransfer.getData("dropFile");
    // let childType = e.dataTransfer.getData("fileType");
    // let childName = e.dataTransfer.getData("fileName");
    // let childPermalink = e.dataTransfer.getData("filePermanentLink");
    // let childSize = e.dataTransfer.getData("fileSize");
    // let childSizeInBytes = e.dataTransfer.getData("fileSizeInBytes");

    let response = {
      data: {
        data: [
          {
            attributes: {
              Permalink: e.dataTransfer.getData("filePermanentLink"),
              parent_id: file.id,
              FileName: e.dataTransfer.getData("fileName"),
              resource_id: e.dataTransfer.getData("dropFile"),
              childSize: e.dataTransfer.getData("fileSize"),
            },
            type: e.dataTransfer.getData("fileType"),
          },
        ],
      },
    };

    let myCustomFile = FileUploadResponse.makeCustomFile(response);
    //  previousParent: e.dataTransfer.getData("dropFileParentId"),
    if (childId) {
      ApiCall.moveFile(state.token, file, childId)
        .then((response) => {
          alert(JSON.stringify(response));
          console.log({ resToBreadCrumb: response });
          let xArray = post.filter((file) => file.id != childId);
          setSnackOpen(true);
          setPost(xArray);
          state.setApiData(state.bread[state.bread.length - 1].id, xArray);
          if (state.apiData[file.id]) {
            let tempArray = state.apiData[file.id].concat([myCustomFile]);
            state.setApiData(file.id, tempArray);
          }
          console.log({ inner: state.apiData[file.id] });
          e.dataTransfer.setData("dropFile", null);
          console.log(response);
        })
        .catch((error) => {
          alert(error);
          console.log(error);
        });
    }
  };

  let inputProps = {
    file,
    handleClick,
  };

  switch (file.attributes.type) {
    case "folder":
      return (
        <Grid
          onClick={() => {
            handleClick(file ? file : "some");
          }}
          {...inputProps}
          id={file.id}
          draggable="true"
          onDragStart={(e) => handleStart(e, { file: file })}
          onDrop={(e) => handleDrop(e, file)}
        >
          <Folder
            icon={<FolderOpenIcon className={classes.icon}/>}
            title={file.attributes.name}
            details={file.attributes.created_time_i18}
          />
        </Grid>
      );
      break;
    case "image":
      return (
        <Grid
          draggable="true"
          id={file.id}
          onDragStart={(e) => handleStart(e, { file: file })}
        >
          <DisplayImage file={file} />
        </Grid>
      );
      break;
    case "pdf":
      return (
        <Grid
          draggable="true"
          id={file.id}
          onDragStart={(e) => handleStart(e, { file: file })}
        >
          <ActionAreaCard file={file} />
        </Grid>
      );
      break;
    case "video":
      return (
        <Grid
          draggable="true"
          id={file.id}
          onDragStart={(e) => handleStart(e, { file: file })}
        >
          <ActionAreaCard file={file} />
        </Grid>
      );
      break;
    case "file":
      return (
        <Grid
          draggable="true"
          id={file.id}
          onDragStart={(e) => handleStart(e, { file: file })}
        >
          {file.attributes.extn === "zip" ? (
            <FileImageCard file={file} />
          ) : (
            <div>Hello</div>
            // <FileImageCard file={file} />
          )}
        </Grid>
      );
      break;
    default:
      return (
        <Grid>
          <FileImageCard file={file} />
        </Grid>
      );
      break;
  }
  return <></>;
};
