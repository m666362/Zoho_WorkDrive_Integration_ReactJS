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
import DescriptionIcon from "@mui/icons-material/Description";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import axios from "axios";
import { Document, Page } from "react-pdf";
import { useReactToPrint } from "react-to-print";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import CircularProgress from "@mui/material/CircularProgress";
import "./project_folder.css";
import ModalImage from "./ModalImage";
import useTrackedStore from "../../store/useTrackedStore";
import ModalFile from "./ModalFile";

import * as ApiCall from "./api/ApiCalling";
const CustomImage = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "200px",
    height: "170px",
  },
  [theme.breakpoints.up("md")]: {
    width: "300px",
    height: "170px",
  },
  [theme.breakpoints.up("xl")]: {
    width: "433px",
    height: "317px",
  },
}));

const BoxThumb = styled("Box")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "200px",
    height: "170px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  [theme.breakpoints.up("md")]: {
    width: "200px",
    height: "170px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  [theme.breakpoints.up("xl")]: {
    width: "200px",
    height: "170px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

//  sx={{ display: "flex", justifyContent: "center", alignItems: "center", alignContent: "center", ...CustomImage}}

const useStyles = makeStyles({
  fileroot: {
    border: "2px solid #E0E0E0",
    // padding: 10,
    minWidth: 200,
    minHeight: 170,
    borderRadius: "5px",
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
  image: {
    width: "200px",
    height: "150px",
  },
});

export default function FileImageCard({ file }) {
  const [open, setOpen] = React.useState(false);
  const state = useTrackedStore();
  const [profileImage, setProfileImage] = React.useState();
  const [thumbnailImage, setThumbnailUrl] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const componentRef = React.useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const getUserImage = async (file) => {
    // let res = await axios({
    //   method: "get",
    //   headers: {
    //     Accept: "application/vnd.api+json",
    //     Authorization: state.token,
    //   },
    //   responseType: "blob",
    //   url: `https://workdrive.zoho.com/api/v1/download/${file?.id}`,
    // });
    // setTheArray(oldArray => [...oldArray, newElement]);
    // let reader = new window.FileReader();
    // reader.readAsDataURL(res.data);
    // reader.onload = function () {
    //   let imageDataUrl = reader.result;
    //   console.log(imageDataUrl);
    //   setProfileImage(imageDataUrl);
    //   setLoading(false);
    // };

    // , { type: "application/pdf" }
    console.log(
      "file.attributes.thumbnail_url",
      file?.attributes.thumbnail_url
    );

    let res = await ApiCall.getImageResponse("any", file);

    console.log({ res, id: file?.id });
    var file = new Blob([res.data]);
    var fileURL = URL.createObjectURL(file);
    console.log("fileURL", fileURL);
    setProfileImage(fileURL);
    setLoading(false);
    // window.open(fileURL);
  };

  React.useEffect(async () => {
    // console.log({
    //   url: `https://previewengine-accl.zoho.com/thumbnail/WD/${file?.id}`,
    // });
    // let resData = await axios({
    //   method: "get",
    //   headers: {
    //     Authorization: state.token,
    //   },
    //   responseType: "blob",
    //   url: `https://previewengine-accl.zoho.com/thumbnail/WD/${file?.id}`,
    // });
    // console.log(file);
    // console.log({ ThumbRes: resData });
    let resData = await ApiCall.getThumbnailData("any", file);
    var blodData = new Blob([resData.data]);
    var urlData = URL.createObjectURL(blodData);
    // console.log({urlData: urlData});
    // console.log("fileURL", fileURL);
    setThumbnailUrl(urlData);
  }, [file?.attributes.thumbnail_url]);

  // React.useEffect(() => {
  //   getThumbNailImage(file)
  // }, []);

  const handleClickOpen = (file) => {
    console.log({ file: file });
    getUserImage(file);
    setOpen(true);
  };

  const handleClose = () => {
    console.log("close dialog");
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <div>
      <div
        tabIndex="1"
        className={classes.fileroot}
        onClick={() => handleClickOpen(file)}
      >
        {/* <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon/>
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {file.attributes.name}
            </Typography>
          </Toolbar>
        </AppBar>
        <div xs={12}>
          {loading && <div>loading...</div>}
          {!loading && <img width="1200" alt="" src={profileImage} />}
        </div>
      </Dialog> */}

        {/* {thumbnailImage ? (
          <CustomImage
            src={thumbnailImage}
            // className={classes.image}
            alt={file?.attributes.name}
          />
        ) : (
          // <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", alignContent: "center", ...CustomImage}}>
          //   <CircularProgress />
          // </Box>
          <BoxThumb>
            <DescriptionIcon sx={{width: 320, height: 240 }} />
          </BoxThumb>
        )} */}
        <BoxThumb>
          <DescriptionIcon  />
        </BoxThumb>
        <br />
        <div>
          <Typography variant="h6">{file?.attributes.name}</Typography>
          <Typography variant="body1">{file?.attributes.name}</Typography>
        </div>
      </div>
      <ModalFile
        open={open}
        setOpen={setOpen}
        profileImage={profileImage}
        file={file}
      />
      <div>
        {/* <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: "relative" }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                {file.attributes.name}
              </Typography>
            </Toolbar>
          </AppBar>
          <Grid xs={12}>
            {loading && (
              <Box sx={{ display: "flex" }}>
                <CircularProgress />
              </Box>
            )}

            {!loading && (
              <Grid>
                <Grid>
                  <img width="1200" alt="" src={profileImage} />
                </Grid>
              </Grid>
            )}                      
          </Grid>
        </Dialog> */}
      </div>
    </div>
    // <div xs={12}>
    //   <Card
    //     display={"inline"}
    //     sx={{ maxWidth: 345 }}
    //     onClick={() => handleClickOpen(file)}
    //   >
    //     <CardActionArea>
    //       <CardMedia
    //         component="img"
    //         height="100"
    //         image={thumbnailImage}
    //         alt={file?.attributes.name}
    //       />
    //       <CardContent>
    //         <Typography gutterBottom variant="h5" component="div">
    //           {file?.attributes.name}
    //         </Typography>
    //       </CardContent>
    //     </CardActionArea>
    //   </Card>
    //   <Dialog
    //     fullScreen
    //     open={open}
    //     onClose={handleClose}
    //     TransitionComponent={Transition}
    //   >
    //     <AppBar sx={{ position: "relative" }}>
    //
    // </div>
  );
}
