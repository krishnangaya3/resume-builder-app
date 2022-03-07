import React, { useState, useEffect } from "react";
import "./SignIn.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components";
const SignIn = (props) => {
  let navigate = useNavigate();
  let [login, SetLogin] = useState([]);
  const [formValues, setFormValues] = useState({ username: "", password: "" });
  const [formErrorValues, setFormErrorValues] = useState(null);

  const handleChange = (event) => {
    console.log(event.target);
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  function authenticate() {
    fetchAPI();
  }

  async function fetchAPI() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: formValues.username,
        password: formValues.password,
      }),
    };
    console.log("called fetch");
    const response = await fetch(
      "http://localhost:5000/login/verifyuser",
      requestOptions
    );
    const respData = await response.json();
    console.log("resp::", respData);
    if (respData) {
      console.log("goin to navigate::");
      navigate("/create");
    } else {
      alert("Invalid Username or Password");
      setFormErrorValues("Invalid credentials!!");
    }
  }

  const clicked = (event) => {
    navigate("/signup", { replace: true });
  };
  return (
   
    <div className="signinContainer">
      <Navbar />
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form className="signin" onSubmit={clicked}>
        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input
          type="text"
          name="username"
          placeholder="username"
          id="username"
          onChange={handleChange}
          value={formValues.username}
        />

        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
          value={formValues.password}
        />

        <button onClick={authenticate}>Log In</button>
        <p className="error">{formErrorValues}</p>
        <label>Not Registered?</label>
        <button onClick={clicked}>Sign Up Here!!!!</button>
      </form>
    </div>
  );
};

export default SignIn;
