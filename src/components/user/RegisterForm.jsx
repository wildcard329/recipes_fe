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
    console.log('user: ', user);
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <div className="form-header">
        <h4>register</h4>
        <AppButton btnLabel={"x"} classname={"icon-btn"} btnCb={formCb} />
      </div>
      <input name="username" placeholder="username" className="form-input" type="text" value={user.username} onChange={handleChange} />
      <input name="password" placeholder="password" className="form-input" type="password" value={user.password} onChange={handleChange}  />
      <input name="confirmedPassword" placeholder="confirm password" className="form-input" type="password" value={user.confirmedPassword} onChange={handleChange}  />
      <input name="email" placeholder="email" className="form-input" type="email" value={user.email} onChange={handleChange}  />
      <AppButton btnLabel={"submit"} classname={""} btnType="submit" />
    </form>
  )
}


export default RegisterForm;
