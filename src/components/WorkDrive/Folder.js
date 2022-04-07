import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import * as React from "react";
import "./project_folder.css";

const useStyles = makeStyles({
  grid: {
    border: "1px solid #E0E0E0",
    borderRadius: "5px",
    "&:hover": {
      boxShadow: "0 0 1px 1px #E0E0E0",
      transitionDuration: "0.3s",
    },
  },
  item: {
    textAlign: "left !important",
  },
});

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Folder({ icon, title, details }) {
  const classes = useStyles();
  return (
    <Grid className={classes.grid} container>
      <Grid item lg={2}>
        {/* <Item sx={{ visibility: "hidden", marginTop: "-23px" }}>.</Item> */}
        <Item elevation={0}>{icon}</Item>
      </Grid>
      <Grid item lg={10}>
        <Item className={classes.item} elevation={0}>
          <Typography variant="h6">{ title.length<=12?title:`${title.substr(0, 12)}...`}</Typography>
        </Item>
      </Grid>
    </Grid>
  );
}

export default Folder;
