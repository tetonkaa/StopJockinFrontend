import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import axios from "axios";
import "./main.css";

export default function SignUp({ setIsLoggedIn, isLoggedIn }) {
  // state declarations
  const [formState, setFormState] = useState({
    username: "",
    password: "",
    signupCode: "",
  });

  // update the input value as a user types
  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  async function submitHandler(event) {
    event.preventDefault();
    const { data } = await axios.post(
      "https://jockloc.herokuapp.com/user/signup",
      formState
    );
    localStorage.token = data.token;
    setIsLoggedIn(true);
  }

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/comments");
    }
  }, [isLoggedIn]);

  return (
    <div className="SignUp">
      <div className="signUpForm">
        <h2>Sign Up</h2>
        <Link className="link2login" to="/login">
          Log In
        </Link>

        <form onSubmit={submitHandler}>
          <div className="input-texts">
            <label htmlFor="username">Username</label>
            <br />
            <input
              type="text"
              name="username"
              onChange={handleChange}
              value={formState.username}
            />
          </div>

          <div className="input-texts">
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={formState.password}
            />
          </div>
          <button type="submit" className="signInbutton">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
