import React from 'react'
import { FaHome, FaCalendarDay, FaDollyFlatbed, FaIdCard, FaStore, FaClipboardCheck, FaUserCircle,  } from 'react-icons/fa';

export default function Sidebar() {
  
  return (
    <div className="col-3">
       <ul>
         <li><FaHome /> Beranda</li>
         <li><FaCalendarDay /> Pickup</li>
         <li><FaDollyFlatbed /> Order</li>
         <li><FaIdCard /> Driver</li>
         <li><FaStore /> Merchant</li>
         <li><FaClipboardCheck /> Laporan</li>
         <li><FaUserCircle /> Profil</li>
       </ul>
    </div>
  )
}
