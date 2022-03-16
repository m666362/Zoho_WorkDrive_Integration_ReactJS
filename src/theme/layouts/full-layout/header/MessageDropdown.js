import React from "react";

import {
  Badge,
  Box,
  MenuItem,
  Typography,
  Avatar,
  Divider,
} from "@material-ui/core";

// import * as data from "./data.js";

const MessageDropdown = () => {
  return (
    <Box>
      {/* {data.messages.map((message, index) => (
        <Box key={index}>
          <MenuItem
            sx={{
              pt: 2,
              pb: 2,
              borderRadius: "0px",
            }}
          >
            <Box display="flex" alignItems="center">
              <Badge variant="dot" color={message.status}>
                <Avatar
                  src={message.avatar}
                  alt={message.avatar}
                  sx={{
                    width: "45px",
                    height: "45px",
                  }}
                ></Avatar>
              </Badge>

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
                  {message.title}
                </Typography>
                <Typography
                  color="textSecondary"
                  variant="h6"
                  fontWeight="400"
                  sx={{
                    width: "240px",
                  }}
                  noWrap
                >
                  {message.subtitle}
                </Typography>
                <Typography color="textSecondary" variant="body2">
                  {message.time}
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

export default MessageDropdown;
