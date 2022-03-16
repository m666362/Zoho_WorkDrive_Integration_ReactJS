import React from "react";
import {
  Grid,
  Typography,
  Box,
  Button,
  Breadcrumbs,
  Link,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import ThemeSelect from "../../../views/dashboards/dashboard1-components/ThemeSelect";
import FeatherIcon from "feather-icons-react";

const Breadcrumb = (props) => {
  return (
    <Grid
      container
      sx={{
        p: "15px",
      }}
    >
      <Grid item xs={12} sm={6} lg={8}>
        <Typography color="textSecondary" fontWeight="400" variant="h4">
          {props.subtitle}
        </Typography>

        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {props.items
            ? props.items.map((item, index) => {
                return (
                  <div key={index}>
                    {item.to ? (
                      <Link
                        underline="none"
                        color="inherit"
                        component={NavLink}
                        to={item.to}
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <Typography color="textPrimary">{item.title}</Typography>
                    )}
                  </div>
                );
              })
            : ""}
        </Breadcrumbs>
        <Typography
          fontWeight="700"
          variant="h1"
          sx={{
            lineHeight: "1.235",
          }}
        >
          {props.title}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} lg={4} display="flex" alignItems="flex-end">
        <Box
          sx={{
            display: { xs: "none", md: "block", lg: "flex" },
            alignItems: "center",
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          <ThemeSelect />
          <Button
            to="/user-profile"
            component={NavLink}
            sx={{
              ml: 1,
            }}
            variant="contained"
            color="primary"
          >
            <FeatherIcon icon="user" width="18" height="18"></FeatherIcon>
            <Box fontWeight="400" sx={{ ml: 1 }}>
              Profile
            </Box>
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Breadcrumb;
