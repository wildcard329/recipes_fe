import { useEffect } from "react";
import { Link } from "react-router-dom";
import AppLogo from "../logo/AppLogo";
import HeaderLinksContainer from "./HeaderLinksContainer";
import { RxHamburgerMenu } from "react-icons/rx";
import { useBool, useReactRouter } from "../../utils/customhooks";
import "./header.css";

const AppHeader = () => {
  const {
    isTruthy: isShowingLinks,
    setTruthy: showLinks,
    setNotTruthy: hideLinks,
  } = useBool();
  const { routerPath } = useReactRouter();

  const handleMenu = () => isShowingLinks ? hideLinks() : showLinks();

  useEffect(() => {
    hideLinks();
  }, [routerPath]);

  return(
    <header className="app-header">
      <div className="logo-container">
        <Link to="/">
          <AppLogo />
        </Link>
        <RxHamburgerMenu className="hamburger-icon" onClick={handleMenu} />
      </div>
      <HeaderLinksContainer isShowingLinks={isShowingLinks} />
    </header>
  )
}

export default AppHeader;
