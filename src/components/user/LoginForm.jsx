import { useState, useContext } from "react";
import { AppButton } from "../button";
import { userContext } from "../../state/contexts";
import "./UserStyles.css";

const LoginForm = ({ formCb }) => {
const { loginUser } = useContext(userContext);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // network req for user
    loginUser();
    formCb();
  };

  return (
    <form onSubmit={handleSubmit} className="user-form absolute-right">
      <div className="form-header">
        <h2>login</h2>
        <AppButton btnLabel={"x"} classname={"secondary icon-btn"} btnCb={formCb} />
      </div>
      <div className="form-field">
        <label>email</label>
        <input name="email" placeholder="email" className="form-input" type="text" value={user.email} onChange={handleChange} />
      </div>
      <div className="form-field">
        <label>password</label>
        <input name="password" placeholder="password" className="form-input" type="password" value={user.password} onChange={handleChange}  />
      </div>
      <AppButton btnLabel={"submit"} classname={"primary user-submit-btn"} btnType="submit" />
    </form>
  )
}


export default LoginForm;
