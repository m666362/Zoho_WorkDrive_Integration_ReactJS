import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import sidebarBuynowsvg from "../../../../assets/images/backgrounds/sidebar-buynow-bg.svg";
const Buynow = () => {
  //const customizer = useSelector((state)=> state.CustomizerReducer);

  return (
    <Box pb={5} mt={5}>
      <Box
        p={2}
        m={1}
        sx={{
          backgroundColor: (theme) => theme.palette.primary.light,
          borderRadius: "10px",
        }}
        style={{ position: "relative" }}
      >
        <img
          src={sidebarBuynowsvg}
          alt={sidebarBuynowsvg}
          className="buyNowImg"
        />
        <Box pb={1} pt={2} sx={{ width: "60%" }}>
          <Typography
            variant="h5"
            mb={2}
            sx={{
              color: (theme) => theme.palette.secondary.main,
            }}
          >
            Built with Material-UI
          </Typography>
          <Button
            color="secondary"
            href="#"
            fullWidth
            disableElevation
            variant="contained"
          >
            Buy Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Buynow;
