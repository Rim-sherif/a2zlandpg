import logo from "../../assets/9829 2.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";



export default function Signup() {
  let navigate = useNavigate()

  const [authError, setAuthError] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading , setisLoading] = useState(false)
  

  const validationSchema = Yup.object().shape({
    userName: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
    Repass: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      Repass: "",
     
    },
   
    validationSchema,

    onSubmit: async (values) => {
      try {
        const response = await axios.post("https://a2z-render.onrender.com/user",{
            userName: values.userName,
            email: values.email,
            password: values.password,
            Repass: values.Repass,
          },
           setisLoading(true)
        );
        if (response.data.message === 'Done') {
          setisLoading(false)
          navigate('/login')
          setAuthError(false);
          setFormSubmitted(true);
          console.log(response)
        } else {
          setAuthError(true);
          setFormSubmitted(true);
          console.log(response)
        }
      } catch (error) {
        setAuthError(true);
        setFormSubmitted(true);
        console.log(error)
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
                <Link className="nav-link main-text" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item style-link">
                <Link className="nav-link main-text bg-white " to="#">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="card shadow-sm py-4 mx-auto px-3 mb-3">
        <div className=" bg-transparent border-0 text-center font-weight-bold">
          <h5>Register with</h5>
        </div>
        <div className="card-body">
          {!authError && formSubmitted ? (
            <div className="alert alert-success mt-2">
              You are Signed Up in successfully.
            </div>
          ) : (
            ""
          )}
          {authError && formSubmitted ? (
            <div className="alert alert-danger mt-2">
              Email ALready Exsist.
            </div>
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
              <label className="mb-0">Name</label>
              <input
                name="userName"
                type="text"
                className="form-control"
                placeholder="Name"
                value={formik.values.userName}
                onChange={formik.handleChange}
              />
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
                className="form-control "
                placeholder="Password"
                value={password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {errors.password && touched.password ? (
                <div className="alert alert-danger mt-2">{errors.password}</div>
              ) : null}
            </div>
            <div className="form-group mb-3">
              <label className="mb-0">Re-enter Password</label>
              <input
                name="Repass"
                type="password"
                className="form-control"
                placeholder="Re-enter Password"
                value={formik.values.Repass}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {errors.Repass && touched.Repass ? (
                <div className="alert alert-danger mt-2">{errors.Repass}</div>
              ) : null}
            </div>
            {/* <div className="form-group">
              <label className="">Select Account Type</label>
              <select
                name="accountType"
                className="form-control mb-4"
                value={accountType}
                onChange={formik.handleChange}
              >
                <option value="user">User</option>
                <option value="engineer">Engineer</option>
              </select>
            </div> */}
            {isLoading?
             <button className="btn btn-dark btn-log"><i className="fa-solid fa-spinner fa-spin"></i></button>
            :
            <p className="">
            <input
              type="submit"
              className="btn btn-dark btn-log "
              value="Signup"
            />
          </p>
         
            }
            
            <p className="text-center bbb" style={{ color: "#C4C4C4" }}>
              Do you have an account?{" "}
              <Link
                className="link font-weight-bold"
                to="/login"
                style={{ color: "#070F2B", fontWeight: "bold" }}
              >
                sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
