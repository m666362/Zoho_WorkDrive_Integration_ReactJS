import React from "react";

import { Box, Button } from "@material-ui/core";

import FeatherIcon from "feather-icons-react";

import BaseCard from "../../base-card/BaseCard";

const OutlinedIconLoadingButtons = () => {
  return (
    <BaseCard title="Outlined Button With Icons & Loading">
      <Box display="flex" justifyContent="center">
        <Button
          variant="outlined"
          color="error"
          startIcon={
            <FeatherIcon icon="trash" width="18" height="18"></FeatherIcon>
          }
          sx={{
            mr: 1,
          }}
        >
          Left Icon
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          endIcon={
            <FeatherIcon icon="send" width="18" height="18"></FeatherIcon>
          }
        >
          Right Icon
        </Button>
      </Box>
    </BaseCard>
  );
};

export { OutlinedIconLoadingButtons };
