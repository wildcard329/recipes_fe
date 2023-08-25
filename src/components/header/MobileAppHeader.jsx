import { useEffect } from "react";
import { useBool, useReactRouter } from "../../utils/customhooks";
import { AppButton } from "../button";
import AppLogo from "../logo/AppLogo";
import HeaderLinksContainer from "./HeaderLinksContainer";
import "./header.css";

const MobileAppHeader = () => {
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
    <header className="mobile-app-header">
      <AppButton btnCb={handleMenu} btnLabel={<AppLogo />} classname={"img-btn"} />
      {
        isShowingLinks ?
          <HeaderLinksContainer />
        : null
      }
    </header>
  )
}

export default MobileAppHeader;
