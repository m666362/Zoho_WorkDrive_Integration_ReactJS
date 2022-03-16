import React from "react";

import { Box, Typography } from "@material-ui/core";

const WidgetCard = (props) => {
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          mb: 2,
          width: "100%",
        }}
      >
        {props.title}
      </Typography>
    </Box>
  );
};

export { WidgetCard };
