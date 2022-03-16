import React from "react";

// import * as data from "./data.js";

import { Box, MenuItem, Typography, Avatar, Divider } from "@material-ui/core";

const NotificationDropdown = () => {
  return (
    <Box>
      {/* {data.notifications.map((notification, index) => (
        <Box key={index}>
          <MenuItem
            sx={{
              pt: 2,
              pb: 2,
              borderRadius: "0px",
            }}
          >
            <Box display="flex" alignItems="center">
              <Avatar
                src={notification.avatar}
                alt={notification.avatar}
                sx={{
                  width: "45px",
                  height: "45px",
                }}
              ></Avatar>
              <Box
                sx={{
                  ml: 2,
                }}
              >
                <Typography
                  variant="h5"
                  noWrap
                  sx={{
                    width: "240px",
                  }}
                >
                  {notification.title}
                </Typography>
                <Typography
                  color="textSecondary"
                  variant="h6"
                  noWrap
                  fontWeight="400"
                  sx={{
                    width: "240px",
                  }}
                >
                  {notification.subtitle}
                </Typography>
              </Box>
            </Box>
          </MenuItem>
          <Divider
            style={{
              marginTop: 0,
              marginBottom: 0,
            }}
          />
        </Box>
      ))} */}
    </Box>
  );
};

export default NotificationDropdown;
