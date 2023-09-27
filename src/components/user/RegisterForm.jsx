import { useState } from "react";
import { AppButton } from "../button";
import "./UserStyles.css";

const RegisterForm = ({ formCb }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    confirmedPassword: "",
    email: "",
  });

  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // network req for user
    formCb();
  };

  return (
    <form onSubmit={handleSubmit} className="user-form absolute-right">
      <div className="form-header">
        <h2>register</h2>
        <AppButton btnLabel={"x"} classname={"secondary icon-btn"} btnCb={formCb} />
      </div>
      <div className="form-field">
        <label>username</label>
        <input name="username" placeholder="username" className="form-input" type="text" value={user.username} onChange={handleChange} />
      </div>
      <div className="form-field">
        <label>password</label>
        <input name="password" placeholder="password" className="form-input" type="password" value={user.password} onChange={handleChange}  />
      </div>
      <div className="form-field">
        <label>confirm password</label>
        <input name="confirmedPassword" placeholder="confirm password" className="form-input" type="password" value={user.confirmedPassword} onChange={handleChange}  />
      </div>
      <div className="form-field">
        <label>email</label>
        <input name="email" placeholder="email" className="form-input" type="email" value={user.email} onChange={handleChange}  />
      </div>
      <AppButton btnLabel={"submit"} classname={"primary user-submit-btn"} btnType="submit" />
    </form>
  )
}


export default RegisterForm;
