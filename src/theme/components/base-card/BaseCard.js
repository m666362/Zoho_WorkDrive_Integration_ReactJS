import React from "react";

import { Card, CardHeader, CardContent, Divider } from "@material-ui/core";

const BaseCard = (props) => {
  return (
    <Card
      variant="outlined"
      sx={{
        width: "100%",
        p: 0,
      }}
    >
      <CardHeader title={props.title} />

      <Divider />
      <CardContent>{props.children}</CardContent>
    </Card>
  );
};

export default BaseCard;
