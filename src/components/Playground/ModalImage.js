import React from "react";

import Modal from "@mui/material/Modal";
import { Box } from "@mui/system";
import useTrackedStore from "../../store/useTrackedStore";

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
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <img width="100%" alt="" src={profileImage} />
      </Box>
    </Modal>
  );
}

export default ModalImage;
