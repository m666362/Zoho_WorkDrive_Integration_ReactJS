import React from "react";

import { Box, IconButton } from "@material-ui/core";

import FeatherIcon from "feather-icons-react";

import BaseCard from "../../base-card/BaseCard";

const IconColorButtons = () => {
  return (
    <BaseCard title="Icon Color Buttons">
      <Box display="flex" justifyContent="center">
        <IconButton
          variant="contained"
          color="primary"
          sx={{
            mr: 1,
          }}
        >
          <FeatherIcon icon="bell" width="18" height="18"></FeatherIcon>
        </IconButton>
        <IconButton
          variant="contained"
          color="secondary"
          sx={{
            mr: 1,
          }}
        >
          <FeatherIcon icon="bell" width="18" height="18"></FeatherIcon>
        </IconButton>
        <IconButton
          variant="contained"
          sx={{
            mr: 1,
            color: (theme) => theme.palette.error.main,
          }}
        >
          <FeatherIcon icon="bell" width="18" height="18"></FeatherIcon>
        </IconButton>
        <IconButton
          variant="contained"
          sx={{
            mr: 1,
            color: (theme) => theme.palette.warning.main,
          }}
        >
          <FeatherIcon icon="bell" width="18" height="18"></FeatherIcon>
        </IconButton>
        <IconButton
          variant="contained"
          color="success"
          sx={{
            mr: 1,
            color: (theme) => theme.palette.success.main,
          }}
        >
          <FeatherIcon icon="bell" width="18" height="18"></FeatherIcon>
        </IconButton>
      </Box>
    </BaseCard>
  );
};

export { IconColorButtons };
