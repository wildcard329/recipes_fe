import { useState } from "react";
import { AppButton } from "../button";
import "./UserStyles.css";

const LoginForm = ({ formCb }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // network req for user
    formCb();
    console.log('user: ', user);
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <div className="form-header">
        <h4>login</h4>
        <AppButton btnLabel={"x"} classname={"icon-btn"} btnCb={formCb} />
      </div>
      <div className="form-field">
        <label>username</label>
        <input name="username" placeholder="username" className="form-input" type="text" value={user.username} onChange={handleChange} />
      </div>
      <div className="form-field">
        <label>password</label>
        <input name="password" placeholder="password" className="form-input" type="password" value={user.password} onChange={handleChange}  />
      </div>
      <AppButton btnLabel={"submit"} classname={"user-submit-btn"} btnType="submit" />
    </form>
  )
}


export default LoginForm;
