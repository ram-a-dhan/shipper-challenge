import React from 'react';
import './Content.css';
import { FaSearch, FaPlus } from 'react-icons/fa';

export default function Content() {
	return (
		<div className="Content d-flex flex-column flex-nowrap justify-content-start align-items-center col-12 col-sm-12 col-md-9 col-xl-10 p-0">
      <div className="d-flex flex-row flex-wrap justify-content-between align-items-center w-100 p-3">
        <div className="ContentTitle">
          <h3 className="font-weight-bold">DRIVER MANAGEMENT</h3>
          <h6 className="">Daftar Driver yang bekerja dengan Anda</h6>
        </div>
        <div className="ContentMenu d-flex flex-row flex-wrap">
          <div className="SearchBar m-1">
            <FaSearch className=" m-2" size="2.5vh" color="#FF4646" />
            <input type="text" className="mr-2" placeholder="Cari Driver" />
          </div>
          {/* eslint-disable-next-line */}
          <div className="AddButton d-flex flex-row flex-nowrap justify-content-center align-items-center m-1">
            Tambah Driver &nbsp;
            <FaPlus size="2.5vh" color="FFFFFF" />
          </div>
        </div>
      </div>
      <div className="d-flex flex-row flex-wrap justify-content-start align-items-start">

      </div>
		</div>
	);
}
