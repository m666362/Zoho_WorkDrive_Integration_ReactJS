import React from "react";

import Modal from "@mui/material/Modal";
import { Box } from "@mui/system";
import useTrackedStore from "../../store/useTrackedStore";
import { Grid } from "@material-ui/core";

import * as ApiCall from "./api/ApiCalling";
import Button from "@mui/material/Button";
import axios from "axios";

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
  alignItems: "center",
  justifyContent: "center",
  padding: 20,
};

function ModalFile({ open, setOpen, profileImage, file }) {
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
        <Grid item>File Preview is not available</Grid>
        <Grid item>
          <Button
            variant="contained"
            sx={{ m: 2 }}
            onClick={async () => {
              let response = await ApiCall.getImageResponse("any", file);
              console.log({ response });

              console.log({ res: response, id: file?.id });
              const url = window.URL.createObjectURL(new Blob([response.data]));
              const link = document.createElement("a");
              link.href = url;
              link.setAttribute("download", file.attributes.name); //or any other extension
              document.body.appendChild(link);
              link.click();
            }}
          >
            Download
          </Button>
        </Grid>
      </Box>
    </Modal>
  );
}

export default ModalFile;
