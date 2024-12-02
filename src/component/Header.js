import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "../Style/Header.css";


function Header() {
  const [isOpen, setIsOpen] = useState(false);



  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



  const [dropdownOpen, setDropdownOpen] = useState(false);



 


  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        style={{zIndex:9999999}}
        pauseOnHover />
        
      <nav className="navbar jkhskjh">
        <div className="navbar-logo">
          <a href="/">Sukhsangam</a>
        </div>
       
             </nav>

    
    </div>
  );
}

export default Header;
