function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

export const makeCustomFile = (response) => {
  console.log("Api response called");
  var StringData = JSON.parse(
    response.data.data[0].attributes["File INFO"] ?? "{}"
  );

  function makeType(extention) {
    if (extention == "png" || extention == "jpg") return "image";
    else if (extention == "pdf") return "pdf";
    else if (extention == "txt") return "doc";
    else return "folder";
  }

  return {
    id: response.data.data[0].attributes.resource_id,
    type: "files",
    attributes: {
      modified_by_zuid: "705309872",
      is_locked: false,
      conv_engine_type: 1,
      is_fillable_resource: false,
      is_published: false,
      destination_id: response.data.data[0].attributes.parent_id,
      storage_info: {
        size: response.data.data[0].attributes.childSize
          ? response.data.data[0].attributes.childSize
          : formatBytes(StringData.size),
        storage_used: "1.08 MB",
        files_count: 0,
        folders_count: 0,
        size_in_bytes: response.data.data[0].attributes.childSizeInBytes
          ? response.data.data[0].attributes.childSizeInBytes
          : StringData.size,
        storage_used_in_bytes: 1136702,
        storage_used_by_workdrive_in_bytes: 0,
        storage_used_by_app_in_bytes: 0,
      },
      type: makeType(response.data.data[0].attributes.FileName.split(".")[1]),
      created_time_i18: "Oct 9, 5:24 PM",
      modified_time_in_millisecond: 1634031692578,
      status_change_time: "Oct 12, 3:41 PM",
      download_url: `https://download-accl.zoho.com/v1/workdrive/download/${response.data.data[0].attributes.resource_id}`,
      comment_badge_count: 0,
      is_app_associated: false,
      created_time: "Oct 9, 5:24 PM",
      lock_status: 2,
      is_folder: false,
      resource_type: 2505,
      is_email_in_upload: false,
      display_attr_name: response.data.data[0].attributes.FileName,
      created_by: "asif uddin",
      display_html_name: "PDFTRON_about.pdf",
      labels: [],
      parent_id: response.data.data[0].attributes.parent_id,
      name: response.data.data[0].attributes.FileName,
      status_change_time_in_millisecond: 1634031692578,
      permalink: response.data.data[0].attributes.Permalink,
      favorite: false,
      new_badge_count: 0,
      status: 1,
      modified_time_i18: "Oct 12, 3:41 PM",
      extn: response.data.data[0].attributes.FileName.split(".")[1],
      shortcut_link: "",
      status_change_time_i18: "Oct 12, 3:41 PM",
      description: "",
      uploaded_time_in_millisecond: 1633778669156,
      thumbnail_url: `https://previewengine-accl.zoho.com/thumbnail/WD/${response.data.data[0].attributes.resource_id}`,
      title: "",
      modified_time: "Oct 12, 3:41 PM",
      library_id: "igmchd7d306ea05b5405ea86669969c339ed5",
      icon_class: "pdf",
      created_time_in_millisecond: 1633778669153,
      owner: "705311201",
      creator: "705309872",
      capabilities: {
        can_read: true,
        can_share: true,
        can_remove_share: false,
        can_delete: false,
        can_edit: true,
        can_upload_files: true,
        can_trash: true,
        can_rename: true,
        can_restore: false,
        can_copy: true,
        can_move: true,
        can_zip: true,
        can_download: true,
        can_emailattach: true,
        can_publish: true,
        can_create_task: true,
        can_share_support: true,
        can_label: true,
        can_delist_file: false,
        can_associate_data_template: true,
        can_favorite: true,
        can_checkout: true,
        can_cancel_checkout: false,
        can_discard_checkout: false,
        can_checkin: false,
        can_read_comment: true,
        can_create_comment: true,
        can_trash_files: true,
      },
      uploaded_time_i18: "Oct 9, 5:24 PM",
      is_external_upload: false,
      watch_preference: {
        watch: false,
        notifyemail: false,
        notifybell: false,
      },
      opened_time_in_millisecond: 0,
      edit_badge_count: 0,
      share_data: [],
      uploaded_time: "Oct 9, 5:24 PM",
      has_folders: false,
      service_type: "upload",
      display_url_name: response.data.data[0].attributes.FileName,
      is_unread: false,
      modified_by: "asif uddin",
      embed_props: {},
    },
    relationships: {
      folders: {
        links: {
          self: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/relationships/folders`,
          related: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/folders`,
        },
      },
      unzip: {
        links: {
          self: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/relationships/unzip`,
          related: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/unzip`,
        },
      },
      accesschartdata: {
        links: {
          self: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/relationships/accesschartdata`,
          related: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/accesschartdata`,
        },
      },
      resourceproperty: {
        links: {
          self: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/relationships/resourceproperty`,
          related: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/resourceproperty`,
        },
      },
      shortcut: {
        links: {
          self: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/relationships/shortcut`,
          related: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/shortcut`,
        },
      },
      importfile: {
        links: {
          self: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/relationships/importfile`,
          related: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/importfile`,
        },
      },
      permissions: {
        links: {
          self: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/relationships/permissions`,
          related: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/permissions`,
        },
      },
      saveastemplate: {
        links: {
          self: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/relationships/saveastemplate`,
          related: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/saveastemplate`,
        },
      },
      links: {
        links: {
          self: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/relationships/links`,
          related: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/links`,
        },
      },
      copy: {
        links: {
          self: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/relationships/copy`,
          related: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/copy`,
        },
      },
      previewzip: {
        links: {
          self: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/relationships/previewzip`,
          related: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/previewzip`,
        },
      },
      tasks: {
        links: {
          self: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/relationships/tasks`,
          related: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/tasks`,
        },
      },
      custommetadata: {
        links: {
          self: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/relationships/custommetadata`,
          related: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/custommetadata`,
        },
      },
      comments: {
        links: {
          self: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/relationships/comments`,
          related: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/comments`,
        },
      },
      previewinfo: {
        links: {
          self: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/relationships/previewinfo`,
          related: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/previewinfo`,
        },
      },
      publiclink: {
        links: {
          self: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/relationships/publiclink`,
          related: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/publiclink`,
        },
      },
      parentfolders: {
        links: {
          self: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/relationships/parentfolders`,
          related: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/parentfolders`,
        },
      },
      versions: {
        links: {
          self: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/relationships/versions`,
          related: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/versions`,
        },
      },
      supportshare: {
        links: {
          self: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/relationships/supportshare`,
          related: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/supportshare`,
        },
      },
      timeline: {
        links: {
          self: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/relationships/timeline`,
          related: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/timeline`,
        },
      },
      files: {
        links: {
          self: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/relationships/files`,
          related: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/files`,
        },
      },
      accessdata: {
        links: {
          self: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/relationships/accessdata`,
          related: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/accessdata`,
        },
      },
      breadcrumbs: {
        links: {
          self: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/relationships/breadcrumbs`,
          related: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/breadcrumbs`,
        },
      },
      entity: {
        links: {
          self: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/relationships/entity`,
          related: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/entity`,
        },
      },
      statistics: {
        links: {
          self: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/relationships/statistics`,
          related: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/statistics`,
        },
      },
      appdata: {
        links: {
          self: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/relationships/appdata`,
          related: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}/appdata`,
        },
      },
    },
    links: {
      self: `https://workdrive.zoho.com/api/v1/files/${response.data.data[0].attributes.resource_id}`,
    },
  };
};

export const changeParent = (file, parent_id) => {
  file.attributes.destination_id = parent_id;
  file.attributes.parent_id = parent_id;
  file.attributes.library_id = parent_id;
  console.log({
    fileFromRes: file,
    parent_id
  });
  return file;
};
