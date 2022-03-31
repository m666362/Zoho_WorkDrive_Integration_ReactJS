import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import SearchIcon from "@mui/icons-material/Search";
import { TextField, Typography } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import InputBase from "@mui/material/InputBase";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { alpha, styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { useForm } from "react-hook-form";
import useTrackedStore from "../../store/useTrackedStore";
import NameDialog from "./NameDialog";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import IconButton from "@mui/material/IconButton";
import GridViewIcon from "@mui/icons-material/GridView";
import ListIcon from "@mui/icons-material/List";
import * as ApiCall from "./api/ApiCalling";
import * as FileUploadResponse from "./api/FileUploadResponse";

const Input = styled("input")({
  display: "none",
});

//search box component starts

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
//search box component ends

const useStyles = makeStyles({
  breadcumbstyle: {},
  grid: {
    backgroundColor: "#EFEFEF",
    padding: "0px 25px",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#11BD97",
    height: "70%",
    margin: "auto",
    marginRight: 0,
    boxShadow: "none",
    borderRadius: "2px",
    "&:hover": {
      backgroundColor: "#0E997B",
      boxShadow: "none",
    },
  },
});

let myBread = [];

export default function CustomSeparator({
  settingId,
  setBreadCrumbsUrl,
  setSearchVal,
  searchVal,
  setPost,
  post,
  setSnackOpen,
}) {
  const state = useTrackedStore();
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDrop = (e, file) => {
    console.log({ e: file.id });
    let childId = e.dataTransfer.getData("dropFile");

    let response = {
      data: {
        data: [
          {
            attributes: {
              Permalink: e.dataTransfer.getData("filePermanentLink"),
              parent_id: file.id,
              FileName: e.dataTransfer.getData("fileName"),
              resource_id: e.dataTransfer.getData("dropFile"),
              childSize: e.dataTransfer.getData("fileSize"),
            },
            type: e.dataTransfer.getData("fileType"),
          },
        ],
      },
    };

    let myCustomFile = FileUploadResponse.makeCustomFile(response);

    ApiCall.moveFile(
      state.settingData?.[settingId]?.userAccessToken,
      file,
      childId
    )
      .then((response) => {
        console.log({ resToBreadCrumb: response.data.data[0] });
        let xArray = post.filter((prop) => prop.id != childId);
        setSnackOpen(true);
        setPost(xArray);

        console.log({ fileDotId: file.id });
        let lastIndex = state.settingData?.[settingId]?.breadCrumbs?.length - 1;
        let lastIndexId =
          state.settingData?.[settingId]?.breadCrumbs?.[lastIndex].id;
        state.setAddItemSettingData(settingId, lastIndexId, xArray);
        // state.setApiData(state.bread[state.bread.length - 1].id, xArray);
        if (
          state.settingData?.[settingId]?.previousData?.hasOwnProperty(file?.id)
        ) {
          let tempArray = state.settingData?.[settingId]?.previousData?.[
            file?.id
          ].concat([myCustomFile]);

          state.setAddItemSettingData(settingId, file?.id, tempArray);
          // state.setApiData(file.id, tempArray);
        }
        // console.log({ inner: state.apiData[file.id] });
        e.dataTransfer.setData("dropFile", null);
        console.log(response);
        setSnackOpen(true);
      })
      .catch((error) => {
        console.log({ error: error });
      });
  };

  // React.useEffect(() => {
    
  // }, [state?.settingData?.[settingId]?.breadCrumbs?.[state?.settingData?.[settingId]?.breadCrumbs?.length-1]?.id]);

  myBread = state.settingData?.[settingId]?.breadCrumbs?.map(
    (file, index) => {
      if (index == state.settingData?.[settingId]?.breadCrumbs?.length - 1) {
        return (
          <Typography key="3" color="text.primary">
            {file.name}
          </Typography>
        );
      } else {
        return (
          <Link
            underline="none"
            key={index}
            color="inherit"
            href="#"
            id={file?.id}
            onDrop={(e) => handleDrop(e, file)}
            onClick={() => {
              setBreadCrumbsUrl(file);
            }}
          >
            <p>{file.name}</p>
          </Link>
        );
      }
    }
  );

  return (
    <Grid className={classes.grid} item container>
      <Grid item md={7}>
        <Stack sx={{ position: "relative", top: "3px" }}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
            className={classes.breadcumbstyle}
          >
            {myBread}
          </Breadcrumbs>
        </Stack>
      </Grid>
      <Grid item md={5}>
        <div
          style={{
            display: "flex",
            padding: "1.5%",
            marginLeft: "auto",
          }}
        >
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              value={searchVal}
              variant="outlined"
              fullWidth
              size="small"
              onChange={(e) => setSearchVal(e.target.value)}
            />
          </Search>
          <Button
            variant="contained"
            component="label"
            startIcon={<AddIcon />}
            onClick={handleClickOpen}
          >
            New
          </Button>

          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            style={{ marginLeft: "20px" }}
          >
            <label htmlFor="icon-button-file">
              <Input
                id="icon-button-file"
                type="file"
                name="file"
                onChange={async (e) => {
                  console.log({
                    files: e.target.files,
                  });
                  const data = new FormData();
                  data.append("file", e.target.files[0]);
                  let lastIndex =
                    state.settingData?.[settingId]?.breadCrumbs?.length - 1;
                  let lastIndexId =
                    state.settingData?.[settingId]?.breadCrumbs?.[lastIndex].id;
                  let response = await ApiCall.fileUploader(
                    state.settingData?.[settingId]?.userAccessToken,
                    data,
                    lastIndexId
                  );

                  let myCustomFile =
                    FileUploadResponse.makeCustomFile(response);
                  let myCustomArray = [myCustomFile, ...post];

                  console.log({ myCustomFile, myCustomArray });
                  console.log({ myCustomArray: myCustomArray });
                  setSnackOpen(true);
                  state.setAddItemSettingData(
                    settingId,
                    lastIndexId,
                    myCustomArray
                  );
                  // state.setApiData(
                  //   state.bread[state.bread.length - 1].id,
                  //   myCustomArray
                  // );
                  setPost(myCustomArray);
                  console.log({ post: post });
                }}
              />
              <IconButton aria-label="upload picture" component="span">
                <FileUploadIcon />
              </IconButton>
            </label>
            <label>
              {state.settingData?.[settingId]?.listView ? (
                <GridViewIcon
                  onClick={() => {
                    state.setViewSettingData(settingId, false);
                    // state.setListView(true);
                  }}
                  sx={{ cursor: "pointer" }}
                />
              ) : (
                <ListIcon
                  onClick={() => {
                    state.setViewSettingData(settingId, true);
                    // state.setListView(false);
                  }}
                  sx={{ cursor: "pointer" }}
                />
              )}
            </label>
          </Stack>
        </div>
      </Grid>

      <NameDialog
        settingId={settingId}
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        setPost={setPost}
        post={post}
      />
    </Grid>
  );
}
