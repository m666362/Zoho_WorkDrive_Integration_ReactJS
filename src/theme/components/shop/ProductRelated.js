import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Rating,
} from "@material-ui/core";

import s9 from "../../assets/images/products/s5.jpg";
import s10 from "../../assets/images/products/s6.jpg";
import s11 from "../../assets/images/products/s7.jpg";
import s12 from "../../assets/images/products/s8.jpg";

const Shopitems = [
  {
    title: "Nike branding shoes",
    category: "Men Shoes",
    price: "$546",
    photo: s9,
    rname: "r1",
  },
  {
    title: "Nike branding shoes",
    category: "Men Shoes",
    price: "$546",
    photo: s10,
    rname: "r2",
  },
  {
    title: "Nike branding shoes",
    category: "Men Shoes",
    price: "$546",
    photo: s11,
    rname: "r3",
  },
  {
    title: "Nike branding shoes",
    category: "Men Shoes",
    price: "$546",
    photo: s12,
    rname: "r4",
  },
];
const ProductRelated = () => {
  const [value, setValue] = React.useState(2);
  return (
    <Box>
      <Typography
        variant="h2"
        fontWeight="700"
        sx={{
          pl: "15px",
          mt: 5,
          mb: 3,
        }}
      >
        Related Products
      </Typography>
      <Grid container spacing={0}>
        {Shopitems.map((product, index) => {
          return (
            <Grid
              item
              xs={12}
              lg={3}
              sm={4}
              display="flex"
              alignItems="stretch"
              key={index}
            >
              <Card sx={{ p: 0, width: "100%" }}>
                <img src={product.photo} alt="img" width="100%" />
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="caption">{product.category}</Typography>
                  <Typography variant="h5">{product.title}</Typography>
                  <Box display="flex" alignItems="center" sx={{ mt: "15px" }}>
                    <Typography variant="h5" sx={{ mr: "auto" }}>
                      {product.price}
                    </Typography>
                    <Rating
                      size="small"
                      name={product.rname}
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export { ProductRelated };
