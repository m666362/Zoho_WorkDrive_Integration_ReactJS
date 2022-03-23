import React, { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Create";
import { useForm, Controller } from "react-hook-form";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import "./coupon.css";
import useTrackedStore from "../../store/useTrackedStore";

function NameDialog({ open, setOpen, handleClose, setPost, post }) {
  const state = useTrackedStore();
  const { handleSubmit, control, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    var url = `https://workdrive.zoho.com/api/v1/files`;

    var fileData = {
      data: {
        attributes: {
          name: data.name,
          parent_id: state.bread.slice(-1)[0].id,
        },
        type: "files",
      },
    };

    axios
      .post(url, fileData, {
        headers: {
          Authorization: state.token,
          Accept: "application/vnd.api+json",
        },
      })
      .then((response) => {
        console.log({myRes: response});

        let myCustomArray = [response.data.data, ...post];
        setPost(myCustomArray);
        state.setApiData(state.bread.slice(-1)[0].id, myCustomArray);
      })
      .catch((error) => {
        console.log({myRes: response});
        console.log(error);
      });

    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>Create Folder</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => <TextField id="standard-basic" label="Type" variant="standard" {...field} />}
          />
          <div>
            <Button sx={{marginTop: "10px"}} type="submit" variant="contained" endIcon={<SaveIcon />}>
              Create
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default NameDialog;
