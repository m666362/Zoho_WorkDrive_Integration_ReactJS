import * as React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowLefttIcon from "@material-ui/icons/ArrowLeft";

import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { Document, Page } from "react-pdf";
import {} from "./Response";
import { useReactToPrint } from "react-to-print";
import PdfViewer from "./PdfViewer";
import { typography } from "@material-ui/system";

import { experimentalStyled as styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

import * as ApiCall from "./api/ApiCalling";
import * as FileUploadResponse from "./api/FileUploadResponse";
import ArchiveIcon from "@material-ui/icons/Archive";
import "./project_folder.css";
import ModalPdf from "./ModalPdf";
import useTrackedStore from "../../store/useTrackedStore";
import CircularProgress from "@mui/material/CircularProgress";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CustomImage = styled("img")(({ theme }) => ({
  
  minHeight: "210px",
  minWidth: "100%",

  // [theme.breakpoints.down("md")]: {
  //   width: "200px",
  //   height: "170px",
  // },
  // [theme.breakpoints.up("md")]: {
  //   width: "200px",
  //   height: "170px",
  // },
  // [theme.breakpoints.up("xl")]: {
  //   width: "200px",
  //   height: "170px",
  // },
}));

const useStyles = makeStyles({
  fileroot: {
    border: "2px solid #E0E0E0",
    borderRadius: "5px",
    minHeight: "300px",
    "&:hover": {
      boxShadow: "0 0 1px 1px #E0E0E0",
      transitionDuration: "0.3s",
    },
    "&:focus": {
      border: "2px solid #28B294",
    },
  },
  item: {
    textAlign: "left !important",
  },
  details: {
    padding: "0 10px",
  },
  image: {
    width: "200px",
    height: "170px",
  },
});

const BoxThumb = styled("Box")(({ theme }) => ({
  
  minHeight: "100%",
  minWidth: "100%",

  // [theme.breakpoints.down("md")]: {
  //   width: "200px",
  //   height: "170px",
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // [theme.breakpoints.up("md")]: {
  //   width: "300px",
  //   height: "170px",
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // [theme.breakpoints.up("xl")]: {
  //   width: "433px",
  //   height: "300px",
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
}));

export default function ActionAreaCard({ file }) {
  const [open, setOpen] = React.useState(false);
  const state = useTrackedStore();
  const classes = useStyles();
  const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [thumbnailImage, setThumbnailUrl] = React.useState();

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const [profileImage, setProfileImage] = React.useState();
  const componentRef = React.useRef();

  React.useEffect(async () => {
    let resData = await ApiCall.getThumbnailData(state?.token, file);
    var blodData = new Blob([resData.data]);
    var urlData = URL.createObjectURL(blodData);
    setThumbnailUrl(urlData);
  }, [file?.attributes.thumbnail_url]);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const getUserImage = async (file) => {
    let res = await ApiCall.getImageResponse(state?.token, file);
    console.log({ reDDds: res });
    var blobFile = new Blob([res.data], { type: "application/pdf" });
    var fileURL = URL.createObjectURL(blobFile);
    console.log("fileURL", fileURL);
    state.setLoading(false);
    setOpen(true);
    setProfileImage(fileURL);
    // window.open(fileURL);
  };

  React.useEffect(() => {
    setThumbnailUrl();
  }, []);

  const handleClickOpen = (file) => {
    state.setLoading(true);
    getUserImage(file);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container>
      <Grid
        item
        container
        tabIndex="1"
        className={classes.fileroot}
        onClick={() => handleClickOpen(file)}
      >
        {thumbnailImage ? (
          <CustomImage src={thumbnailImage} 
          // lt={file?.attributes.name}
           />
        ) : (
          <BoxThumb>
            <CircularProgress />
          </BoxThumb>
        )}
        <br />
        <Grid className={classes.details}>
          <Typography variant="h6">{file?.attributes.name.length<12?file?.attributes.name:`${file?.attributes.name.substr(0, 12)}...`}</Typography>
        </Grid>
      </Grid>
      <ModalPdf profileImage={profileImage} open={open} setOpen={setOpen} />
    </Grid>
  );
}
