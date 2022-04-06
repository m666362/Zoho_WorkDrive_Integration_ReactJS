import React from "react";

import Modal from "@mui/material/Modal";
import { Box } from "@mui/system";
import useTrackedStore from "../../store/useTrackedStore";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@material-ui/core";
const imgSize = window.screen.width/2.5;

const style = {
  position: "relative",
  width: `${imgSize}px`,
  top: "50%",
  left: "50%",
  height: "auto",
  transform: "translate(-50%, -50%)",
  outline: "none",
  background: "#ffffff",
  // display: "flex",
  // flexDirection: "column",
  // justifyContent: "center",
};

const buttonBoxStyle = {
  position: "absolute",
  top: "5%",
  left: "97%",
  transform: "translate(-50%, -50%)",
  msTransform: "translate(-50%, -50%)",
  background: "#ddd",
};

const buttonStyle = {
  color: "white",
  cursor: "pointer",
  fontSize: "80",
  color: "warning",
};

function ModalImage({ open, setOpen, profileImage }) {
  const state = useTrackedStore();

  const handleClose = () => {
    console.log("close dialog");
    state.setLoading(false);
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box sx={buttonBoxStyle}>
          <CloseIcon  fontSize="large" color="action" cursor="pointer" backgroundColor="red" onClick={handleClose} />
        </Box>
        <img width="100%" height="auto" alt="" src={profileImage} />
      </Box>
    </Modal>
  );
}

export default ModalImage;
