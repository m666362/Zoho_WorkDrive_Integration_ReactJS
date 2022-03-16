import React from "react";
import PageContainer from "../../components/container/PageContainer";

import {
  Card,
  CardContent,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Avatar,
  Chip,
} from "@material-ui/core";

import img1 from "../../../assets/images/users/1.jpg";
import img2 from "../../../assets/images/users/2.jpg";
import img3 from "../../../assets/images/users/3.jpg";
import img4 from "../../../assets/images/users/4.jpg";
import img5 from "../../../assets/images/users/5.jpg";

const basics = [
  {
    imgsrc: img1,
    name: "Sunil Joshi",
    post: "Web Designer",
    pname: "Elite Admin",
    teams: [
      {
        color: "secondary.main",
        text: "S",
      },
      {
        color: "error.main",
        text: "D",
      },
    ],
    status: "Active",
    budget: "3.9",
  },
  {
    imgsrc: img2,
    name: "Andrew McDownland",
    post: "Project Manager",
    pname: "Real Homes WP Theme",
    teams: [
      {
        color: "primary.main",
        text: "A",
      },
      {
        color: "warning.main",
        text: "X",
      },
      {
        color: "secondary.main",
        text: "N",
      },
    ],
    status: "Pending",
    budget: "24.5",
  },
  {
    imgsrc: img3,
    name: "Christopher Jamil",
    post: "Project Manager",
    pname: "MedicalPro WP Theme",
    teams: [
      {
        color: "error.main",
        text: "X",
      },
    ],
    status: "Completed",
    budget: "12.8",
  },
  {
    imgsrc: img4,
    name: "Nirav Joshi",
    post: "Frontend Engineer",
    pname: "Hosting Press HTML",
    teams: [
      {
        color: "primary.main",
        text: "Y",
      },
      {
        color: "error.main",
        text: "X",
      },
    ],
    status: "Active",
    budget: "2.4",
  },
  {
    imgsrc: img5,
    name: "Micheal Doe",
    post: "Content Writer",
    pname: "Helping Hands WP Theme",
    teams: [
      {
        color: "secondary.main",
        text: "S",
      },
    ],
    status: "Cancel",
    budget: "9.3",
  },
];

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Basic Table",
  },
];

const BasicTable = () => {
  return (
    <Card variant="outlined" sx={{ width: "100%" }}>
      <CardContent>
        <Box
          sx={{
            overflow: {
              xs: "auto",
              sm: "unset",
            },
          }}
        >
          <Table
            aria-label="simple table"
            sx={{
              whiteSpace: "nowrap",
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="h5">Users</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5">Project Name</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5">Team</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5">Status</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5">Budget</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {basics.map((basic, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Box display="flex" alignItems="center">
                      <Avatar
                        src={basic.imgsrc}
                        alt={basic.imgsrc}
                        width="35"
                        sx={{
                          borderRadius: "100%",
                        }}
                      />
                      <Box
                        sx={{
                          ml: 2,
                        }}
                      >
                        <Typography variant="h6" fontWeight="600">
                          {basic.name}
                        </Typography>
                        <Typography
                          color="textSecondary"
                          variant="h6"
                          fontWeight="400"
                        >
                          {basic.post}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography
                      color="textSecondary"
                      variant="h6"
                      fontWeight="400"
                    >
                      {basic.pname}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Box display="flex" alignItems="center">
                      {basic.teams.map((team, index) => (
                        <Avatar
                          key={index}
                          sx={{
                            backgroundColor: team.color,
                            width: "35px",
                            height: "35px",
                            color: "#fff",
                            ml: "-8px",
                          }}
                        >
                          {team.text}
                        </Avatar>
                      ))}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Chip
                      sx={{
                        backgroundColor:
                          basic.status === "Active"
                            ? (theme) => theme.palette.success.light
                            : basic.status === "Pending"
                            ? (theme) => theme.palette.warning.light
                            : basic.status === "Completed"
                            ? (theme) => theme.palette.primary.light
                            : basic.status === "Cancel"
                            ? (theme) => theme.palette.error.light
                            : (theme) => theme.palette.secondary.light,
                        color:
                          basic.status === "Active"
                            ? (theme) => theme.palette.success.main
                            : basic.status === "Pending"
                            ? (theme) => theme.palette.warning.main
                            : basic.status === "Completed"
                            ? (theme) => theme.palette.primary.main
                            : basic.status === "Cancel"
                            ? (theme) => theme.palette.error.main
                            : (theme) => theme.palette.secondary.main,
                        borderRadius: "6px",
                        pl: "3px",
                        pr: "3px",
                      }}
                      size="small"
                      label={basic.status}
                    ></Chip>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">${basic.budget}k</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BasicTable;
