import React from "react";

import { useTheme } from "@material-ui/core/styles";
import { Box, Button, MobileStepper } from "@material-ui/core";

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import FeatherIcon from "feather-icons-react";

import img1 from "../../assets/images/backgrounds/detail-img.jpg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath: img1,
  },
  {
    imgPath: img1,
  },
  {
    imgPath: img1,
  },
  {
    imgPath: img1,
  },
];

const ProductCarousel = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "relative",
        margin: {
          sm: "0 auto",
          xs: "0 auto",
          lg: "unset",
        },
      }}
    >
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <Box key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  display: "block",
                  maxWidth: "100%",
                  overflow: "hidden",
                  width: "100%",
                  borderRadius: "10px",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </Box>
        ))}
      </AutoPlaySwipeableViews>

      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <FeatherIcon icon="arrow-left" width="18" />
            ) : (
              <FeatherIcon icon="arrow-right" width="18" />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <FeatherIcon icon="arrow-right" width="18" />
            ) : (
              <FeatherIcon icon="arrow-left" width="18" />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
};

export { ProductCarousel };
