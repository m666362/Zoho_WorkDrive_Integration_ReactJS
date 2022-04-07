import React, { useState } from "react";
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
import * as ApiCall from "./api/ApiCalling";
function NameDialog({ open, setOpen, settingId, handleClose, setPost, post }) {
  const state = useTrackedStore();
  const { handleSubmit, control, reset } = useForm();

  const onSubmit = async (data) => {
    console.log(data, "Create");
    try {
      let lastIndex = state.settingData?.[settingId]?.breadCrumbs?.length - 1;
      let lastIndexId =
        state.settingData?.[settingId]?.breadCrumbs?.[lastIndex].id;
      console.log({
        state: state.settingData?.[settingId],
        lastIndex,
        lastIndexId,
      });
      const response = await ApiCall.createFolder(
        state.settingData?.[settingId]?.userAccessToken,
        lastIndexId,
        {
          name: data?.name,
        }
      );

      let myCustomArray = [response.data.data, ...post];
      console.log({ myCustomArray });
      setPost(myCustomArray);
      state.setAddItemSettingData(settingId, lastIndexId, myCustomArray);
      // state.setApiData(state.bread.slice(-1)[0].id, myCustomArray);
    } catch (error) {
      alert(error);
    }

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
            render={({ field }) => (
              <TextField
                id="standard-basic"
                label="Type"
                variant="standard"
                {...field}
              />
            )}
          />
          <div>
            <Button
              sx={{ marginTop: "10px" }}
              type="submit"
              variant="contained"
              endIcon={<SaveIcon />}
            >
              Create
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default NameDialog;
