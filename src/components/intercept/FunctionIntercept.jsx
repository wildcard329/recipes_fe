import { Button } from "@mui/material";
import "./FunctionIntercept.css";

const FunctionIntercept = ({ proceedCb, cancelCb, interceptMessage }) => 
  <div className="intercept">
    <span className="danger-message">{interceptMessage}</span>
    <Button type="button" className="intercept-button" color="danger" onClick={proceedCb} variant="outlined">
      yes
    </Button>
    <Button type="button" className="intercept-button" color="secondary" onClick={cancelCb} variant="outlined">
      no
    </Button>
  </div>

export default FunctionIntercept;
