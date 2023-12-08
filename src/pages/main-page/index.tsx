import SideNavbar from "../../components/side-navbar";
import { Outlet } from "react-router-dom";
import "./index.scss";
import HeaderPage from "../../components/header";
import { useStore } from "../../store/store";
import { Backdrop, CircularProgress } from "@mui/material";

export default function MainPage() {
  const { loading } = useStore();

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <div>
        <SideNavbar />
        <div className="main-page-content">
          <div>
            <HeaderPage />
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
