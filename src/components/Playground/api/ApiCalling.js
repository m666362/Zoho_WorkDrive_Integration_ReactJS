import axios from "axios";

// const base_url = `https://workdrive.zoho.com/api`;
const base_url = `http://192.168.0.107:3005/api/v1/storage/workdrive`;

export const getAccessToken = () => {
  const URL =
    "https://www.zohoapis.com/crm/v2/functions/getaccesstoken/actions/execute";

  return axios(URL, {
    method: "GET",
    headers: {
      "content-type": "application/json", // whatever you want
    },
    params: {
      auth_type: "apikey",
      zapikey:
        "1003.3fda4e581ecb2838b2d8959665591777.90fcd8129f39eecb49682e34a3286ae0",
    },
  })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const getFoldersItem = (token, folder_id) => {
  const URL = `${base_url}/${folder_id}/files`;

  return axios(URL, {
    method: "GET",
    headers: {
      Authorization: token,
      Accept: "application/vnd.api+json",
    },
  })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const fileUploader = (token, data, parentId) => {
  const URL = `${base_url}/v1/upload?parent_id=${parentId}&override-name-exist=true`;

  return axios
    .post(URL, data, {
      headers: {
        Authorization: token,
        Accept: "application/vnd.api+json",
      },
    })
    .then((response) => response)
    .catch((error) => {
      console.log({ throwError: error });
      // throw error;
    });
};
// /:folder_id/files
// /:folder_id/files/:file_id
export const renameFileFolder = (token, data, file) => {
  console.log({
    data: data,
    extn: file.attributes.extn ?? "",
  });
  // const URL = `${base_url}/v1/files/${file.id}`;
  const URL = `${base_url}/${file.id}/files`;

  return axios
    .put(
      URL,
      {
        name: file.attributes.extn
          ? `${data.name}.${file.attributes.extn}`
          : data.name,
      },
      {
        headers: {
          Authorization: token,
          Accept: "application/vnd.api+json",
        },
      }
    )
    .then((response) => response)
    .catch((error) => {
      console.log({ throwError: error });
      // throw error;
    });
};

// /:folder_id/files/:file_id
export const renameFile = (token, data, file) => {
  console.log({
    data: data,
    extn: file.attributes.extn ?? "",
  });
  // const URL = `${base_url}/v1/files/${file.id}`;
  const URL = `${base_url}/${file.attributes.parent_id}/files/${file.id}`;

  return axios
    .put(
      URL,
      {
        name: file.attributes.extn
          ? `${data.name}.${file.attributes.extn}`
          : data.name,
      },
      {
        headers: {
          Authorization: token,
          Accept: "application/vnd.api+json",
        },
      }
    )
    .then((response) => response)
    .catch((error) => {
      console.log({ throwError: error });
      // throw error;
    });
};

export const deleteFileFolder = (token, file) => {
  const URL = `${base_url}/${file.id}/files`;

  return axios
    .delete(URL, {
      headers: {
        Authorization: token,
        Accept: "application/vnd.api+json",
      },
    })
    .then((response) => response)
    .catch((error) => {
      console.log({ throwError: error });
      // throw error;
    });
};

export const deleteFile = (token, file) => {
  const URL = `${base_url}/${file.attributes.parent_id}/files/${file.id}`;

  return axios
    .delete(URL, {
      headers: {
        Authorization: token,
        Accept: "application/vnd.api+json",
      },
    })
    .then((response) => response)
    .catch((error) => {
      console.log({ throwError: error });
      // throw error;
    });
};

export const moveFile = (token, file, childId) => {
  // const URL = `${base_url}/v1/files`;
  // /:folder_id/files/move/:file_id
  // req.body.destination_id,
  const URL = `${base_url}/folderId/files/move/${childId}`;

  return axios
    .post(
      URL,
      {
        destination_id: file.id,
      },
      {
        headers: {
          Authorization: token,
          Accept: "application/vnd.api+json",
        },
      }
    )
    .then((response) => response)
    .catch((error) => {
      console.log({ throwError: error });
      // throw error;
    });
};

export const getImageResponse = (token, file) => {
  const URL = `${base_url}/v1/download/${file?.id}`;

  return axios({
    method: "get",
    headers: {
      Accept: "application/vnd.api+json",
      Authorization: token,
    },
    responseType: "blob",
    url: URL,
  })
    .then((response) => response)
    .catch((error) => {
      console.log({ throwError: error });
      // throw error;
    });
};

export const getThumbnailData = (token, file) => {
  const URL = `https://previewengine-accl.zoho.com/thumbnail/WD/${file?.id}`;

  return axios({
    method: "get",
    headers: {
      Authorization: token,
    },
    responseType: "blob",
    url: URL,
  })
    .then((response) => response)
    .catch((error) => {
      console.log({ throwError: error });
      // throw error;
    });
};
