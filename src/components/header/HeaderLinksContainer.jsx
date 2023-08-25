import HeaderLink from "./HeaderLink";

const HeaderLinksContainer = () => 
  <div className="header-links">
    <HeaderLink path={'/'} classname={'header-link'} label={'home'} />
    <HeaderLink path={"/recipes"} classname={"header-link"} label={"recipes"} />
    <HeaderLink path={"/recipes"} classname={"header-link"} label={"my recipes"} />
    <HeaderLink path={"/ingredients"} classname={"header-link"} label={"my pantry"} />
    <HeaderLink path={"/login"} classname={"header-link"} label={"log in"} />
  </div>

export default HeaderLinksContainer;
