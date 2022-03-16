import React from "react";
import { styled } from "@material-ui/core/styles";
import { Slider } from "@material-ui/core";

const CustomRangeSlider = styled((props) => <Slider {...props} />)(
  ({ theme }) => ({
    "& .MuiSlider-rail": {
      height: "9px",
      borderRadius: "9px",
      opacity: "1",
      backgroundColor: `${
        theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.09)" : "#ecf0f3"
      }`,
    },
    "& .MuiSlider-thumb": {
      borderRadius: "50%",
      backgroundColor: (theme) => theme.palette.secondary.main,
      width: "23px",
      height: "23px",
    },
    "& .MuiSlider-track": {
      height: "9px",
    },
  })
);

export { CustomRangeSlider };
