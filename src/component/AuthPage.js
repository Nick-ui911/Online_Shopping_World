import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthPage = () => {
    setIsLogin(!isLogin);
  };

  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log("Login Submitted: ", values);
    },
  });

  const registerFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log("Register Submitted: ", values);
    },
  });

  return (
    <div className="auth-container">
      {isLogin ? (
        <div className="login-page">
          <h2>Login</h2>
          <form onSubmit={loginFormik.handleSubmit}>
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                {...loginFormik.getFieldProps("email")}
              />
              <label htmlFor="floatingInput">Email address</label>
              {loginFormik.touched.email && loginFormik.errors.email ? (
                <div className="error">{loginFormik.errors.email}</div>
              ) : null}
            </div>

            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                {...loginFormik.getFieldProps("password")}
              />
              <label htmlFor="floatingPassword">Password</label>
              {loginFormik.touched.password && loginFormik.errors.password ? (
                <div className="error">{loginFormik.errors.password}</div>
              ) : null}
            </div>

            <button className="btn1" type="submit">
              Sign in
            </button>
          </form>
          <p>
            Don't have an account?{" "}
            <button className="toggle-btn" onClick={toggleAuthPage}>
              Register here
            </button>
          </p>
        </div>
      ) : (
        <div className="register-page">
          <h2>Register</h2>
          <form onSubmit={registerFormik.handleSubmit} className="register-form">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                {...registerFormik.getFieldProps("name")}
              />
              <label htmlFor="name">Name</label>
              {registerFormik.touched.name && registerFormik.errors.name ? (
                <div className="error">{registerFormik.errors.name}</div>
              ) : null}
            </div>

            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="registerEmail"
                placeholder="name@example.com"
                {...registerFormik.getFieldProps("email")}
              />
              <label htmlFor="registerEmail">Email address</label>
              {registerFormik.touched.email && registerFormik.errors.email ? (
                <div className="error">{registerFormik.errors.email}</div>
              ) : null}
            </div>

            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="registerPassword"
                placeholder="Password"
                {...registerFormik.getFieldProps("password")}
              />
              <label htmlFor="registerPassword">Password</label>
              {registerFormik.touched.password && registerFormik.errors.password ? (
                <div className="error">{registerFormik.errors.password}</div>
              ) : null}
            </div>

            <button className="register-btn" type="submit">
              Register
            </button>
          </form>
          <p>
            Already have an account?{" "}
            <button className="toggle-btn" onClick={toggleAuthPage}>
              Login here
            </button>
          </p>
        </div>
      )}
    </div>
  );
};

export default AuthPage;
