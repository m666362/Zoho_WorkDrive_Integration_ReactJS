import React from "react";

import { Box, Button, ButtonGroup } from "@material-ui/core";

import FeatherIcon from "feather-icons-react";

import BaseCard from "../../base-card/BaseCard";

const ColorButtonGroup = () => {
  return (
    <BaseCard title="Color Button Group">
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
            variant="contained"
            aria-label="outlined primary button group"
            sx={{
              mr: 1,
              mb: 1,
            }}
          >
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>

          <ButtonGroup
            variant="contained"
            color="secondary"
            aria-label="outlined primary button group"
            sx={{
              mr: 1,
              mb: 1,
            }}
          >
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>

          <ButtonGroup
            variant="contained"
            color="warning"
            aria-label="outlined primary button group"
            sx={{
              mr: 1,
              mb: 1,
            }}
          >
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>

          <ButtonGroup
            variant="contained"
            color="error"
            aria-label="outlined primary button group"
            sx={{
              mr: 1,
              mb: 1,
            }}
          >
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>

          <ButtonGroup
            color="success"
            variant="contained"
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
          <ButtonGroup
            variant="outlined"
            aria-label="outlined button group"
            sx={{
              mr: 1,
              mb: 1,
            }}
          >
            <Button>
              <FeatherIcon icon="skip-back" width="18"></FeatherIcon>
            </Button>
            <Button>
              <FeatherIcon icon="play" width="18"></FeatherIcon>
            </Button>
            <Button>
              <FeatherIcon icon="skip-forward" width="18"></FeatherIcon>
            </Button>
          </ButtonGroup>
          <ButtonGroup
            variant="outlined"
            color="secondary"
            aria-label="outlined button group"
            sx={{
              mr: 1,
              mb: 1,
            }}
          >
            <Button>
              <FeatherIcon icon="skip-back" width="18"></FeatherIcon>
            </Button>
            <Button>
              <FeatherIcon icon="play" width="18"></FeatherIcon>
            </Button>
            <Button>
              <FeatherIcon icon="skip-forward" width="18"></FeatherIcon>
            </Button>
          </ButtonGroup>

          <ButtonGroup
            variant="outlined"
            color="warning"
            aria-label="outlined button group"
            sx={{
              mr: 1,
              mb: 1,
            }}
          >
            <Button>
              <FeatherIcon icon="skip-back" width="18"></FeatherIcon>
            </Button>
            <Button>
              <FeatherIcon icon="play" width="18"></FeatherIcon>
            </Button>
            <Button>
              <FeatherIcon icon="skip-forward" width="18"></FeatherIcon>
            </Button>
          </ButtonGroup>

          <ButtonGroup
            variant="outlined"
            color="error"
            aria-label="outlined button group"
            sx={{
              mr: 1,
              mb: 1,
            }}
          >
            <Button>
              <FeatherIcon icon="skip-back" width="18"></FeatherIcon>
            </Button>
            <Button>
              <FeatherIcon icon="play" width="18"></FeatherIcon>
            </Button>
            <Button>
              <FeatherIcon icon="skip-forward" width="18"></FeatherIcon>
            </Button>
          </ButtonGroup>

          <ButtonGroup
            variant="outlined"
            color="success"
            aria-label="outlined button group"
            sx={{
              mr: 1,
              mb: 1,
            }}
          >
            <Button>
              <FeatherIcon icon="skip-back" width="18"></FeatherIcon>
            </Button>
            <Button>
              <FeatherIcon icon="play" width="18"></FeatherIcon>
            </Button>
            <Button>
              <FeatherIcon icon="skip-forward" width="18"></FeatherIcon>
            </Button>
          </ButtonGroup>
        </Box>
        <Box>
          <ButtonGroup
            variant="text"
            aria-label="text button group"
            sx={{
              mr: 1,
              mb: 1,
            }}
          >
            <Button>
              <FeatherIcon icon="align-left" width="18"></FeatherIcon>
            </Button>
            <Button>
              <FeatherIcon icon="align-center" width="18"></FeatherIcon>
            </Button>
            <Button>
              <FeatherIcon icon="align-right" width="18"></FeatherIcon>
            </Button>
          </ButtonGroup>
          <ButtonGroup
            color="secondary"
            variant="text"
            aria-label="text button group"
            sx={{
              mr: 1,
              mb: 1,
            }}
          >
            <Button>
              <FeatherIcon icon="align-left" width="18"></FeatherIcon>
            </Button>
            <Button>
              <FeatherIcon icon="align-center" width="18"></FeatherIcon>
            </Button>
            <Button>
              <FeatherIcon icon="align-right" width="18"></FeatherIcon>
            </Button>
          </ButtonGroup>
          <ButtonGroup
            color="warning"
            variant="text"
            aria-label="text button group"
            sx={{
              mr: 1,
              mb: 1,
            }}
          >
            <Button>
              <FeatherIcon icon="align-left" width="18"></FeatherIcon>
            </Button>
            <Button>
              <FeatherIcon icon="align-center" width="18"></FeatherIcon>
            </Button>
            <Button>
              <FeatherIcon icon="align-right" width="18"></FeatherIcon>
            </Button>
          </ButtonGroup>
          <ButtonGroup
            color="error"
            variant="text"
            aria-label="text button group"
            sx={{
              mr: 1,
              mb: 1,
            }}
          >
            <Button>
              <FeatherIcon icon="align-left" width="18"></FeatherIcon>
            </Button>
            <Button>
              <FeatherIcon icon="align-center" width="18"></FeatherIcon>
            </Button>
            <Button>
              <FeatherIcon icon="align-right" width="18"></FeatherIcon>
            </Button>
          </ButtonGroup>
          <ButtonGroup
            color="success"
            variant="text"
            aria-label="text button group"
            sx={{
              mr: 1,
              mb: 1,
            }}
          >
            <Button>
              <FeatherIcon icon="align-left" width="18"></FeatherIcon>
            </Button>
            <Button>
              <FeatherIcon icon="align-center" width="18"></FeatherIcon>
            </Button>
            <Button>
              <FeatherIcon icon="align-right" width="18"></FeatherIcon>
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </BaseCard>
  );
};

export { ColorButtonGroup };
