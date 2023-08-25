import AppLogo from "../logo/AppLogo";
import HeaderLinksContainer from "./HeaderLinksContainer";
import HeaderMenu from "./HeaderMenu";
import "./header.css";

const AppHeader = () => 
  <header className="app-header spaced-apart">
    <AppLogo />
    <HeaderLinksContainer />
    {/* <HeaderMenu /> */}
  </header>

export default AppHeader;
