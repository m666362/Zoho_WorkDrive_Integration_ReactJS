import React from "react";

import { Box, Button } from "@material-ui/core";

import BaseCard from "../../base-card/BaseCard";

const DefaultButtons = () => {
  return (
    <BaseCard title="Contained Default Buttons">
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "flex",
          },
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
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
          variant="contained"
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
        <Button href="#text-buttons" variant="contained" color="primary">
          Link
        </Button>
      </Box>
    </BaseCard>
  );
};

export { DefaultButtons };
