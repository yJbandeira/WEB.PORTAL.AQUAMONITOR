import SideNavbar from "../../components/side-navbar";
import { Outlet } from "react-router-dom";
import "./index.scss";
import HeaderPage from "../../components/header";

export default function MainPage() {
  return (
    <div>
      <SideNavbar />
      <div className="main-page-content">
        <div>
          <HeaderPage />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
