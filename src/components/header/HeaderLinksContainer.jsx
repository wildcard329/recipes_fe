import { useEffect, useRef, useContext } from "react";
import { userContext } from "../../state/contexts";
import Divider from "./Divider";
import HeaderLinkTrigger from "./HeaderLinkTrigger";
import "./header.css";

const recipeLinkConfig = [
  {
    path: "/recipes/user",
    classname: "header-link",
    label: "my recipes"
  },
  {
    path: "/recipes/new",
    classname: "header-link",
    label: "new recipe",
  },
];

const ingredientsLinksConfig = [
  {
    path: "/ingredients/user",
    classname: "header-link",
    label: "my pantry"
  },
]

const HeaderLinksContainer = ({ isShowingLinks }) => {
  const linksElement = useRef();
  const { isLoggedIn } = useContext(userContext);

  useEffect(() => {
    if (isShowingLinks) {
      linksElement.current.classList.remove('mobile-hide');
    } else {
      linksElement.current.classList.add('mobile-hide');
    }
    console.log('logged in ', isLoggedIn);
  }, [isShowingLinks])
  return(
    <nav>
      <ul className="header-links" ref={linksElement}>
        <li><HeaderLinkTrigger path={'/'} classname={'header-link'} label={'home'} /></li>
        <li><Divider /></li>
        {isLoggedIn ?
          <li><HeaderLinkTrigger path={"/recipes"} classname={"header-link"} label={"recipes"} linkConfigs={recipeLinkConfig} /></li>
        :
          <li><HeaderLinkTrigger path={"/recipes"} classname={"header-link"} label={"recipes"} linkConfigs={[]} /></li>}
        <li><Divider /></li>
        {isLoggedIn ?
          <li><HeaderLinkTrigger path={"/ingredients"} classname={"header-link"} label={"ingredients"} linkConfigs={ingredientsLinksConfig} /></li>
        :
          <li><HeaderLinkTrigger path={"/ingredients"} classname={"header-link"} label={"ingredients"} linkConfigs={[]} /></li>}
        <li><Divider /></li>
        {!isLoggedIn ? 
          <li><HeaderLinkTrigger path={"/login"} classname={"header-link"} label={"log in"} /></li>
        :
          <li><HeaderLinkTrigger path={"/logout"} classname={"header-link"} label={"log out"} /></li>}
      </ul>
    </nav>
  )
}

export default HeaderLinksContainer;
