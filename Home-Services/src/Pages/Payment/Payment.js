import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import logo from '../../images/asy.png'


import './Payment.css'

export default function Payment() {
    const scroolUp = () => {
        window.scrollTo(0, 0)
    }
    const navigate = useNavigate()
    const ask = () => {

        navigate("/Admin");

    };

    const logout = () => {
        toast.error("Logging Off")
        alert("Logging off");
        navigate("/");
    };
    const [approved, setApproved] = useState(false);
    const handleApprove = () => {
        setApproved(true);
    };
    const toastt = () => {
        toast.success("Booking Successfully")
        navigate("/")
    };
    const handleDateChange = (e) => {
        const inputDate = e.target.value;
        const date = new Date(inputDate);
        const month = date.getMonth() + 1; // Months are zero-based, so add 1
        const year = date.getFullYear();

        // Create a new date format (MM/YYYY)
        const formattedDate = `${month}/${year}`;

        // Set the formatted date back to the input field
        e.target.value = formattedDate;
        
    };
    return (
        <motion.div style={{ overflowX: "hidden" }} onLoad={scroolUp} className='fixedcontent'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <div className="row shadow sticky-top"  >
                <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "black" }}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href='/'
                        ><img src={logo} alt="" id='headerlogoProfile' /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ backgroundColor: "white" }}>
                            <span className="navbar-toggler-icon" style={{ backgroundColor: "grey" }}></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" onClick={() => (navigate('/'))} id='headerBtn'>Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" onClick={() => (navigate('/aboutus'))} id='headerBtn'>About</a>
                                </li>

                            </ul>
                            <div className=''>
                                <motion.button className='btn btn-primary SignButton'
                                    whileHover={{ backgroundColor: "rgb(220, 222, 224)", color: "black" }}
                                    whileTap={{ backgroundColor: "rgb(220, 222, 224)", color: "black" }}
                                    onClick={() => (logout())}
                                >Logout</motion.button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div >
            <br />
            <br></br>
            <br />
            <br />

            <div className='container aling-center'>
                <div className='row'>
                    <div className='col-sm-4'></div>
                    <div className='col-sm-4'>
                        <div className='card'>
                            <div className='card-header'>
                                <div className='row'>
                                    <div className='col sm-4'>
                                    <h1>Payment</h1>
                                    </div>
                                    <div className='col sm-4'>
                                    
                                    </div>
                                    <div className='col py-3'>
                                    <span>RS.1005.00</span>
                                    </div>
                                </div>
                                
                            </div>
                            <div className='card-body'>
                                <form>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Cardholder Name</label>
                                        <input type="text" className="form-control"  />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Card Number</label>
                                        <input type="number" className="form-control" />
                                    </div>
                                    <div class="mb-3">
                                        <div className='row'>
                                            <div className="col">
                                                <label for="exampleInputPassword1" className="form-label">
                                                    Expiration Date (MM/YYYY)
                                                </label>
                                                <input
                                                    type="month"
                                                    className="form-control"
                                                    onChange={handleDateChange}
                                                />
                                            </div>
                                            <div className='col'>
                                                <label for="exampleInputPassword1" class="form-label">CVV</label>
                                                <input type="number" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <a  onClick={()=>(toastt())} class="btn btn-success w-100">Book Now</a>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-4'></div>
                </div>
            </div>
        </motion.div>

    );
}