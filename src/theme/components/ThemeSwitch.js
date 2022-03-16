import React from "react";

import { experimentalStyled as styled } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";

const label = { inputprops: { "aria-label": "Switch demo" } };

const CustomSwitch = styled(Switch)(({ theme }) => ({
  "&.MuiSwitch-root": {
    width: "68px",
    height: "49px",
  },
  "&  .MuiButtonBase-root": {
    top: "6px",
    left: "6px",
  },
  "&  .MuiButtonBase-root.Mui-checked .MuiSwitch-thumb": {
    backgroundColor: (theme) => theme.palette.primary.main,
  },
  "& .MuiSwitch-thumb": {
    width: "18px",
    height: "18px",
    borderRadius: "6px",
    backgroundColor: "#94a4b1",
  },
  "& .MuiSwitch-track": {
    backgroundColor: "#ecf0f3",
    opacity: 1,
    borderRadius: "5px",
  },
}));

const ThemeSwitch = () => {
  return (
    <CustomSwitch>
      <Switch {...label} defaultChecked />
    </CustomSwitch>
  );
};

export default ThemeSwitch;
