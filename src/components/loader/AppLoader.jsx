import "./loader.css";

const AppLoader = ({ size="large" }) => 
  <div className={`loader ${size}`}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>

export default AppLoader;
