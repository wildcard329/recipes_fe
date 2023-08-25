import AppLogo from "../logo/AppLogo";
import HeaderLinksContainer from "./HeaderLinksContainer";
import "./header.css";

const AppHeader = () => 
  <header className="app-header spaced-apart align-flex-end">
    <AppLogo />
    <HeaderLinksContainer />
  </header>

export default AppHeader;
