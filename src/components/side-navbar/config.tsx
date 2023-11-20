import UserIcon from "@heroicons/react/24/solid/UserIcon";
import ChartBarIcon from "@heroicons/react/24/solid/ChartBarIcon";
import { SvgIcon } from "@mui/material";

export const items = [
  {
    title: "Dashboard",
    path: "/dashboard",
    disable: false,
    active: true,
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Clientes",
    path: "/dashboard",
    disable: false,
    active: false,
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    ),
  },
];
