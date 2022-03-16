import React from "react";

import { Typography, Card, CardHeader, CardContent } from "@material-ui/core";

const DashboardCard = (props) => {
  return (
    <Card
      variant="outlined"
      sx={{
        width: "100%",
        p: props.custompadding,
        "& .MuiCardContent-root:last-child": {
          pb: props.custompadding,
        },
      }}
    >
      <CardHeader
        sx={{
          p: props.customheaderpadding,
          display: {
            xs: props.customdisplay,
            lg: "flex",
            sm: "flex",
          },
        }}
        title={
          <Typography
            variant="h3"
            fontWeight="500"
            sx={{
              mb: {
                xs: props.custommargin,
              },
            }}
          >
            {props.title}
          </Typography>
        }
        subtitle={props.subtitle}
        action={props.action ? props.action : ""}
      ></CardHeader>
      {/* content area */}
      <CardContent
        sx={{
          p: props.custompadding,
        }}
      >
        {props.children}
      </CardContent>
    </Card>
  );
};

export { DashboardCard };
