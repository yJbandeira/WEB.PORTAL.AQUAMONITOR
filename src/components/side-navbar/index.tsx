import "./index.scss";
import AquaLogo from "../../assets/svg/AquaMonitorLogo.svg";

export default function SideNavbar() {
  return (
    <div className="side-navbar-background">
      <img src={AquaLogo} className="aqua-logo" alt="logo" />
    </div>
  );
}
