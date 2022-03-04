import React from "react";
import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import "./SignUp.css";

import logo from "./assets/bg.jpg";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import Login from "../login/Login";
// import { useNavigate } from "react-router-dom";

const SignUp = () => {
  //   let navigate = useNavigate();
  const paperStyle = { padding: "50px 30px", width: 500, margin: "70px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "green" };
  const buttonStyle = { margin: "20px auto", backgroundColor: "green" };
  const textStyle = { margin: "20px auto" };
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Required"),
    email: Yup.string().email("Please enter valid email").required("Required"),
    password: Yup.string().required("Required"),
  });

  async function fetchAPI(dataValues) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: dataValues.username,
        email: dataValues.email,
        password: dataValues.password,
      }),
    };
    console.log("called fetch");
    const response = await fetch(
      "http://localhost:5000/signup/adduser",
      requestOptions
    );
    const respData = await response.json();
    console.log("resp::", respData);
    if (respData) {
      console.log("goin to navigate::");
      //   navigate("");
    }
  }

  const onSubmit = (values, props) => {
    console.log(values);
    fetchAPI(values);
    props.resetForm();
    console.log(props);
  };

  return (
    <div>
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}></Avatar>
            <h1 style={headerStyle}>Sign Up</h1>
            <Typography variant="caption" gutterBottom>
              Please fill this form to create an account !
            </Typography>
          </Grid>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {(props) => (
              <Form>
                <Field
                  as={TextField}
                  label="Name"
                  name="username"
                  fullWidth
                  placeholder="Enter your name"
                  style={textStyle}
                  helperText={<ErrorMessage name="username" />}
                  required
                  
                />
                <Field
                  as={TextField}
                  label="Email"
                  name="email"
                  fullWidth
                  placeholder="Enter your email"
                  style={textStyle}
                  helperText={<ErrorMessage name="email" />}
                  required
                />
                <Field
                  as={TextField}
                  label="Password"
                  name="password"
                  fullWidth
                  placeholder="Enter your password"
                  type="password"
                  helperText={<ErrorMessage name="password" />}
                  style={textStyle}
                  required
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  style={buttonStyle}
                >
                  Sign Up
                </Button>
              </Form>
            )}
          </Formik>
          {/* <form>
                        <TextField label='Name' fullWidth placeholder='Enter your name' style={textStyle} />
                                    <TextField label='Email' fullWidth placeholder='Enter your email' style={textStyle} />
                                    <TextField label='Password' fullWidth placeholder='Enter your password' type='password' style={textStyle} />
                                    <Button type='submit' fullWidth variant='contained' color='primary' style={buttonStyle} >Sign Up</Button>
                            
                        </form> */}
        </Paper>
      </Grid>
    </div>
  );
};

export default SignUp;
