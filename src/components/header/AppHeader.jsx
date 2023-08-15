import HeaderLinksContainer from "./HeaderLinksContainer";
import HeaderMenu from "./HeaderMenu";
import "./header.css";

const AppHeader = () => 
  <header className="app-header spaced-apart">
    <HeaderLinksContainer />
    <HeaderMenu />
  </header>

export default AppHeader;
