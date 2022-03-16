import React from "react";
import { styled } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const CustomDisabledButton = styled((props) => <Button {...props} />)(
  ({ theme }) => ({
    backgroundColor: `${
      theme.palette.mode === "dark" ? "rgba(73,82,88,0.12)" : "#ecf0f3"
    }`,
  })
);

export { CustomDisabledButton };
