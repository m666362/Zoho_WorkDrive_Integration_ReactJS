import React from "react";

import { Box, Fab, Typography } from "@material-ui/core";

import FeatherIcon from "feather-icons-react";

import BaseCard from "../../base-card/BaseCard";

const FabColorButtons = () => {
  return (
    <BaseCard title="Color FAB">
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Fab
          sx={{
            mr: 1,
            mb: 2,
          }}
        >
          <FeatherIcon icon="send" width="20"></FeatherIcon>
        </Fab>
        <Fab
          color="primary"
          sx={{
            mr: 1,
            mb: 2,
          }}
        >
          <FeatherIcon icon="send" width="20"></FeatherIcon>
        </Fab>
        <Fab
          color="secondary"
          sx={{
            mr: 1,
            mb: 2,
          }}
        >
          <FeatherIcon icon="send" width="20"></FeatherIcon>
        </Fab>
        <br />
        {/* extended */}
        <Fab
          variant="extended"
          sx={{
            mr: 1,
            mb: 2,
          }}
        >
          <FeatherIcon icon="send" width="20"></FeatherIcon>
          <Typography
            sx={{
              ml: 1,
              textTransform: "capitalize",
            }}
          >
            Default
          </Typography>
        </Fab>
        <Fab
          variant="extended"
          color="primary"
          sx={{
            mr: 1,
            mb: 2,
          }}
        >
          <FeatherIcon icon="send" width="20"></FeatherIcon>
          <Typography
            sx={{
              ml: 1,
              textTransform: "capitalize",
            }}
          >
            Primary
          </Typography>
        </Fab>
        <Fab
          variant="extended"
          color="secondary"
          sx={{
            mr: 1,
            mb: 2,
          }}
        >
          <FeatherIcon icon="send" width="20"></FeatherIcon>
          <Typography
            sx={{
              ml: 1,
              textTransform: "capitalize",
            }}
          >
            Secondary
          </Typography>
        </Fab>
      </Box>
    </BaseCard>
  );
};

export { FabColorButtons };
