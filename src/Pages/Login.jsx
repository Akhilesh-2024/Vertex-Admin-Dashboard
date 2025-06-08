import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/login.css";

const Login = () => {
  const auth_username = import.meta.env.VITE_user;
  const auth_password = import.meta.env.VITE_pass;

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const auth = (e) => {
    e.preventDefault();

    if (username === auth_username && password === auth_password) {
      console.log("User Login Successfully !!");
      localStorage.setItem("isAuth", "true");
      navigate("/Homepage");
    } else {
      console.log("User Login Failed !!");
    }
  };

  return (
    <div className="container" onClick={onclick}>
      <div className="big-title">
        <div className="title-part left-part">VER</div>
        <div className="title-part right-part">TEX</div>
      </div>
      <div className="top"></div>
      <div className="bottom"></div>
      <div className="center">
        <h2>Please Login</h2>
        <form onSubmit={auth}>
          <input
            type="email"
            placeholder="email"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="btn-container">
            <button type="submit" className="login-btn">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
