import "./SubHeaderLinks.css";

const SubHeaderLinks = ({ navLinks }) => 
  <ul className="sub-header-list">
    {navLinks.map((link) => 
      <li key={link.navId} className="sub-header-item">
        <a className="sub-header-link" href={`#${link.navLink}`}>{link.navLabel}</a>
    </li>)}
  </ul>

export default SubHeaderLinks;
