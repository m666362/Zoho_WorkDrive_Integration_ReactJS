import React from "react";

import { Box, Button, ButtonGroup } from "@material-ui/core";

import BaseCard from "../../base-card/BaseCard";

const VerticalButtonGroup = () => {
  return (
    <BaseCard title="Vertical Button group">
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <ButtonGroup
          orientation="vertical"
          variant="contained"
          aria-label="outlined primary button group"
          sx={{
            mr: 1,
          }}
        >
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>

        <ButtonGroup
          orientation="vertical"
          variant="outlined"
          aria-label="outlined button group"
          sx={{
            mr: 1,
          }}
        >
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>

        <ButtonGroup
          orientation="vertical"
          variant="text"
          aria-label="text button group"
        >
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
    </BaseCard>
  );
};

export { VerticalButtonGroup };
