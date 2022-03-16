import React from "react";

import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Link,
} from "@material-ui/core";

import img1 from "../../../assets/images/users/u1.jpg";
import img2 from "../../../assets/images/users/u2.jpg";
import img3 from "../../../assets/images/users/u3.jpg";
import img4 from "../../../assets/images/users/u4.jpg";
import img5 from "../../../assets/images/users/u5.jpg";
import img6 from "../../../assets/images/users/u6.jpg";
import img7 from "../../../assets/images/users/u7.jpg";
import img8 from "../../../assets/images/users/u8.jpg";
import img9 from "../../../assets/images/users/u9.jpg";

const photos = [
  {
    img: img1,
  },
  {
    img: img2,
  },
  {
    img: img3,
  },
  {
    img: img4,
  },
  {
    img: img5,
  },
  {
    img: img6,
  },
  {
    img: img7,
  },
  {
    img: img8,
  },
  {
    img: img9,
  },
];

const PhotosCard = () => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Box display="flex" alignItems="center">
          <Typography variant="h3" fontWeight="500">
            Photos
          </Typography>
          <Box
            sx={{
              ml: "auto",
            }}
          >
            <Link href="/" color="inherit" underline="none">
              See all photos
            </Link>
          </Box>
        </Box>
        <Grid
          container
          spacing={2}
          sx={{
            mt: 2,
          }}
        >
          {photos.map((photo, index) => (
            <Grid item sm={4} lg={4} xs={4} key={index}>
              <img src={photo.img} alt={photo.img} width="100%" />
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export { PhotosCard };
