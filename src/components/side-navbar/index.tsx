import "./index.scss";
import { ReactComponent as AquaLogo } from "../../assets/svg/AquaMonitorLogo.svg";
import { Box, Divider, Stack } from "@mui/material";
import { items } from "./config";
import SideNavItem from "./side-navbar-item";

export default function SideNavbar() {
  return (
    <div id="side-navbar-bg" className="side-navbar-background">
      <div className="side-navbar-header">
        <AquaLogo />
      </div>
      <Divider sx={{ borderColor: "rgb(47, 55, 70)" }} />

      <Box
        component="nav"
        sx={{
          flexGrow: 1,
          px: 2,
          py: 3,
        }}
      >
        <Stack
          component="ul"
          spacing={0.5}
          sx={{
            listStyle: "none",
            p: 0,
            m: 0,
          }}
        >
          {items.map((item, index) => {
            return (
              <div key={`nav-${index}`}>
                <SideNavItem
                  title={item.title}
                  active={item.active}
                  disabled={item.disable}
                  icon={item.icon}
                  innerKey={`nav-item-${index}`}
                />
              </div>
            );
          })}
        </Stack>
      </Box>
    </div>
  );
}
