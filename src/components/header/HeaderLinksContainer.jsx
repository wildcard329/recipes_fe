import { useEffect, useRef } from "react";
import Divider from "./Divider";
import HeaderLink from "./HeaderLink";
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

const authLinksConfig = [
  {
    path: "/register",
    classname: "header-link",
    label: "sign up"
  },
]

const HeaderLinksContainer = ({ isShowingLinks }) => {
  const linksElement = useRef();

  useEffect(() => {
    if (isShowingLinks) {
      linksElement.current.classList.remove('mobile-hide');
    } else {
      linksElement.current.classList.add('mobile-hide');
    }
  }, [isShowingLinks])
  return(
    <nav>
      <ul className="header-links" ref={linksElement}>
        <li><HeaderLinkTrigger path={'/'} classname={'header-link'} label={'home'} /></li>
        <li><Divider /></li>
        <li><HeaderLinkTrigger path={"/recipes"} classname={"header-link"} label={"recipes"} linkConfigs={recipeLinkConfig} /></li>
        <li><Divider /></li>
        <li><HeaderLinkTrigger path={"/ingredients"} classname={"header-link"} label={"ingredients"} linkConfigs={ingredientsLinksConfig} /></li>
        <li><Divider /></li>
        <li><HeaderLinkTrigger path={"/login"} classname={"header-link"} label={"log in"} linkConfigs={authLinksConfig} /></li>
      </ul>
    </nav>
  )
}

export default HeaderLinksContainer;
