import React, { useState } from 'react';
import { FaEllipsisH, FaExclamationCircle, FaUserCircle } from 'react-icons/fa';
import ProgressBar from 'react-customizable-progressbar';
import './DriverCard.css';

export default function DriverCard({ driver }) {
  // eslint-disable-next-line
  const [ threshold, setThreshold ] = useState(50);
  return (
    <div className="DriverCard mx-2 mb-3">
      <div
        /* eslint-disable-next-line */
        className={`DriverCardHeader${driver.ontime <= threshold ? 'Warning' : ''}` + " d-flex flex-row flex-nowrap justify-content-between align-items-center px-3 py-2"}>
        <p className="m-0 font-weight-regular">ID Driver <span className="font-weight-bold">{driver.id}</span></p>
        <div>
          {driver.ontime <= threshold && (
            <FaExclamationCircle className="mr-3" size="1rem" color="#FFFFFF" />
          )}
          <FaEllipsisH size="1rem" color={driver.ontime <= threshold ? '#FFFFFF' : '#C0C0C0'} />
        </div>
      </div>
      <div className="DriverCardBody p-3">
        <ProgressBar
          className="OnTimeProgress float-right"
          radius="60"
          progress={driver.ontime}
          rotate="90"
          trackStrokeWidth="7"
          strokeWidth="7"
          strokeColor="#FF4646"
          initialAnimation="true"
        >
          <div className="ProgressIndicator d-flex flex-column flex-nowrap justify-content-center align-items-center">
            <h3>{driver.ontime}%</h3>
            <p>OnTime</p>
          </div>
        </ProgressBar>
        {/* eslint-disable-next-line */}
        {driver.picture && (
          <img src={'./drivers/' + driver.picture} alt="Driver" className="DriverPicture" />
          /* eslint-disable-next-line */
        ) || (
          <FaUserCircle size="5rem" color="#C0C0C0" />
        )}
        <div className="DriverInfo">
          <h6>Nama Driver</h6>
          <p>{driver.name}</p>
          <h6>Telepon</h6>
          <p>{driver.phome}</p>
          <h6>Jadwal</h6>
          <p>
            {driver.schedule.join(', ')}
          </p>
        </div>
      </div>
    </div>
  )
}
