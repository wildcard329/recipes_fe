import "./AppButton.css";

const AppButton = ({ btnCb, btnLabel, classname, btnType="button", btnIcon=null }) =>
  <button 
    onClick={btnCb}
    type={btnType}
    className={classname}
  >
    {btnIcon ? btnIcon : null}
    {btnLabel}
  </button>

export default AppButton;
