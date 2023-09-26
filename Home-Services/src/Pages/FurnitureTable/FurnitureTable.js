import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import logo from '../../images/asy.png'
import axios from 'axios'

import './FurnitureTable.css'

export default function FurnitureTable() {
    const scroolUp = () => {
        window.scrollTo(0, 0)
    }
    const navigate = useNavigate()
    const ask = () => {

        navigate("/Admin");

    };
    const getSessionStorage = () => {
        const userId = sessionStorage.getItem('userId')
        return userId
    }
    const [data, setData] = useState([])
    useEffect(() => {
        // Fetch initial data, including the 'approved' status for each booking
        const userId = getSessionStorage()
        console.log(userId)
    //    const url = `${URL}/user/furniture/getbyidfurniture?userId=${userId}`
        axios.get('http://localhost:7071/user/furniture/getbyidfurniture?userId='+userId)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);


    const logout = () => {
        toast.error("Logging Off")
        alert("Logging off");
        navigate("/");
    };
    const [approved, setApproved] = useState(false);
    const handleApprove = () => {
        setApproved(true);
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
                        <a className="navbar-brand" href='/Admin'
                        ><img src={logo} alt="" id='headerlogoProfile' /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ backgroundColor: "white" }}>
                            <span className="navbar-toggler-icon" style={{ backgroundColor: "grey" }}></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" onClick={() => (ask())} id='headerBtn'>Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" onClick={() => (navigate('/Bookings'))} id='headerBtn'>Booking</a>
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

            <div className='container text-center my-5'>
                <h2 className='py-2'>Booking Details</h2>
                <table className="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Address</th>
                            <th>Zipcode</th>
                            <th>S-furniture</th>
                            <th>M-furniture</th>
                            <th>L-furniture</th>
                            <th>Mobile</th>
                          


                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.address}</td>
                                <td>{item.zipCode}</td>
                                <td>{item.totalSmallFurnitures}</td>
                                <td>{item.totalMediumFurnitures}</td>
                                <td>{item.totalLargeFurnitures}</td>
                                <td>{item.mobile}</td>
                               
                                
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>


        </motion.div >

    );
}