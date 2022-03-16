import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import PageContainer from "../../components/container/PageContainer";

import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  LinearProgress,
  IconButton,
} from "@material-ui/core";

import FeatherIcon from "feather-icons-react";

import img1 from "../../../../assets/images/products/1.jpg";
import img2 from "../../../../assets/images/products/2.jpg";
import img3 from "../../../../assets/images/products/3.jpg";
import img4 from "../../../../assets/images/products/4.jpg";

const columns = [
  { id: "pname", label: "Products", minWidth: 170 },
  { id: "review", label: "Review", minWidth: 100 },
  {
    id: "earnings",
    label: "Earnings",
    minWidth: 170,
  },
  {
    id: "action",
    label: "Action",
    minWidth: 170,
  },
];

const rows = [
  {
    imgsrc: img1,
    name: "Nike branding shoes for Men and Women",
    tags: "Bootstrap, Angular, React",
    review: "good",

    percent: 65,
    earnings: "546,000",
  },
  {
    imgsrc: img2,
    name: "Supreme toys presents best gift",
    tags: "Angular, React",
    review: "excellent",

    percent: 98,
    earnings: "780,000",
  },
  {
    imgsrc: img3,
    name: "Red color shoes from Gucci",
    tags: "Bootstrap, React",
    review: "average",

    percent: 46,
    earnings: "457,000",
  },
  {
    imgsrc: img4,
    name: "Stylish sneakers for men and women",
    tags: "Bootstrap, Angular, React",
    review: "bad",

    percent: 23,
    earnings: "125,000",
  },
  {
    imgsrc: img1,
    name: "Nike branding shoes for Men and Women",
    tags: "Bootstrap, Angular, React",
    review: "bad",

    percent: 10,
    earnings: "620,000",
  },
];

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Fixed Header Table",
  },
];

const FixedHeaderTable = () => {
  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <PageContainer
      title="Fixed Header Table"
      description="this is Fixed Header Table page"
    >
      <Card variant="outlined">
        <CardContent>
          <TableContainer
            sx={{
              maxHeight: 440,
            }}
          >
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      <Typography variant="h5" fontWeight="500">
                        {column.label}
                      </Typography>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => {
                  return (
                    <TableRow hover key={index}>
                      <TableCell
                        sx={{
                          pl: 0,
                        }}
                      >
                        <Box display="flex" alignItems="center">
                          <Avatar
                            src={row.imgsrc}
                            alt={row.imgsrc}
                            sx={{
                              borderRadius: "10px",
                              height: "70px",
                              width: "90px",
                            }}
                          />

                          <Box
                            sx={{
                              ml: 2,
                            }}
                          >
                            <Typography variant="h5">{row.name}</Typography>
                            <Typography
                              color="textSecondary"
                              variant="h6"
                              fontWeight="400"
                            >
                              {row.tags}
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell
                        sx={{
                          pl: 0,
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            mb: 1,
                          }}
                        >
                          {Capitalize(row.review)}
                        </Typography>
                        <LinearProgress
                          value={row.percent}
                          variant="determinate"
                          sx={{
                            "& span": {
                              backgroundColor:
                                row.review === "good"
                                  ? (theme) => theme.palette.primary.main
                                  : row.review === "excellent"
                                  ? (theme) => theme.palette.success.main
                                  : row.review === "average"
                                  ? (theme) => theme.palette.warning.main
                                  : row.review === "bad"
                                  ? (theme) => theme.palette.error.main
                                  : (theme) => theme.palette.secondary.main,
                            },
                          }}
                        />
                        <Typography
                          color="textSecondary"
                          variant="h6"
                          fontWeight="400"
                          sx={{
                            mt: 1,
                            whiteSpace: "nowrap",
                          }}
                        >
                          {row.percent}% sold
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography color="textSecondary" variant="h6">
                          Earnings
                        </Typography>
                        <Typography variant="h5">${row.earnings}</Typography>
                      </TableCell>
                      <TableCell>
                        <IconButton>
                          <FeatherIcon
                            icon="trash"
                            width="18"
                            height="18"
                            sx={{
                              color: (theme) => theme.palette.grey.A200,
                            }}
                          ></FeatherIcon>
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </PageContainer>
  );
};

export default FixedHeaderTable;
