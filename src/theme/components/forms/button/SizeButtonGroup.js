import React from "react";

import { Box, Button, ButtonGroup } from "@material-ui/core";

import BaseCard from "../../base-card/BaseCard";

const SizeButtonGroup = () => {
  return (
    <BaseCard title="Size Button Group">
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            mb: 2,
          }}
        >
          <ButtonGroup
            size="small"
            variant="outlined"
            aria-label="outlined primary button group"
          >
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Box>
        <Box
          sx={{
            mb: 2,
          }}
        >
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Box>
        <Box>
          <ButtonGroup
            size="large"
            variant="outlined"
            aria-label="text button group"
          >
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Box>
      </Box>
    </BaseCard>
  );
};

export { SizeButtonGroup };
