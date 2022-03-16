import React, { useState } from "react";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import DescriptionIcon from "@material-ui/icons/Description";
import ArchiveIcon from "@material-ui/icons/Archive";
import FileCopyIcon from '@material-ui/icons/FileCopy';

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

function IconSelector({ file }) {
  return (
    <div>
      <InputDecider file={file} />
    </div>
  );
}

export default IconSelector;

const InputDecider = ({ file }) => {
  let inputProps = {
    file,
  };

  // const inputProps = {inputSchema, control, errors, inputIndex, parentKey};

  switch (file.specialType) {
    case "pdf":
      return <PictureAsPdfIcon />;
      break;
    case "msword":
      return <DescriptionIcon />;
      break;
    case "zip":
      return <ArchiveIcon />;
      break;
    case "image":
      return <img src={file.preview} style={img} />;
      break;
    default:
      return <FileCopyIcon />;
      break;
  }
  return <></>;
};
