import React from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import { BuildTheme } from "./assets/global/Theme-variable";
import Response from "./components/Playground/Response";
import "./App.css";

import { makeStyles } from "@mui/styles";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import useTrackedStore from "./store/useTrackedStore";
import * as ApiCall from "./components/Playground/api/ApiCalling";

const useStyles = makeStyles({
  grid: {
    border: "1px solid black",
  },
  icon: {
    fontSize: "30px !important",
  },
});

const App = () => {
  const classes = useStyles();
  const state = useTrackedStore();

  React.useEffect(() => {
    ApiCall.getAccessToken()
      .then((res) => {
        state.setToken(res.access_token);
        state.setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const customizer = {
    direction: "ltr",
    theme: "PURPLE_THEME",
    activeMode: "light",
  };
  const theme = BuildTheme(customizer);
  return (

    <div className="App">
      <Response />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={state.loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default App;


