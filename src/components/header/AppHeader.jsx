import "./header.css";
import HeaderLinksContainer from "./HeaderLinksContainer";
import HeaderMenu from "./HeaderMenu";

const AppHeader = () => 
  <header className="app-header">
    <HeaderLinksContainer />
    <HeaderMenu />
  </header>

export default AppHeader;
