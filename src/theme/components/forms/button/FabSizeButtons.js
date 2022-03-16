import React from "react";

import { Box, Typography, Fab } from "@material-ui/core";

import FeatherIcon from "feather-icons-react";

import BaseCard from "../../base-card/BaseCard";

const FabSizeButtons = () => {
  return (
    <BaseCard title="Sizes FAB">
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Fab
          size="small"
          color="primary"
          sx={{
            ml: 1,
            mb: {
              xs: 1,
              sm: 0,
              lg: 0,
            },
          }}
        >
          <FeatherIcon
            fontSize="small"
            icon="bell"
            width="16"
            height="16"
          ></FeatherIcon>
        </Fab>
        <Fab
          size="medium"
          color="secondary"
          sx={{
            ml: 1,
            mb: {
              xs: 1,
              sm: 0,
              lg: 0,
            },
          }}
        >
          <FeatherIcon
            fontSize="small"
            icon="bell"
            width="18"
            height="18"
          ></FeatherIcon>
        </Fab>
        <Fab
          size="large"
          color="default"
          sx={{
            ml: 1,
            mb: {
              xs: 1,
              sm: 0,
              lg: 0,
            },
          }}
        >
          <FeatherIcon fontSize="small" icon="bell" width="20"></FeatherIcon>
        </Fab>
        <Box>
          <Fab
            size="small"
            variant="extended"
            color="primary"
            sx={{
              ml: 1,
              mb: {
                xs: 1,
                sm: 0,
                lg: 0,
              },
            }}
          >
            <FeatherIcon
              fontSize="small"
              icon="bell"
              width="16"
              height="16"
            ></FeatherIcon>
            <Typography
              sx={{
                ml: 1,
                textTransform: "capitalize",
                fontSize: "14px",
              }}
            >
              Primary
            </Typography>
          </Fab>
          <Fab
            size="medium"
            variant="extended"
            color="secondary"
            sx={{
              ml: 1,
              mb: {
                xs: 1,
                sm: 0,
                lg: 0,
              },
            }}
          >
            <FeatherIcon
              fontSize="small"
              icon="bell"
              width="18"
              height="18"
            ></FeatherIcon>
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
            size="large"
            variant="extended"
            color="default"
            sx={{
              ml: 1,
              mb: {
                xs: 1,
                sm: 0,
                lg: 0,
              },
            }}
          >
            <FeatherIcon
              fontSize="small"
              icon="home"
              width="18"
              height="18"
            ></FeatherIcon>
            <Typography
              fontWeight="500"
              sx={{
                ml: 1,
                textTransform: "capitalize",
              }}
            >
              Default
            </Typography>
          </Fab>
        </Box>
      </Box>
    </BaseCard>
  );
};

export { FabSizeButtons };
