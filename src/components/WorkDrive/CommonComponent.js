import React, { useState } from "react";
import ActionAreaCard from "./DisplayPdf";

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
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";

import Folder from "./Folder";

import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { makeStyles } from "@mui/styles";
import "./project_folder.css";
import ListItems from "./ListItems";
import useTrackedStore from "../../store/useTrackedStore";
import FileImageCard from "./DisplayFile";

const useStyles = makeStyles({
  grid: {
    border: "1px solid black",
  },
  icon: {
    fontSize: "30px !important",
  },
});

function CommonComponent({
  pasteOpen,
  file,
  handleClick,
  settingId,
  setPost,
  post,
  setSnackOpen,
  moveCopyData,
  pasteData,
}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState(file.attributes.name);
  const [id, setId] = React.useState("");
  const state = useTrackedStore();

  const { handleSubmit, control, reset } = useForm();
  const onSubmit = (data) => {
    if (file.attributes.type === "folder") {
      ApiCall.renameFileFolder(state?.token, data, file)
        .then((response) => {
          let xArray = post.map((file) =>
            file.id !== response.data.data.id ? file : response.data.data
          );
          // xArray.push(response.data.data);
          console.log({ xArray: xArray });
          setSnackOpen(true);
          setPost(xArray);

          let lastIndex =
            state?.settingData?.[settingId]?.breadCrumbs?.length - 1;
          let lastIndexId =
            state?.settingData?.[settingId]?.breadCrumbs?.[lastIndex].id;
          state?.setAddItemSettingData(settingId, lastIndexId, xArray);
          // state?.setApiSettingData(settingId, lastIndexId, xArray);
        })
        .catch((error) => {
          alert(error);
          console.log(error);
        });
    } else {
      ApiCall.renameFile(state?.token, data, file)
        .then((response) => {
          let xArray = post.map((file) =>
            file.id !== response.data.data.id ? file : response.data.data
          );
          // xArray.push(response.data.data);
          console.log({ xArray: xArray });
          setSnackOpen(true);
          setPost(xArray);

          let lastIndex =
            state?.settingData?.[settingId]?.breadCrumbs?.length - 1;
          let lastIndexId =
            state?.settingData?.[settingId]?.breadCrumbs?.[lastIndex].id;
          state?.setAddItemSettingData(settingId, lastIndexId, xArray);
          // state?.setApiSettingData(settingId, lastIndexId, xArray);
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
      ApiCall.deleteFileFolder(state?.token, data)
        .then((response) => {
          let xArray = post.filter((file) => file.id != data.id);
          setSnackOpen(true);
          setPost(xArray);

          let lastIndex =
            state?.settingData?.[settingId]?.breadCrumbs?.length - 1;
          let lastIndexId =
            state?.settingData?.[settingId]?.breadCrumbs?.[lastIndex].id;
          state?.setAddItemSettingData(settingId, lastIndexId, xArray);
          // state?.setApiSettingData(settingId, lastIndexId, xArray);
        })
        .catch((error) => {
          alert(error);
          console.log(error);
        });
    } else {
      ApiCall.deleteFile(state?.token, data)
        .then((response) => {
          let xArray = post.filter((file) => file.id != data.id);
          setSnackOpen(true);
          console.log({ xArray });
          setPost(xArray);

          let lastIndex =
            state?.settingData?.[settingId]?.breadCrumbs?.length - 1;
          let lastIndexId =
            state?.settingData?.[settingId]?.breadCrumbs?.[lastIndex].id;
          state?.setAddItemSettingData(settingId, lastIndexId, xArray);
          // state?.setApiSettingData(settingId, lastIndexId, xArray);
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
        {state.settingData?.[settingId]?.listView &&
        file.attributes.type !== "folder" ? (
          <ListItems file={file} />
        ) : (
          <InputDecider
            file={file}
            settingId={settingId}
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
        <MenuItem
          data={{
            type: "copy",
            file: file,
            parentFiles: post,
          }}
          onClick={moveCopyData}
        >
          <ContentCopyIcon className="RiPencilLine" />
          <span> Copy </span>
        </MenuItem>
        <MenuItem
          data={{
            type: "move",
            file: file,
            parentFiles: post,
          }}
          onClick={moveCopyData}
        >
          <DriveFileMoveIcon className="RiPencilLine" />
          <span> Move </span>
        </MenuItem>
        {state.pasteOpen && (
          <MenuItem
            data={{
              pasteFile: file,
              pastePost:
                state?.settingData?.[settingId]?.previousData?.[file?.id],
            }}
            onClick={pasteData}
          >
            <ContentPasteIcon className="RiPencilLine" />
            <span> Paste </span>
          </MenuItem>
        )}
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

const InputDecider = ({
  file,
  settingId,
  handleClick,
  post,
  setSnackOpen,
  setPost,
}) => {
  const classes = useStyles();
  const state = useTrackedStore();
  const handleStart = (event, file) => {
    event.dataTransfer.setData(
      "moveData",
      JSON.stringify({
        fileName: file?.file?.attributes?.name,
        dropFile: event.target.id,
        fileType: file?.file?.attributes?.type,
        dropFileParentId: file?.file?.attributes?.parent_id,
        filePermanentLink: file?.file?.attributes?.permalink,
        fileSize: file?.file?.attributes?.storage_info?.size,
        fileSizeInBytes: file?.file?.attributes?.storage_info?.size_in_bytes,
      })
    );

    // console.log({ nameOfFilefile: file.attributes.name });
    // e.dataTransfer.setData("dropFile", file.file.id);
    // e.dataTransfer.setData("dropFileParentId", file.file.attributes.parent_id);
    // e.dataTransfer.setData("fileType", file.file.attributes.type);
    // e.dataTransfer.setData("fileName", "file.file.attributes.name");
    // e.dataTransfer.setData("filePermanentLink", file.file.attributes.permalink);
    // e.dataTransfer.setData("fileSize", file.file.attributes.storage_info.size);
    // e.dataTransfer.setData(
    //   "fileSizeInBytes",
    //   file.file.attributes.storage_info.size_in_bytes
    // );

    // console.log("fileName", "file.file.attributes.name");
    // e.preventDefault();
    // e.stopPropagation();
  };

  const handleDrop = (event, file) => {
    event.preventDefault();
    var moveData = JSON.parse(event.dataTransfer.getData("moveData"));
    // console.log({ moveData });
    // // // console.log({ e, file: file.id });
    // console.log({
    //   attributes: {
    //     Permalink: moveData?.filePermanentLink,
    //     parent_id: file?.id,
    //     FileName: moveData?.fileName,
    //     resource_id: moveData?.dropFile,
    //     childSize: moveData?.fileSize,
    //     childSizeInBytes: moveData?.fileSizeInBytes
    //   },
    //   type: moveData?.fileType,
    // });
    let response = {
      data: {
        data: [
          {
            attributes: {
              Permalink: moveData?.filePermanentLink,
              parent_id: file?.id,
              FileName: moveData?.fileName,
              resource_id: moveData?.dropFile,
              childSize: moveData?.fileSize,
              childSizeInBytes: moveData?.fileSizeInBytes,
              type: moveData?.fileType,
            },
          },
        ],
      },
    };

    let myCustomFile = FileUploadResponse.makeCustomFile(response);
    // //  previousParent: e.dataTransfer.getData("dropFileParentId"),
    if (moveData?.dropFile && moveData?.dropFile !== file?.id) {
      ApiCall.moveFile(state?.token, file, moveData?.dropFile)
        .then((response) => {
          alert(JSON.stringify(response));
          console.log({ resToBreadCrumb: response });
          let xArray = post.filter((file) => file.id != moveData?.dropFile);
          setSnackOpen(true);
          setPost(xArray);

          let lastIndex =
            state?.settingData?.[settingId]?.breadCrumbs?.length - 1;
          let lastIndexId =
            state?.settingData?.[settingId]?.breadCrumbs?.[lastIndex].id;
          state?.setAddItemSettingData(settingId, lastIndexId, xArray);
          // state?.setApiSettingData(settingId, lastIndexId, xArray);

          if (state?.settingData?.[settingId]?.previousData?.[file?.id]) {
            let tempArray = state?.settingData?.[settingId]?.previousData?.[
              file?.id
            ].concat([myCustomFile]);
            state?.setAddItemSettingData(settingId, file?.id, tempArray);
            // state?.setApiSettingData(settingId, file?.id, tempArray);
          }
          event.dataTransfer.setData("moveData", null);
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
            handleClick(
              file,
              state?.settingData?.[settingId]?.previousData?.[file?.id]
            );
          }}
          {...inputProps}
          id={file.id}
          draggable="true"
          onDragStart={(e) => handleStart(e, { file: file })}
          onDrop={(e) => handleDrop(e, file)}
        >
          <Folder
            icon={<FolderOpenIcon className={classes.icon} />}
            title={file.attributes.name}
            details={file.id}
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
    default:
      return (
        <Grid
          draggable="true"
          id={file.id}
          onDragStart={(e) => handleStart(e, { file: file })}
        >
          <FileImageCard file={file} />
        </Grid>
      );
      break;
  }
  return <></>;
};
