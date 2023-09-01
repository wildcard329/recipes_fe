import "./Spinner1.css";

const Spinner1 = ({ size="large" }) => 
  <div className={`spinner-1 ${size}`}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>

export default Spinner1;
