import { useEffect, useRef, useContext } from "react";
import { userContext } from "../../state/contexts";
import Divider from "./Divider";
import HeaderLinkTrigger from "./HeaderLinkTrigger";
import "./header.css";

const unAuthRecipeLinkConfig = [
  {
    path: "/recipes",
    classname: "header-link sub-link",
    label: "all recipes"
  },
]

const recipeLinkConfig = [
  {
    path: "/recipes",
    classname: "header-link sub-link",
    label: "all recipes"
  },
  {
    path: "/recipes/new",
    classname: "header-link sub-link",
    label: "new recipe",
  },
];

const unAuthIngredientsLinksConfig = [
  {
    path: "/ingredients",
    classname: "header-link sub-link",
    label: "all ingredients"
  },
];

const ingredientsLinksConfig = [
  {
    path: "/ingredients",
    classname: "header-link sub-link",
    label: "all ingredients"
  },
]

const authUserLinksConfig = [
  {
    path: "/logout",
    classname: "header-link sub-link",
    label: "logout",
  },
]

const HeaderLinksContainer = ({ isShowingLinks }) => {
  const linksElement = useRef();
  const { isLoggedIn, user } = useContext(userContext);

  useEffect(() => {
    if (isLoggedIn) {
      const profileLinkConfig = {
        path: `/user/${user?.username}/profile`,
        classname: "header-link sub-link",
        label: "profile",
      };
      const pantryLinkConfig = {
        path: `/ingredients/${user?.username}`,
        classname: "header-link sub-link",
        label: "my pantry"
      };
      const userRecipeConfig = {
        path: `/recipes/${user?.username}`,
        classname: "header-link sub-link",
        label: "my recipes"
      };
      authUserLinksConfig.unshift(profileLinkConfig);
      ingredientsLinksConfig.push(pantryLinkConfig);
      recipeLinkConfig.push(userRecipeConfig);
    };
  }, [isLoggedIn]); 

  useEffect(() => {
    if (isShowingLinks) {
      linksElement.current.classList.remove('mobile-hide');
    } else {
      linksElement.current.classList.add('mobile-hide');
    }
  }, [isShowingLinks]);

  return(
    <nav>
      <ul className="header-links" ref={linksElement}>
        <li><HeaderLinkTrigger path={'/'} classname={'header-link'} label={'home'} /></li>
        <li><Divider /></li>
        {isLoggedIn ?
          <>
            <li><HeaderLinkTrigger path={"/recipes"} classname={"header-link"} label={"recipes"} linkConfigs={recipeLinkConfig} /></li>
            <li className="desktop-hide"><Divider /></li>
            <li className="desktop-hide"><HeaderLinkTrigger path={"/recipes/:user"} classname={"header-link-mobile"} label={"my recipes"} /></li>
            <li className="desktop-hide"><Divider /></li>
            <li className="desktop-hide"><HeaderLinkTrigger path={"/recipes/new"} classname={"header-link-mobile"} label={"new recipe"} /></li>
          </>

        :
          <li><HeaderLinkTrigger path={"/recipes"} classname={"header-link"} label={"recipes"} linkConfigs={unAuthRecipeLinkConfig} /></li>}
        <li><Divider /></li>
        {isLoggedIn ?
          <>
            <li><HeaderLinkTrigger path={"/ingredients"} classname={"header-link"} label={"ingredients"} linkConfigs={ingredientsLinksConfig} /></li>
            <li className="desktop-hide"><Divider /></li>
            <li className="desktop-hide"><HeaderLinkTrigger path={"/ingredients/:user"} classname={"header-link-mobile"} label={"my pantry"} /></li>
          </>
        :
          <li><HeaderLinkTrigger path={"/ingredients"} classname={"header-link"} label={"ingredients"} linkConfigs={unAuthIngredientsLinksConfig} /></li>}
          <li><Divider /></li>
        {!isLoggedIn ? 
          <li><HeaderLinkTrigger path={"/login"} classname={"header-link"} label={"log in"} /></li>
        :
          <>
            <li><HeaderLinkTrigger path={`/user/${user?.username}/profile`} classname={"header-link"} label={"profile"} linkConfigs={authUserLinksConfig} /></li>
            <li className="desktop-hide"><Divider /></li>
            <li className="desktop-hide"><HeaderLinkTrigger path={"/logout"} classname={"header-link"} label={"log out"} /></li>
          </>}
      </ul>
    </nav>
  )
}

export default HeaderLinksContainer;
