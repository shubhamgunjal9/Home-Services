import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home';
import { ToastContainer } from 'react-toastify';
import Footer from './Pages/Footer/Footer';
import Signin from './Pages/Signin/Signin';
import Signup from './Pages/SignUp/SignUp';
import { useEffect } from 'react';
import Services from './Pages/Services/Services';
import Cleaning from './Pages/Cleaning/Cleaning';
import About from './Pages/About/About';
import Furniture from './Pages/Furniture/Furniture';
import './App.css';
import Admin from './Pages/Admin/Admin';
import Bookings from './Pages/Bookings/Bookings';
import Payment from './Pages/Payment/Payment';
import Applist from './Pages/AppList/Applist';
import FurnitureTable from './Pages/FurnitureTable/FurnitureTable';
import CleaningTable from './Pages/CleaningTable/CleaningTable';

function App() {
  useEffect(() => {
    document.title = "Home-Services"; 
  }, []);
  return (
    
    <div className='root'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/Services' element={<Services/>} />
          <Route path='/aboutus' element={<About/>} />
          <Route path='/cleaning' element={<Cleaning/>} />
          <Route path='/Furniture' element={<Furniture/>} />
          <Route path='/Admin' element={<Admin/>} />
          <Route path='/Bookings' element={<Bookings/>} />
          <Route path='/Payment' element={<Payment/>} />
          <Route path='/Applist' element={<Applist/>} />
          <Route path='/FurnitureTable' element={<FurnitureTable/>} />
          <Route path='/CleaningTable' element={<CleaningTable/>} />
          <Route>404 Not Found</Route>

        </Routes>
      <Footer />
      </BrowserRouter>
      <ToastContainer position='bottom-right' theme='colored' />
    </div>
  );
}

export default App;
