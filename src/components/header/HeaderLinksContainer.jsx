import HeaderLink from "./HeaderLink";

const HeaderLinksContainer = () => 
  <div className="header-links">
    <HeaderLink path={'/'} classname={'header-link'} label={'home'} />
    <HeaderLink path={"/recipes"} classname={"header-link"} label={"recipes"} />
  </div>

export default HeaderLinksContainer;
