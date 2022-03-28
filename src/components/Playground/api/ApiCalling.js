import axios from "axios";

// const base_url = `https://workdrive.zoho.com/api`;
const base_url = `http://192.168.0.107:3005/api/v1/storage/workdrive`;

export const getFoldersItem = (userAccessToken, folder_id) => {
  const URL = `${base_url}/${folder_id}/files`;

  return axios(URL, {
    method: "GET",
    headers: {
      Authorization: userAccessToken,
      Accept: "application/vnd.api+json",
    },
  })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const createFolder = (token, folder_id, data) => {
  const URL = `${base_url}/${folder_id}/files`;
  console.log(URL);
  return axios
    .post(URL, data, {
      headers: {
        Authorization: token,
        Accept: "application/vnd.api+json",
      },
    })
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
};

export const fileUploader = (token, data, parentId) => {
  const URL = `${base_url}/${parentId}/files/upload/notworking`;

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
  // const URL = `${base_url}/v1/download/${file?.id}`;
  const URL = `${base_url}/folder_id/files/${file?.id}/download`;

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
  // const URL = `https://previewengine-accl.zoho.com/thumbnail/WD/${file?.id}`;
  const URL = `${base_url}/folder_id/files/${file?.id}/thumbnail`;

  return axios({
    method: "get",
    headers: {
      Authorization: token,
    },
    responseType: "blob",
    url: URL,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log({ throwError: error });
      // throw error;
    });
};
