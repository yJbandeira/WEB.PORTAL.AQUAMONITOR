import {
  Avatar,
  Backdrop,
  IconButton,
  Stack,
  SvgIcon,
} from "@mui/material";
import Bars3Icon from "@heroicons/react/24/solid/Bars3Icon";
import "./index.scss";
import { useState } from "react";

export default function HeaderPage() {
  const [openBackdrop, setOpenBackdrop] = useState<boolean>(false);

  const handleOpenSideNavBar = () => {
    const navBar = document.getElementById("side-navbar-bg");

    if (navBar !== null) {
      navBar.style.display = "flex";
      navBar.style.position = "absolute";
      navBar.style.zIndex = "10";
    }

    setOpenBackdrop(true);
  };

  const handleCloseSideNavBar = () => {
    const navBar = document.getElementById("side-navbar-bg");

    if (navBar !== null) {
      navBar.style.display = "";
      navBar.style.position = "";
      navBar.style.zIndex = "";
    }

    setOpenBackdrop(false);
  };

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: 5 }}
        open={openBackdrop}
        onClick={() => handleCloseSideNavBar()}
      />
      <div className="header-background">
        <div className="header-left-buttons">
          <div className="header-hamburger-button">
            <IconButton onClick={() => handleOpenSideNavBar()}>
              <SvgIcon fontSize="small">
                <Bars3Icon />
              </SvgIcon>
            </IconButton>
          </div>

          {/* <Tooltip title="Search">
          <IconButton>
            <SvgIcon fontSize="small">
            <MagnifyingGlassIcon />
            </SvgIcon>
            </IconButton>
          </Tooltip> */}
        </div>

        <Stack alignItems="center" direction="row" spacing={2}>
          {/* <Tooltip title="Contacts">
          <IconButton>
          <SvgIcon fontSize="small">
          <UsersIcon />
          </SvgIcon>
          </IconButton>
          </Tooltip>
          <Tooltip title="Notifications">
          <IconButton>
          <Badge badgeContent={4} color="success" variant="dot">
          <SvgIcon fontSize="small">
          <BellIcon />
          </SvgIcon>
          </Badge>
          </IconButton>
        </Tooltip> */}
          <Avatar
            //onClick={accountPopover.handleOpen}
            //ref={accountPopover.anchorRef}
            sx={{
              cursor: "pointer",
              height: 40,
              width: 40,
            }}
            // src={AvatarTest}
          />
        </Stack>
      </div>
    </>
  );
}
