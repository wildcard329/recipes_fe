import AppLogo from "../logo/AppLogo";
import HeaderLinksContainer from "./HeaderLinksContainer";
import "./header.css";

const AppHeader = () => 
  <header className="app-header">
    <AppLogo />
    <HeaderLinksContainer />
  </header>

export default AppHeader;
