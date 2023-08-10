import "./AppButton.css";

const AppButton = ({ btnCb, btnLabel, classname, btnType="button" }) =>
  <button 
    onClick={btnCb}
    type={btnType}
    className={classname}
  >
    {btnLabel}
  </button>

export default AppButton;
