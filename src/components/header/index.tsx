import {
  Avatar,
  Badge,
  IconButton,
  Stack,
  SvgIcon,
  Tooltip,
} from "@mui/material";
import BellIcon from "@heroicons/react/24/solid/BellIcon";
import UsersIcon from "@heroicons/react/24/solid/UsersIcon";
import Bars3Icon from "@heroicons/react/24/solid/Bars3Icon";
import AvatarTest from "../../assets/images/AvatarTest.jpg"
import MagnifyingGlassIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";
import "./index.scss";

export default function HeaderPage() {
  return (
    <div className="header-background">
      <div className="header-left-buttons">
        <div className="header-hamburger-button">
          <IconButton>
            <SvgIcon fontSize="small">
              <Bars3Icon />
            </SvgIcon>
          </IconButton>
        </div>

        <Tooltip title="Search">
          <IconButton>
            <SvgIcon fontSize="small">
              <MagnifyingGlassIcon />
            </SvgIcon>
          </IconButton>
        </Tooltip>
      </div>

      <Stack alignItems="center" direction="row" spacing={2}>
        <Tooltip title="Contacts">
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
        </Tooltip>
        <Avatar
          //onClick={accountPopover.handleOpen}
          //ref={accountPopover.anchorRef}
          sx={{
            cursor: "pointer",
            height: 40,
            width: 40,
          }}
          src={AvatarTest}
        />
      </Stack>
    </div>
  );
}
