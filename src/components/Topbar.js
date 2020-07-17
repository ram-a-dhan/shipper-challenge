import React from 'react';
import { FaUserCircle, FaBell, FaPhoneAlt } from 'react-icons/fa';
import './Topbar.css';

export default function Topbar() {
  return (
    <div className="Topbar">
      <div className="TopbarContainer d-flex flex-row-flex-nowrap justify-content-between align-items-center px-1">
        {/* eslint-disable-next-line */}
        <a href="#">
          <img src="./ShipperLogo.png" alt="Shipper" className="ShipperLogo mx-2" />
        </a>
        <div className="UserMenu d-flex flex-row-flex-nowrap justify-content-center align-items-center">
          {/* eslint-disable-next-line */}
          <a href="#">
            <FaPhoneAlt className="mx-2" size="2.5vh" color="#405060" />
          </a>
          {/* eslint-disable-next-line */}
          <a href="#">
            <FaBell className="mx-2" size="2.5vh" color="#405060" />
          </a>
          {/* eslint-disable-next-line */}
          <a href="#" className="d-flex flex-row-flex-nowrap justify-content-center align-items-center">
            <p className="UserName mx-2 mb-0 text-center text-secondary">Hello, <span className="text-primary">John Smith</span></p>
            <FaUserCircle className="mx-2" size="6vh" color="#C0C0C0" />
          </a>
        </div>
      </div>
    </div>
  )
}
