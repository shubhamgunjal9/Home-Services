import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";
import logo from "../../images/asy.png";
import signupImg from "../../images/fur1.jpg";
import URL from "../URL/Url";
import "../Signin/Sign.css";
import "./Furniture.css";

export default function Furniture() {
  const scroolUp = () => {
    window.scrollTo(0, 0);
  };
  const navigate = useNavigate()
  const [address, setAddress] = useState('')
  const [mobile, setMobile] = useState('')
  const [totalLargeFurnitures, setTotalLargeFurniture] = useState('')
  const [totalMediumFurnitures, setTotalMediumFurnitures] = useState('')
  const [totalSmallFurnitures, setTotalSmallFurnitures] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [user, setUser] = useState('')
 const getSessionStorage=()=>{
    const userId=sessionStorage.getItem('currentuserId')
    return userId
 }

const curId=getSessionStorage()
  const SignUp = () => {
    navigate("/Payment");
   
      const body = {
        address,
        mobile,
        totalLargeFurnitures,
        totalMediumFurnitures,
        totalSmallFurnitures,
        zipCode,
        user:{userId:curId}
      };

      
      
      const url = `${URL}user/furniture/bookfurniture`;
      axios.post(url, body).then((response) => {
        const result = response.data;
        console.log(result);
        if (result == "entry succesfully submitted") {
          toast.success("Pay for Booking");
          navigate("/Payment");
        } else {
          toast.error(result["error"]);
        }
      });
    }

  return (
    <motion.div
      style={{ overflowX: "hidden" }}
      onLoad={scroolUp}
      className="fixedcontent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="row shadow sticky-top">
        <nav
          className="navbar navbar-expand-lg"
          style={{ backgroundColor: "black" }}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="" id="headerlogoProfile" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ backgroundColor: "white" }}
            >
              <span
                className="navbar-toggler-icon"
                style={{ backgroundColor: "grey" }}
              ></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    onClick={() => navigate("/")}
                    id="headerBtn"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => navigate("/aboutus")}
                    id="headerBtn"
                  >
                    About
                  </a>
                </li>
              </ul>
              <div className="">
                <motion.button
                  className="btn btn-primary SignButton"
                  whileHover={{
                    backgroundColor: "rgb(220, 222, 224)",
                    color: "black",
                  }}
                  whileTap={{
                    backgroundColor: "rgb(220, 222, 224)",
                    color: "black",
                  }}
                  onClick={() => navigate("/signin")}
                >
                  Sign In
                </motion.button>
              </div>
              <div className="">
                <motion.button
                  className="btn btn-primary SignButton float-start"
                  whileHover={{
                    backgroundColor: "rgb(220, 222, 224)",
                    color: "black",
                  }}
                  whileTap={{
                    backgroundColor: "rgb(220, 222, 224)",
                    color: "black",
                  }}
                  onClick={() => navigate("/signup")}
                >
                  Sign up
                </motion.button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <br />
      <div style={{ backgroundColor: "whitesmoke" }}>
        <br />
        <div
          className="container"
          style={{ backgroundColor: "white", minHeight: "500px" }}
        >
          <br />
          <center>
            <h3 className="py-5">Furniture</h3>
          </center>{" "}
          <hr />
          <div className="row">
            <div className="row">
              <center>
                <img
                  src={signupImg}
                  className="img img-fluid cleaningImg"
                  alt=""
                  style={{ marginTop: "4%" }}
                />
              </center>
            </div>
            <div className="row align-center" style={{ padding: "1rem" }}>
              <div className="form">
                <form action="JavaScript:SignUpasd()">
                  <div className="mb-3">
                    <label className="label-control ">Address </label>
                    <input
                      onChange={(e) => setAddress(e.target.value)}
                      maxLength="10"
                      minLength="10"
                      required="true"
                      type="text"
                      className="form-control shadow"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="label-control ">
                      Mobile Number(excluded postal address){" "}
                    </label>
                    <input
                      onChange={(e) => setMobile(e.target.value)}
                      required="true"
                      type="tel"
                      className="form-control shadow"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="label-control ">
                      Total large furniture{" "}
                    </label>
                    <input
                      onChange={(e) => setTotalLargeFurniture(e.target.value)}
                      required="true"
                      type="number"
                      className="form-control shadow"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="label-control ">
                      Total Medium furniture{" "}
                    </label>
                    <input
                      onChange={(e) => setTotalMediumFurnitures(e.target.value)}
                      required="true"
                      type="number"
                      className="form-control shadow"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="label-control ">
                      Total small furniture{" "}
                    </label>
                    <input
                      onChange={(e) => setTotalSmallFurnitures(e.target.value)}
                      required="true"
                      type="number"
                      className="form-control shadow"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="label-control ">Zip Code </label>
                    <input
                      onChange={(e) => setZipCode(e.target.value)}
                      required="true"
                      type="number"
                      className="form-control shadow"
                    />
                    
                  </div>
                  <div>
                    <h6 style={{ color: "grey" }}>
                      All Rights reserved with @Home-Services
                    </h6>
                  </div>
                  <div className="col">
                    <motion.button
                      className="float-end UpBtn "
                      whileHover={{
                        backgroundColor: "rgb(7, 84, 133)",
                        color: "white",
                      }}
                      onClick={SignUp}
                    >
                      Book
                    </motion.button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </motion.div>
  );
}
