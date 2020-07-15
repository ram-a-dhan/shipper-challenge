import React from 'react';
import { IconContext } from 'react-icons/lib';
import {
	FaHome,
	FaCalendarDay,
	FaDollyFlatbed,
	FaIdCard,
	FaStore,
	FaClipboardCheck,
	FaUserCircle,
} from 'react-icons/fa';
import './Sidebar.css';

export default function Sidebar() {
	return (
		<div className="col-12 col-sm-12 col-md-3 col-xl-2 p-0">
			<ul className="SidebarList">
				<IconContext.Provider value={{ size: '2.5vh', color: '#405060' }}>
					{/* eslint-disable-next-line */}
					<a href="#" className={"" + "text-dark"}>
						<li className="py-3 pl-3">
							<FaHome /> Beranda
						</li>
					</a>
					{/* eslint-disable-next-line */}
					<a href="#" className={"" + "text-dark"}>
						<li className="py-3 pl-3">
							<FaCalendarDay /> Pickup
						</li>
					</a>
					{/* eslint-disable-next-line */}
					<a href="#" className={"" + "text-dark"}>
						<li className="py-3 pl-3">
							<FaDollyFlatbed /> Order
						</li>
					</a>
					{/* eslint-disable-next-line */}
					<a href="#" className={"" + " text-danger" + " SidebarActive"}>
						<li className="py-3 pl-3">
							<FaIdCard color="#FF003D" /> Driver
						</li>
					</a>
					{/* eslint-disable-next-line */}
					<a href="#" className={"" + "text-dark"}>
						<li className="py-3 pl-3">
							<FaStore /> Merchant
						</li>
					</a>
					{/* eslint-disable-next-line */}
					<a href="#" className={"" + "text-dark"}>
						<li className="py-3 pl-3">
							<FaClipboardCheck /> Laporan
						</li>
					</a>
					{/* eslint-disable-next-line */}
					<a href="#" className={"" + "text-dark"}>
						<li className="py-3 pl-3">
							<FaUserCircle /> Profil
						</li>
					</a>
				</IconContext.Provider>
			</ul>
		</div>
	);
}
