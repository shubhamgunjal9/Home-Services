import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import logo from '../../images/asy.png'
import axios from 'axios'

import './CleaningTable.css'

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
       // const url = `${URL}/user/furniture/getbyidfurniture?userId=${userId}`
        axios.get('http://localhost:7071/user/cleaning/getbyidcleaning?userId='+userId)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    // const approveBooking = (index, userId, status) => {
    //     console.log('Data to be sent to the server:', { index, userId, status });
    //     axios
    //         .post('http://localhost:7071/user/cleaning/approve', { userId, status }) // Replace with the correct API endpoint for approving bookings
    //         .then((response) => {
    //             // Handle success (e.g., show a success message)
    //             console.log('Booking approved:', response.data);
    //             alert("Successfully approved");
    //             // Update the data to indicate that this booking has been approved
    //             const updatedData = [...data];
    //             updatedData[index].approved = true;
    //             setData(updatedData);
    //             navigate("/CleaningTable");
    //         })
    //         .catch((error) => {
    //             // Handle error (e.g., show an error message)
    //             console.error('Error approving booking:', error);
    //         });
    // };
    
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
                            <th>address</th>
                            <th>rooms</th>
                            
                            <th>Mobile</th>
                            <th>date</th>
                            


                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.address}</td>
                                <td>{item.rooms}</td>
                                <td>{item.mobilenumber}</td>  
                                <td>{item.date}</td>
                               
                                
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>


        </motion.div >

    );
}