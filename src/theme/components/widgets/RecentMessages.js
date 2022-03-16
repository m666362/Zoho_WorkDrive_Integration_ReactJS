import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Badge,
  Divider,
} from "@material-ui/core";
import { WidgetCard } from "../base-card/WidgetCard";

import img1 from "../../assets/images/users/1.jpg";
import img2 from "../../assets/images/users/2.jpg";
import img3 from "../../assets/images/users/3.jpg";
import img4 from "../../assets/images/users/4.jpg";

const messages = [
  {
    avatar: img1,
    title: "Roman Joined the Team!",
    subtitle: "Congratulate him",
    time: "9:08 AM",
    status: "success",
  },
  {
    avatar: img2,
    title: "New message received",
    subtitle: "Salma sent you new message",
    time: "11:56 AM",
    status: "warning",
  },
  {
    avatar: img3,
    title: "New Payment received",
    subtitle: "Check your earnings",
    time: "4:39 AM",
    status: "success",
  },
  {
    avatar: img4,
    title: "Jolly completed tasks",
    subtitle: "Assign her new tasks",
    time: "1:12 AM",
    status: "danger",
  },
];

const RecentMessages = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        p: 0,
        mb: 4,
      }}
    >
      <CardContent
        sx={{
          p: 3,
          pb: 0,
        }}
      >
        <WidgetCard title="Recent Messages"></WidgetCard>
      </CardContent>
      {messages.map((message, index) => (
        <Box key={index}>
          <Box
            sx={{
              p: 3,
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
                <Typography variant="h5">{message.title}</Typography>
                <Typography color="textSecondary" variant="h6" fontWeight="400">
                  {message.subtitle}
                </Typography>
                <Typography
                  color="textSecondary"
                  variant="caption"
                  fontWeight="400"
                >
                  {message.time}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Divider />
        </Box>
      ))}
    </Card>
  );
};

export { RecentMessages };
