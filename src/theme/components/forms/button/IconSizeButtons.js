import React from "react";

import { Box, IconButton } from "@material-ui/core";

import FeatherIcon from "feather-icons-react";

import BaseCard from "../../base-card/BaseCard";

const IconSizeButtons = () => {
  return (
    <BaseCard title="Icon Button Sizes">
      <Box sx={{ textAlign: "center" }}>
        <IconButton
          variant="contained"
          sx={{
            ml: 1,
          }}
        >
          <FeatherIcon
            fontSize="small"
            icon="bell"
            width="16"
            height="16"
          ></FeatherIcon>
        </IconButton>
        <IconButton
          variant="contained"
          size="medium"
          sx={{
            ml: 1,
          }}
        >
          <FeatherIcon icon="bell" width="19" height="19"></FeatherIcon>
        </IconButton>
        <IconButton
          variant="contained"
          sx={{
            ml: 1,
          }}
        >
          <FeatherIcon
            fontSize="large"
            icon="bell"
            width="21"
            height="21"
          ></FeatherIcon>
        </IconButton>
      </Box>
    </BaseCard>
  );
};

export { IconSizeButtons };
