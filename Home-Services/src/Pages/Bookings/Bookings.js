import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import logo from '../../images/asy.png';
import axios from 'axios';

import './booking.css';

export default function Bookings() {
    const scroolUp = () => {
        window.scrollTo(0, 0);
    };
    const navigate = useNavigate();

    const ask = () => {
        navigate('/Admin');
    };

    const logout = () => {
        toast.error('Logging Off');
        alert('Logging off');
        navigate('/');
    };
   

    const setSessionFurniture = (item) => {
        sessionStorage.setItem('userId', item.userId); // Use item.userId
        navigate('/Furnituretable');
      };
      
      const setSessionCleaning = (item) => {
        sessionStorage.setItem('userId', item.userId); // Use item.userId
        navigate('/CleaningTable');
      };
      
      

    const [data, setData] = useState([]);
    const [userId, setUserId] = useState('')
    useEffect(() => {
        // Fetch initial data, including the 'approved' status for each booking
        axios
            .get('http://localhost:7071/user/getall')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (

        <motion.div
            style={{ overflowX: 'hidden' }}
            onLoad={scroolUp}
            className="fixedcontent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            {/* ... Your navigation bar code ... */}

            <div style={{ overflowX: "hidden" }}>
                <div >
                    <div >
                        <div className="row shadow sticky-top"  >
                            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "black" }}>
                                <div className="container-fluid">
                                    <a className="navbar-brand" href='/Admin'><img src={logo} alt="" id='headerlogoProfile' /></a>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ backgroundColor: "white" }}>
                                        <span className="navbar-toggler-icon" style={{ backgroundColor: "grey" }}></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li className="nav-item">
                                                <a className="nav-link active" aria-current="page" onClick={() => (navigate('/Admin'))} id='headerBtn'>Home</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link active" aria-current="page" onClick={() => (navigate('/Bookings'))} id='headerBtn'>Booking</a>
                                            </li>
                                            <li>

                                            </li>
                                        </ul>
                                        <div className=''>
                                            <motion.button className='btn btn-primary SignButton'
                                                whileHover={{ backgroundColor: "rgb(220, 222, 224)", color: "black" }}
                                                whileTap={{ backgroundColor: "rgb(220, 222, 224)", color: "black" }}
                                                onClick={() => (logout())}
                                            >Logout</motion.button>
                                        </div>
                                        {/* <div className=''>
                    <motion.button className='btn btn-primary SignButton float-start'
                      whileHover={{ backgroundColor: "rgb(220, 222, 224)", color: "black" }}
                      whileTap={{ backgroundColor: "rgb(220, 222, 224)", color: "black" }}
                      onClick={() => (navigate('/signup'))}
                    >Sign up</motion.button>
                  </div> */}

                                    </div>
                                </div>
                            </nav>
                        </div >
                    </div >

                </div>
                <br />
                <br />
            </div>

            <div className='container text-center my-5'>
                <h2 className='py-2'>Booking Details</h2>
                <table className="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First</th>
                            <th>Email-Id</th>
                            <th>Last Name</th>
                            <th>Actions</th>


                        </tr>
                    </thead>
                    <tbody>
                    {data.map((item, index) => (
  <tr key={item.id}>
    <td>{item.userId}</td>
    <td>{item.firstName}</td>
    <td>{item.email}</td>
    <td>{item.lastName}</td>
    <td>
    <a
  className='btn btn-primary mx-2'
  onClick={() => {
    setSessionCleaning(item);
  }}
>
  Cleaning
</a>
<a
  className='btn btn-primary'
  onClick={() => {
    setSessionFurniture(item);
  }}
>
  Furniture
</a>


    </td>
  </tr>
))}

                    </tbody>

                </table>
            </div >
        </motion.div >
    );
}
