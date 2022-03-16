import React from "react";
import { Box, Typography, Card, CardContent, Chip } from "@material-ui/core";

import { CustomCheckbox } from "../forms/custom-elements/CustomCheckbox";

import { WidgetCard } from "../base-card/WidgetCard";

const tasks = [
  {
    color: "#fc4b6c",
    title: "Schedule meeting with",
    time: "Today",
  },
  {
    color: "#0bb2fb",
    title: "Give Purchase report to",
    time: "Yesterday",
  },
  {
    color: "#1e4db7",
    title: "Book flight for holiday",
    time: "1 Week",
  },
  {
    color: "#fec90f",
    title: "Forward all tasks",
    time: "2 Weeks",
  },
  {
    color: "#39cb7f",
    title: "Recieve shipment",
    time: "3 Weeks",
  },
];

const TaskList = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        pb: 0,
        mb: 4,
      }}
    >
      <CardContent
        sx={{
          pb: 0,
        }}
      >
        <WidgetCard title="Task List"></WidgetCard>

        {tasks.map((task, index) => (
          <Box
            key={index}
            display="flex"
            alignItems="center"
            sx={{
              pb: 2,
            }}
          >
            <Box
              sx={{
                flexShrink: "0",
              }}
            >
              <CustomCheckbox
                bgcolor={task.color}
                inputprops={{ "aria-label": "checkbox" }}
                sx={{
                  ml: "-5px",
                }}
              />
            </Box>

            <Box
              display="flex"
              alignItems="center"
              sx={{
                ml: "5px",
              }}
            >
              <Typography variant="h6">{task.title}</Typography>
              <Chip
                sx={{
                  backgroundColor:
                    task.time === "Today"
                      ? (theme) => theme.palette.error.main
                      : task.time === "Yesterday"
                      ? (theme) => theme.palette.primary.main
                      : task.time === "1 Week"
                      ? (theme) => theme.palette.secondary.main
                      : task.time === "2 Weeks"
                      ? (theme) => theme.palette.warning.main
                      : (theme) => theme.palette.success.main,
                  color: "#fff",
                  borderRadius: "6px",
                  pl: "3px",
                  pr: "3px",
                  ml: "5px",
                }}
                size="small"
                label={task.time}
              ></Chip>
            </Box>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export { TaskList };
