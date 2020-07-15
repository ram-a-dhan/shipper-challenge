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

export default function Sidebar(props) {

  const handleActive = (target) => {
    let activeCopy = { ...props.active };
    // let nextActive = !activeCopy[target];
    for (let key in activeCopy) {
      activeCopy[key] = false;
    }
    activeCopy[target] = true;
    props.setActive(activeCopy);
  };

	return (
		<div className="col-12 col-sm-12 col-md-3 col-xl-2 p-0">
			<ul className="SidebarList">
				<IconContext.Provider value={{ size: '2.5vh' }}>
					{/* eslint-disable-next-line */}
          <a href="#"
            className={"" + (props.active.beranda ? " text-danger SidebarActive" : " text-dark")}
            onClick={() => handleActive('beranda')}
          >
						<li className="py-3 pl-3">
							<FaHome color={props.active.beranda ? "#FF003D" : "#405060" } /> Beranda
						</li>
					</a>
					{/* eslint-disable-next-line */}
          <a href="#"
            className={"" + (props.active.pickup ? " text-danger SidebarActive" : " text-dark")}
            onClick={() => handleActive('pickup')}
          >
						<li className="py-3 pl-3">
							<FaCalendarDay color={props.active.pickup ? "#FF003D" : "#405060" } /> Pickup
						</li>
					</a>
					{/* eslint-disable-next-line */}
          <a href="#"
            className={"" + (props.active.order ? " text-danger SidebarActive" : " text-dark")}
            onClick={() => handleActive('order')}
          >
						<li className="py-3 pl-3">
							<FaDollyFlatbed color={props.active.order ? "#FF003D" : "#405060" } /> Order
						</li>
					</a>
					{/* eslint-disable-next-line */}
          <a href="#"
            className={"" + (props.active.driver ? " text-danger SidebarActive" : " text-dark")}
            onClick={() => handleActive('driver')}
          >
						<li className="py-3 pl-3">
							<FaIdCard color={props.active.driver ? "#FF003D" : "#405060" } /> Driver
						</li>
					</a>
					{/* eslint-disable-next-line */}
          <a href="#"
            className={"" + (props.active.merchant ? " text-danger SidebarActive" : " text-dark")}
            onClick={() => handleActive('merchant')}
          >
						<li className="py-3 pl-3">
							<FaStore color={props.active.merchant ? "#FF003D" : "#405060" } /> Merchant
						</li>
					</a>
					{/* eslint-disable-next-line */}
          <a href="#"
            className={"" + (props.active.laporan ? " text-danger SidebarActive" : " text-dark")}
            onClick={() => handleActive('laporan')}
          >
						<li className="py-3 pl-3">
							<FaClipboardCheck  color={props.active.laporan ? "#FF003D" : "#405060" } /> Laporan
						</li>
					</a>
					{/* eslint-disable-next-line */}
          <a href="#"
            className={"" + (props.active.profil ? " text-danger SidebarActive" : " text-dark")}
            onClick={() => handleActive('profil')}
          >
						<li className="py-3 pl-3">
							<FaUserCircle  color={props.active.profil ? "#FF003D" : "#405060" } /> Profil
						</li>
					</a>
				</IconContext.Provider>
			</ul>
		</div>
	);
}
