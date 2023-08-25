import HeaderLink from "./HeaderLink";
import { useBool } from "../../utils/customhooks";
import { RouterLink } from "../router";

const HeaderLinkTrigger = ({ path, classname, label, linkConfigs }) => {
  const { 
    isTruthy: isShowMenu, 
    setTruthy: showMenu,
    setNotTruthy: hideMenu,
  } = useBool();
  return(
    <div onMouseEnter={showMenu} onMouseLeave={hideMenu}>
      <HeaderLink path={path} classname={classname + " pb-1"} label={label} />
      {isShowMenu ?
        linkConfigs?.map((item) => <div key={item.path} className="header-link-menu"><RouterLink path={item.path} classname={item.classname} label={item.label} /></div>)
      :
        null
      }
    </div>
  )
}

export default HeaderLinkTrigger;
