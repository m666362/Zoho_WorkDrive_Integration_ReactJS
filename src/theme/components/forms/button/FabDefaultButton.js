import React from "react";

import { Box, Typography, Fab } from "@material-ui/core";

import FeatherIcon from "feather-icons-react";

import BaseCard from "../../base-card/BaseCard";

const FabDefaultButton = () => {
  return (
    <BaseCard title="Default FAB">
      <Box>
        <Box display="flex" justifyContent="center">
          <Fab
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
            <FeatherIcon icon="send" width="20"></FeatherIcon>
          </Fab>
          <Fab
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
            <FeatherIcon icon="plus" width="20"></FeatherIcon>
          </Fab>
          <Fab
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
            <FeatherIcon icon="clipboard" width="20"></FeatherIcon>
          </Fab>
        </Box>
        <Box
          sx={{
            mt: 2,
            display: {
              xs: "inline-block",
              sm: "flex",
            },
            justifyContent: "center",
          }}
        >
          <Fab
            color="primary"
            variant="extended"
            sx={{
              mr: 1,
              mb: {
                xs: 1,
                sm: 0,
                lg: 0,
              },
            }}
          >
            <FeatherIcon icon="check-circle" width="20"></FeatherIcon>
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
            color="secondary"
            variant="extended"
            sx={{
              mr: 1,
              mb: {
                xs: 1,
                sm: 0,
                lg: 0,
              },
            }}
          >
            <FeatherIcon icon="check-circle" width="20"></FeatherIcon>
            <Typography
              sx={{
                ml: 1,
                textTransform: "capitalize",
              }}
            >
              Secondary
            </Typography>
          </Fab>
          <Fab
            disabled
            variant="extended"
            sx={{
              mr: 1,
              mb: {
                xs: 1,
                sm: 0,
                lg: 0,
              },
            }}
          >
            <FeatherIcon icon="check-circle" width="20"></FeatherIcon>
            <Typography
              sx={{
                ml: 1,
                textTransform: "capitalize",
              }}
            >
              Disabled
            </Typography>
          </Fab>
        </Box>
      </Box>
    </BaseCard>
  );
};

export { FabDefaultButton };
