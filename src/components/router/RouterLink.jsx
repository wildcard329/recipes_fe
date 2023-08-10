import { Link } from "react-router-dom";
import "./RouterLink.css";

const RouterLink = ({ path, classname, label }) => 
  <Link to={path} className={classname}>{label}</Link>

export default RouterLink;
