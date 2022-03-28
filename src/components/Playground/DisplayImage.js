import * as React from "react";
import { Typography } from "@material-ui/core";

import * as ApiCall from "./api/ApiCalling";
import Slide from "@material-ui/core/Slide";
import { useReactToPrint } from "react-to-print";
import { experimentalStyled as styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import CircularProgress from "@mui/material/CircularProgress";
import "./project_folder.css";
import ModalImage from "./ModalImage";
import useTrackedStore from "../../store/useTrackedStore";

const CustomImage = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "200px",
    height: "170px",
  },
  [theme.breakpoints.up("md")]: {
    width: "200px",
    height: "170px",
  },
  [theme.breakpoints.up("xl")]: {
    width: "200px",
    height: "170px",
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
    width: "300px",
    height: "170px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  [theme.breakpoints.up("xl")]: {
    width: "433px",
    height: "300px",
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
  details: {
    padding: "0 10px",
  },
  image: {
    width: "200px",
    height: "150px",
  },
});

export default function DisplayImage({ file }) {
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
    let res = await ApiCall.getImageResponse(state?.token, file);

    console.log(
      "file.attributes.thumbnail_url",
      file?.attributes.thumbnail_url
    );
    var file = new Blob([res.data]);
    var fileURL = URL.createObjectURL(file);
    console.log("fileURL", fileURL);
    setProfileImage(fileURL);
    setOpen(true);
    // window.open(fileURL);
  };

  React.useEffect(async () => {
    let resData = await ApiCall.getThumbnailData(state?.token, file);
    var blodData = new Blob([resData.data]);
    var urlData = URL.createObjectURL(blodData);
    
    console.log( {urlData});
    setThumbnailUrl(urlData);
  }, [file?.attributes.thumbnail_url]);

  const handleClickOpen = (file) => {
    console.log({ file: file });
    state.setLoading(true);
    getUserImage(file);
    
    setLoading(false);
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
        {thumbnailImage ? (
          <CustomImage
            src={thumbnailImage}
            // className={classes.image}
            // alt={file?.attributes.name}
          />
        ) : (
          <BoxThumb>
            <CircularProgress />
          </BoxThumb>
        )}
        <br />
        <div className={classes.details}>
          <Typography variant="h6">{file?.attributes.name}</Typography>
          <Typography variant="body1">{file?.attributes.name}</Typography>
        </div>
      </div>
      
      <ModalImage open={open} setOpen={setOpen} profileImage={profileImage} />
    </div>
  );
}
