import React from "react";

import { Box, Button } from "@material-ui/core";

import BaseCard from "../../base-card/BaseCard";

const TextDefaultButtons = () => {
  return (
    <BaseCard title="Text Default Buttons">
      <Box display="flex" justifyContent="center">
        <Button
          color="primary"
          sx={{
            mr: 1,
          }}
        >
          Primary
        </Button>
        <Button
          color="secondary"
          sx={{
            mr: 1,
          }}
        >
          Secondary
        </Button>
        <Button
          disabled
          sx={{
            mr: 1,
          }}
        >
          Disabled
        </Button>
        <Button href="#text-buttons" color="primary">
          Link
        </Button>
      </Box>
    </BaseCard>
  );
};

export { TextDefaultButtons };
