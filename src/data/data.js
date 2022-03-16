import BaseCard from "../theme/components/base-card/BaseCard";

// import Dashboard1 from "../../theme/views/dashboards/Dashboard1";
export const Menuitems = [
  {
    navlabel: true,
    subheader: "DASHBOARDS",
    icon: "mdi mdi-dots-horizontal",
    href: "Dashboard",
  },
  {
    title: "Dashboard",
    icon: "pie-chart",
    href: "/dashboards/dashboard1",
  },
  {
    title: "Addon Settings",
    icon: "pie-chart",
    component: <BaseCard title="test" />,
  },
  {
    title: "Connections",
    icon: "shopping-bag",
    href: "/dashboards/dashboard2",
  },
  {
    title: "API Usages",
    icon: "shopping-bag",
    href: "/dashboards/dashboard2",
  },
  {
    navlabel: true,
    subheader: "ADDONS",
    icon: "mdi mdi-dots-horizontal",
    href: "Apps",
  },
  {
    title: "Address Autocomplete",
    icon: "message-square",
  },
  {
    title: "SMS",
    icon: "clipboard",
    href: "/notes",
  },
  {
    title: "Related List",
    icon: "inbox",
    href: "/email",
  },

  {
    title: "Layout Builder",
    icon: "calendar",
    href: "/calendar",
  },
  {
    title: "Create Record",
    icon: "calendar",
    href: "/calendar",
  },
  {
    title: "Custom Report",
    icon: "calendar",
    href: "/calendar",
  },
  {
    navlabel: true,
    subheader: "SETTINGS",
    icon: "mdi mdi-dots-horizontal",
    href: "Pages",
  },
  {
    title: "User Profile",
    icon: "user",
    href: "/user-profile",
  },
  {
    title: "Feature Request",
    icon: "feather",
    href: "/react-icons",
  },
  {
    title: "Contact Support",
    icon: "feather",
    href: "/react-icons",
  },
  {
    title: "Customers",
    icon: "users",
    href: "/customers",
    collapse: true,
    children: [
      {
        title: "Lists",
        icon: "list",
        href: "/customers/lists",
      },
      {
        title: "Edit",
        icon: "edit",
        href: "/customers/edit",
      },
    ],
  },
];
