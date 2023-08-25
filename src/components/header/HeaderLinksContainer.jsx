import Divider from "./Divider";
import HeaderLink from "./HeaderLink";
import HeaderLinkTrigger from "./HeaderLinkTrigger";

const recipeLinkConfig = [
  {
    path: "/recipes/user",
    classname: "header-link",
    label: "my recipes"
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

const HeaderLinksContainer = () => 
  <div className="header-links">
    <HeaderLink path={'/'} classname={'header-link'} label={'home'} />
    <Divider />
    <HeaderLinkTrigger path={"/recipes"} classname={"header-link"} label={"recipes"} linkConfigs={recipeLinkConfig} />
    <Divider />
    <HeaderLinkTrigger path={"/ingredients"} classname={"header-link"} label={"ingredients"} linkConfigs={ingredientsLinksConfig} />
    <Divider />
    <HeaderLinkTrigger path={"/login"} classname={"header-link"} label={"log in"} linkConfigs={authLinksConfig} />
  </div>

export default HeaderLinksContainer;
