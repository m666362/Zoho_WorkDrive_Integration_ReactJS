import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Menu,
  MenuItem,
  IconButton,
} from "@material-ui/core";

import FeatherIcon from "feather-icons-react";

import { CustomCheckbox } from "../forms/custom-elements/CustomCheckbox";

import { WidgetCard } from "../base-card/WidgetCard";

const options = ["Action", "Another Action", "Something else here"];

const todos = [
  {
    color: "#1e4db7",
    title: "Give purchase report to john",
    subtitle: "2 January 2021",
  },
  {
    color: "#fc4b6c",
    title: "Hit the gym",
    subtitle: "5 January 2021",
  },
  {
    color: "#fec90f",
    title: "Pay bills",
    subtitle: "12 January 2021",
  },
  {
    color: "#39cb7f",
    title: "Meet George",
    subtitle: "15 January 2021",
  },
  {
    color: "#0bb2fb",
    title: "Read a book",
    subtitle: "20 January 2021",
  },
];

const Todo = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
        <WidgetCard title="Todo List"></WidgetCard>

        {todos.map((todo, index) => (
          <Box
            key={index}
            display="flex"
            alignItems="flex-start"
            sx={{
              pb: 2,
            }}
          >
            <CustomCheckbox
              bgcolor={todo.color}
              inputprops={{ "aria-label": "checkbox" }}
              sx={{
                ml: "-5px",
              }}
            />
            <Box
              sx={{
                ml: "5px",
              }}
            >
              <Typography variant="h5">{todo.title}</Typography>
              <Typography
                color="textSecondary"
                variant="caption"
                fontWeight="400"
              >
                {todo.subtitle}
              </Typography>
            </Box>

            <Box
              sx={{
                ml: "auto",
              }}
            >
              <IconButton
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                size="large"
              >
                <FeatherIcon icon="more-horizontal" width="18"></FeatherIcon>
              </IconButton>
              <Menu
                id="long-menu"
                MenuListProps={{
                  "aria-labelledby": "long-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                {options.map((option) => (
                  <MenuItem
                    key={option}
                    selected={option === "Pyxis"}
                    onClick={handleClose}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export { Todo };
