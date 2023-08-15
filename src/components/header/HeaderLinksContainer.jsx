import HeaderLink from "./HeaderLink";

const HeaderLinksContainer = () => 
  <div className="header-links">
    <HeaderLink path={'/'} classname={'header-link'} label={'home'} />
    <HeaderLink path={"/recipes"} classname={"header-link"} label={"recipes"} />
    <HeaderLink path={"/recipe/1"} classname={"header-link"} label={"recipe"} />
  </div>

export default HeaderLinksContainer;
