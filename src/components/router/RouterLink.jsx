import { Link } from "react-router-dom";
import "./RouterLink.css";

const RouterLink = ({ path, classname, label, state }) => 
  <Link to={path} className={classname} state={state}>{label}</Link>

export default RouterLink;
