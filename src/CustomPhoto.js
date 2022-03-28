import React, { useEffect, useState } from "react";
import axios from "axios";
const base_url = `http://192.168.0.107:3005/api/v1/storage/workdrive/folder_id/files/bz58aa141943840e948fe852d39d8eb9712b8/thumbnail`;
// const base_url = `https://previewengine-accl.zoho.com/thumbnail/WD/bz58aa141943840e948fe852d39d8eb9712b8`;

function utf8_to_b64(str) {
  return window.btoa(unescape(encodeURIComponent(str)));
}

function CustomPhoto(props) {
  const [png, setPng] = useState("");
  const [base64, setbase64] = useState("");
  useEffect(() => {
    axios({
      method: "get",
      headers: {
        Authorization: `Bearer ${state?.token}`
      },
      responseType: "blob",
      url: `http://192.168.0.107:3005/api/v1/storage/workdrive/folder_id/files/bz58aa141943840e948fe852d39d8eb9712b8/thumbnail`,
    })
      .then((response) => {
        // console.log("data:image/png;base64," + utf8_to_b64(response.data));
        console.log({ response: response.data });
        var blodData = new Blob([response.data]);
        var urlData = URL.createObjectURL(blodData);
        setbase64(urlData);
        // return response.data;
      })
      .catch((error) => {
        console.log({ error: error });
      });
  }, []);
  return (
    <div>
      <div>{JSON.stringify(base64)}</div>

      <img src={base64} />
    </div>
  );
}

export default CustomPhoto;
