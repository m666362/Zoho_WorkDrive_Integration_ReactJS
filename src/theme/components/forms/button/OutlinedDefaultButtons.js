import React from "react";

import { Box, Button } from "@material-ui/core";

import BaseCard from "../../base-card/BaseCard";

const OutlinedDefaultButtons = () => {
  return (
    <BaseCard title="Default Outlined Buttons">
      <Box
        sx={{
          display: {
            xs: "inline",
            sm: "flex",
            lg: "flex",
          },
          justifyContent: "center",
        }}
      >
        <Button
          variant="outlined"
          color="primary"
          sx={{
            mr: 1,
            mb: {
              xs: 1,
              sm: 0,
              lg: 0,
            },
          }}
        >
          Primary
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          sx={{
            mr: 1,
            mb: {
              xs: 1,
              sm: 0,
              lg: 0,
            },
          }}
        >
          Secondary
        </Button>
        <Button
          disabled
          sx={{
            mr: 1,
            mb: {
              xs: 1,
              sm: 0,
              lg: 0,
            },
          }}
        >
          Disabled
        </Button>
        <Button href="#text-buttons" variant="outlined" color="primary">
          Link
        </Button>
      </Box>
    </BaseCard>
  );
};

export { OutlinedDefaultButtons };
