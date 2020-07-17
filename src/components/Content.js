import React, { useState } from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';
import DriverCard from './DriverCard';
import './Content.css';

export default function Content() {
  // On-Time Number is randomly generated to
  // simulate varying cases of driver performance
  // and it's effect on the visual appearance of the DriverCard
  // These people are my friends if you're curious
  // eslint-disable-next-line
  const [data, setData] = useState([
    {
      id: 976659,
      picture: 'akbar.jpg',
      name: 'Akbar Akma',
      phone: '0853 4673 XXXX',
      schedule: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'],
      ontime: Math.round(Math.random() * 100),
    },
    {
      id: 626543,
      picture: 'oddy.jpg',
      name: 'Oddy Sutrisno',
      phone: '0815 9164 XXXX',
      schedule: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'],
      ontime: Math.round(Math.random() * 100),
    },
    {
      id: 262463,
      picture: '',
      name: 'Darindra Khadifa',
      phone: '0856 3623 XXXX',
      schedule: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'],
      ontime: Math.round(Math.random() * 100),
    },
    {
      id: 928192,
      picture: 'ivan.jpg',
      name: 'Ivan Andhika',
      phone: '0813 4321 XXXX',
      schedule: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'],
      ontime: Math.round(Math.random() * 100),
    },
    {
      id: 734412,
      picture: 'fauzan.jpg',
      name: 'Fauzan Akbar',
      phone: '0815 7665 XXXX',
      schedule: ['Sabtu', 'Minggu'],
      ontime: Math.round(Math.random() * 100),
    },
    {
      id: 623143,
      picture: 'indra.jpg',
      name: 'Indra Puji',
      phone: '0813 9872 XXXX',
      schedule: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'],
      ontime: Math.round(Math.random() * 100),
    },
  ])
	return (
		<div className="Content d-flex flex-column flex-nowrap justify-content-start align-items-center col-12 col-sm-12 col-md-9 col-xl-10 p-0" data-testid="mainContent">
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
          <a href="#">
            <div className="AddButton d-flex flex-row flex-nowrap justify-content-center align-items-center m-1">
              Tambah Driver &nbsp;
              <FaPlus size="2.5vh" color="FFFFFF" />
            </div>
          </a>
        </div>
      </div>
      <div className="d-flex flex-row flex-wrap justify-content-start align-items-center px-2">
        {
          data.map(datum => {
            return <DriverCard key={datum.id} driver={datum} />
          })
        }
      </div>
		</div>
	);
}
