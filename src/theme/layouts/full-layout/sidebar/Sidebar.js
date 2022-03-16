import React from "react";
import {
  Box,
  Drawer,
  useMediaQuery,
  List,
  Typography,
  ListItem,
  Collapse,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { SidebarWidth } from "../../../../assets/global/Theme-variable";
import LogoIcon from "../logo/LogoIcon";

// import Menuitems from "./data";
import FeatherIcon from "feather-icons-react";
import Buynow from "./Buynow";
import Scrollbar from "../../../components/custom-scroll/Scrollbar";
import useTrackedStore from "../../../../store/useTrackedStore";
const Sidebar = (props) => {
  const [open, setOpen] = React.useState(true);

  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const state = useTrackedStore();

  const handleClick = (index, menuTitle, childMenuTitle) => {
    if (open === index) {
      setOpen((prevopen) => !prevopen);
    } else {
      setOpen(index);
    }
    state.setMenuClicked(menuTitle);
    state.setSubMenuClicked(childMenuTitle);
  };

  const SidebarContent = (
    <Scrollbar style={{ height: "calc(100vh - 5px)" }}>
      <Box sx={{ p: 2 }}>
        <LogoIcon />
        <Box>
          <List>
            {state.menuItems.map((item, index) => {
              //{/********SubHeader**********/}
              if (item.subheader) {
                return (
                  <li key={item.subheader}>
                    <Typography
                      variant="subtitle2"
                      fontWeight="500"
                      sx={{ my: 2, mt: 4, opacity: "0.4" }}
                    >
                      {item.subheader}
                    </Typography>
                  </li>
                );
                // {/********If Sub Menu**********/}
              } else if (item.children) {
                return (
                  <React.Fragment key={item.title}>
                    <ListItem
                      button
                      component="li"
                      onClick={() => {
                        handleClick(index, item.title, "");
                        // state.setMenuClicked(item.title);
                      }}
                      selected={state.menuClicked === item.title}
                      sx={{
                        mb: 1,
                        ...(state.menuClicked === item.title && {
                          color: "white",
                          backgroundColor: (theme) =>
                            `${theme.palette.primary.main}!important`,
                        }),
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ...(state.menuClicked === item.title && {
                            color: "white",
                          }),
                        }}
                      >
                        <FeatherIcon icon={item.icon} width="20" height="20" />
                      </ListItemIcon>
                      <ListItemText>{item.title}</ListItemText>
                      {index === open || state.menuClicked === item.title ? (
                        <FeatherIcon icon="chevron-down" size="16" />
                      ) : (
                        <FeatherIcon icon="chevron-right" size="16" />
                      )}
                    </ListItem>
                    <Collapse in={index === open} timeout="auto" unmountOnExit>
                      <List component="li" disablePadding>
                        {item.children.map((child) => {
                          return (
                            <ListItem
                              key={child.title}
                              button
                              // component={NavLink}
                              // to={child.href}
                              onClick={() => {
                                props.onSidebarClose();
                                state.setSubMenuClicked(child.title);
                              }}
                              selected={state.subMenuClicked === child.title}
                              sx={{
                                mb: 1,
                                ...(state.subMenuClicked === child.title && {
                                  color: "primary.main",
                                  backgroundColor: "transparent!important",
                                }),
                              }}
                            >
                              <ListItemIcon
                                sx={{
                                  svg: { width: "14px", marginLeft: "3px" },
                                  ...(state.menuClicked === child.title && {
                                    color: "primary.main",
                                  }),
                                }}
                              >
                                <FeatherIcon
                                  icon={child.icon}
                                  width="20"
                                  height="20"
                                />
                              </ListItemIcon>
                              <ListItemText>{child.title}</ListItemText>
                            </ListItem>
                          );
                        })}
                      </List>
                    </Collapse>
                  </React.Fragment>
                );
                // {/********If Sub No Menu**********/}
              } else {
                return (
                  <List component="li" disablePadding key={item.title}>
                    <ListItem
                      onClick={() => {
                        handleClick(index, item.title, "");
                        // state.setMenuClicked(item.title);
                      }}
                      button
                      // component={NavLink}
                      // to={item.href}
                      selected={state.menuClicked === item.title}
                      sx={{
                        mb: 1,
                        ...(state.menuClicked === item.title && {
                          color: "white",
                          backgroundColor: (theme) =>
                            `${theme.palette.primary.main}!important`,
                        }),
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ...(state.menuClicked === item.title && {
                            color: "white",
                          }),
                        }}
                      >
                        <FeatherIcon icon={item.icon} width="20" height="20" />
                      </ListItemIcon>
                      <ListItemText
                        onClick={() => {
                          props.onSidebarClose();
                          state.setMenuClicked(item.title);
                          state.setSubMenuClicked("");
                        }}
                      >
                        {item.title}
                      </ListItemText>
                    </ListItem>
                  </List>
                );
              }
            })}
          </List>
        </Box>
        <Buynow />
      </Box>
    </Scrollbar>
  );
  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open={props.isSidebarOpen}
        variant="persistent"
        PaperProps={{
          sx: {
            width: SidebarWidth,
          },
        }}
      >
        {SidebarContent}
      </Drawer>
    );
  }
  return (
    <Drawer
      anchor="left"
      open={props.isMobileSidebarOpen}
      onClose={props.onSidebarClose}
      PaperProps={{
        sx: {
          width: SidebarWidth,
        },
      }}
      variant="temporary"
    >
      {SidebarContent}
    </Drawer>
  );
};

export default Sidebar;
