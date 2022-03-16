import React from "react";
import { styled } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const CustomFormLabel = styled((props) => (
  <Typography
    variant="h6"
    {...props}
    component="label"
    htmlFor={props.htmlFor}
  />
))(() => ({
  marginBottom: "5px",
  marginTop: "15px",
  display: "block",
}));

export { CustomFormLabel };
