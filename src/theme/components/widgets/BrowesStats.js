import React from "react";
import { Box, Typography, Card, CardContent } from "@material-ui/core";

import { WidgetCard } from "../base-card/WidgetCard";

import b1 from "../../../assets/images/browser/chrome-logo.png";
import b2 from "../../../assets/images/browser/firefox-logo.png";
import b3 from "../../../assets/images/browser/safari-logo.png";
import b4 from "../../../assets/images/browser/internet-logo.png";
import b5 from "../../../assets/images/browser/opera-logo.png";
import b6 from "../../../assets/images/browser/netscape-logo.png";

const stats = [
  {
    img: b1,
    title: "Google Chrome",
    percent: "23",
  },
  {
    img: b2,
    title: "Mozila Firefox",
    percent: "15",
  },
  {
    img: b3,
    title: "Apple Safari",
    percent: "07",
  },
  {
    img: b4,
    title: "Internet Explorer",
    percent: "09",
  },
  {
    img: b5,
    title: "Opera mini",
    percent: "23",
  },
  {
    img: b6,
    title: "Netscape Navigator",
    percent: "04",
  },
];

const BrowesStats = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        pb: 0,
        mb: 4,
        width: "100%",
      }}
    >
      <CardContent
        sx={{
          pb: 0,
        }}
      >
        <WidgetCard title="Browser Stats"></WidgetCard>

        {stats.map((stat, index) => (
          <Box
            key={index}
            display="flex"
            alignItems="center"
            sx={{
              pb: 2,
              pt: 2,
            }}
          >
            <img src={stat.img} alt={stat.img} />
            <Box
              sx={{
                ml: 2,
              }}
            >
              <Typography color="textSecondary" variant="h5">
                {stat.title}
              </Typography>
            </Box>
            <Box
              sx={{
                ml: "auto",
              }}
            >
              <Typography color="textSecondary" variant="h5" fontWeight="400">
                {stat.percent}%
              </Typography>
            </Box>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export { BrowesStats };
