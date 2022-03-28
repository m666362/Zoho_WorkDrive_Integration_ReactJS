import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import CloseIcon from "@mui/icons-material/Close";

import * as ApiCall from "./api/ApiCalling";

import ModalPdf from "./ModalPdf";

import useTrackedStore from "../../store/useTrackedStore";
import ModalFile from "./ModalFile";
import ModalImage from "./ModalImage";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  maxWidth: "1100px",
  width: "100%",
  height: "auto",
  transform: "translate(-50%, -50%)",
  outline: "none",
  background: "#ffffff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#e4f5ff",
}));

function ListItems({ file }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const [profileImage, setProfileImage] = React.useState("");
  const state = useTrackedStore();

  const getUserImage = async (file) => {
    // let res = await axios({
    //   method: "get",
    //   headers: {
    //     Accept: "application/vnd.api+json",
    //     Authorization: state.token,
    //   },
    //   responseType: "blob",
    //   url: `https://workdrive.zoho.com/api/v1/download/${file?.id}`,
    // });
    // console.log(
    //   "file.attributes.thumbnail_url",
    //   file?.attributes.thumbnail_url
    // );
    let res = await ApiCall.getImageResponse(state?.token, file)
    console.log({res, id: file?.id});
    var file = new Blob([res.data]);
    var fileURL = URL.createObjectURL(file);
    console.log("fileURL", fileURL);
    state.setLoading(false)
    setOpen(true);
    setProfileImage(fileURL);
    // window.open(fileURL);
  };

  const handleStart = (e, file) => {
    console.log(file.file);
    e.dataTransfer.setData("dropFile", file.file.id);
    // e.preventDefault();
    // e.stopPropagation();
  };

  const handleClickOpen = (file) => {
    console.log({ file: file });
    getUserImage(file);
  };

  const handleClose = () => {
    console.log("close dialog");
    state.setLoading(false);
    setOpen(false);
  };

  return (
    <>
      <Item
        container
        wrap="nowrap"
        spacing={1}
        draggable="true"
        id={file.id}
        onDragStart={(e) => handleStart(e, { file: file })}
        onClick={() => {
          //  handleClickOpen(file)
          state.setLoading(true);
          handleClickOpen(file);
        }}
      >
        <Grid item>
          <Avatar sx={{ margin: 1 }}>{file?.attributes.extn}</Avatar>
        </Grid>
        <Grid item xs>
          <Typography>{file?.attributes.name}</Typography>
        </Grid>
        <Grid item xs>
          <Typography>{file.attributes.created_time_i18}</Typography>
        </Grid>
      </Item>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {
            file.attributes.type=="image"? <img width="100%" alt="" src={profileImage} onClick={handleClose}/>:""
          }
          {
            file.attributes.type=="pdf"?<ModalPdf width="100%" alt="" open={open} setOpen={setOpen} profileImage={profileImage}  />:""
          }
          {
            file.attributes.extn=="rar"?<ModalFile width="100%" alt="" open={open} setOpen={setOpen} profileImage={""} file={file} />:""
          }
          {
            file.attributes.extn=="txt"?<ModalFile width="100%" alt="" open={open} setOpen={setOpen} profileImage={""} file={file} />:""
          }
          
          {/* {
            file.attributes.extn=="image"?<ModalImage width="100%" alt="" open={open} setOpen={setOpen} profileImage={profileImage} />:""
          } */}
        </Box>
      </Modal>
    </>
  );
}

export default ListItems;
