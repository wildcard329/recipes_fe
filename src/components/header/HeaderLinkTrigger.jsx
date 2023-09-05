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
    <div onMouseEnter={showMenu} onMouseLeave={hideMenu} className="header-link-menu-wrapper">
      <HeaderLink path={path} classname={classname} label={label} />
      {isShowMenu ?
        <ul className="header-link-menu">
          {linkConfigs?.map((item) => <li key={item.path}><RouterLink path={item.path} classname={item.classname} label={item.label} /></li>)}
        </ul>
      :
        null
      }
    </div>
  )
}

export default HeaderLinkTrigger;
