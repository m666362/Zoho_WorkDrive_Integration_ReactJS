import React, { useEffect } from "react";

import Modal from "@mui/material/Modal";
import { Box } from "@mui/system";
import useTrackedStore from "../../store/useTrackedStore";
import PdfViewer from "./PdfViewer";
import {
  CardActionArea,
  CardActions,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@material-ui/core";
import Button from "@mui/material/Button";
import { Card } from "react-bootstrap";
import SvgIcon from "@mui/material/SvgIcon";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import CancelIcon from "@mui/icons-material/Cancel";
import FilePresentIcon from '@mui/icons-material/FilePresent';
import FilePresent from "@mui/icons-material/FilePresent";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  maxWidth: "1100px",
  width: "60%",
  height: "auto",
  padding: 5,
  transform: "translate(-50%, -50%)",
  outline: "none",
  background: "#ffffff",
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  justifyContent: "center",
};

const commonStyles = {
  borderColor: "#0FEFEF",
  m: 1,
  border: 2,
  width: "5rem",
  height: "5rem",
};

function ModalFileUpload({
  files,
  removeFile,
  open,
  setOpen,
  handleCloseModal,
  uploadFile,
}) {
  const state = useTrackedStore();

  const handleClose = () => {
    console.log("close dialog");
    state.setLoading(false);
    setOpen(false);
  };

  useEffect(() => {
    console.log({ files: files });
  }, [])

  return (
    <Modal
      open={open}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          ...commonStyles,
          borderRadius: "16px",
          ...style,
          borderColor: "grey.500",
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 500 }}>
          <Typography variant="h6" component="div" gutterBottom>
            Upload File
          </Typography>
        </Box>

        <Grid container direction="row">
          {files.map((file) => (
            <Card sx={{ maxWidth: 200 }}>
              <CardActionArea>

                {
                  file.specialType == 'other' ? <FilePresentIcon sx={{ width: 200, height: 140 }} /> :
                    <CardMedia
                      component="img"
                      height="140"
                      width="200"
                      image={file.preview}
                      alt="green iguana"
                    />
                }
                <IconButton
                  sx={{ color: "black" }}
                  aria-label={`star`}
                  onClick={() => {
                    removeFile(file);
                  }}
                >
                  <CancelIcon sx={{ right: 0, top: 0 }} />
                </IconButton>
              </CardActionArea>
            </Card>
          ))}
        </Grid>

        <Stack direction="row" spacing={2}>
          <Button variant="outlined" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              uploadFile(state.bread[state.bread.length - 1].id);
            }}
          >
            Upload
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}

export default ModalFileUpload;
