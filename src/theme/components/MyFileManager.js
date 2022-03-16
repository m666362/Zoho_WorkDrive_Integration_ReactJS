import React from "react";
import { FileManager, FileNavigator, LocationBar } from "@opuscapita/react-filemanager";
import connectorNodeV1 from "@opuscapita/react-filemanager-connector-node-v1";

const apiOptions = {
  ...connectorNodeV1.apiOptions,
  apiRoot: `http://opuscapita-filemanager-demo-master.azurewebsites.net/`, // Or you local Server Node V1 installation.
};

const MyFileManager = (
  <div style={{ height: "480px" }}>
    <LocationBar
      items={[
        { name: "Item 1", onClick: () => console.log("click item 1") },
        { name: "Item 2", onClick: () => console.log("click item 2") },
        {
          name: "Long item long item long item long item long item long item",
          onClick: () => console.log("click item long item"),
        },
        {
          name: "Long item long item long item long item long item long item",
          onClick: () => console.log("click item long item"),
        },
        {
          name: "Long item long item long item long item long item long item",
          onClick: () => console.log("click item long item"),
        },
      ]}
    />
  </div>
);

export default MyFileManager;
