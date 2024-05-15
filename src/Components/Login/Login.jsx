import logo from "../../assets/9829 2.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Login() {
  let navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        let { data } = await axios.post(
          "https://a2z-render.onrender.com/user/login",
          {
            email: values.email,
            password: values.password,
          }
        );
        if (data.message === "Login done") {
          setErrorMessage(null);
          setIsLoading(false);
          formik.resetForm();
          navigate("/layout2");
        }
      } catch (error) {
        setErrorMessage(error.response.data.message);
        setIsLoading(false);
      }
    },
  });


  const { email, password } = formik.values;
  const { errors, touched } = formik;

  return (
    <div className="loginStyle">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <img className="navbar-brand" src={logo} alt="" height={100} />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item style-link">
                <Link className="nav-link main-text" to="">
                  Login
                </Link>
              </li>
              <li className="nav-item style-link">
                <Link className="nav-link main-text bg-white " to="/signup">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container ">
        <div className="content  text-center ">
          <h3 className="text-white">Welcome!</h3>
          <p className="text-white  ">
            Turn your room with A2Z into a lot more minimalist <br /> and modern
            with ease and speed
          </p>
        </div>
      </div>
      <div className="card shadow-sm py-4 mx-auto px-3 mb-3">
        <div className=" bg-transparent border-0 text-center font-weight-bold">
          <h5>Log in with</h5>
        </div>
        <div className="card-body">
          {errorMessage !== null ? (
            <div className="alert alert-danger mt-2">{errorMessage}</div>
          ) : (
            ""
          )}
        

          <form
            action="/"
            onSubmit={formik.handleSubmit}
            encType="multipart/form-data"
            autoComplete="off"
          >
            <div className="form-group">
              <div className="text-center mb-3">
                <button
                  type="button"
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className="btn   btn-floating "
                >
                  <i className="fab icon-btn fa-facebook-f btn-dark"></i>
                </button>
                <button
                  type="button"
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className="btn   btn-floating"
                >
                  <i className="fab fa-google btn-dark icon-btn "></i>
                </button>
                <button
                  type="button"
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className="btn   btn-floating "
                >
                  <i className="fab fa-github btn-dark icon-btn"></i>
                </button>
                <h5
                  className="text-center mb-3 mt-3"
                  style={{ color: "#C4C4C4" }}
                >
                  or
                </h5>
              </div>
            </div>
            <div className="form-group">
              <label className="mb-0">Email</label>
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {errors.email && touched.email ? (
                <div className="alert alert-danger mt-2">{errors.email}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label className="mb-0">Password</label>
              <input
                name="password"
                type="password"
                className="form-control mb-3 "
                placeholder="Password"
                value={password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {errors.password && touched.password ? (
                <div className="alert alert-danger mt-2">{errors.password}</div>
              ) : null}
            </div>

            {isLoading ? (
              <button className="btn btn-dark btn-log mb-2" disabled>
                <i className="fa-solid fa-spinner fa-spin"></i> Logging in...
              </button>
            ) : (
              <button type="submit" className="btn btn-dark btn-log mb-2">
                Log In
              </button>
            )}

            

            <p className="text-center bbb" style={{ color: "#C4C4C4" }}>
              Don't have an account?{" "}
              <Link
                className="link font-weight-bold"
                to="/signup"
                style={{ color: "#070F2B", fontWeight: "bold" }}
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
