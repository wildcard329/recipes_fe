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
    <div className="header-links" ref={linksElement}>
      <HeaderLinkTrigger path={'/'} classname={'header-link'} label={'home'} />
      <Divider />
      <HeaderLinkTrigger path={"/recipes"} classname={"header-link"} label={"recipes"} linkConfigs={recipeLinkConfig} />
      <Divider />
      <HeaderLinkTrigger path={"/ingredients"} classname={"header-link"} label={"ingredients"} linkConfigs={ingredientsLinksConfig} />
      <Divider />
      <HeaderLinkTrigger path={"/login"} classname={"header-link"} label={"log in"} linkConfigs={authLinksConfig} />
    </div>
  )
}

export default HeaderLinksContainer;
