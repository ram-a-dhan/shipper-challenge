import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Content from './Content';
import OtherContent from './OtherContent';

export default function Body() {
  // the state below is propped to the Sidebar for tab selection and activation
  // and to the Content for conditional rendering
  const [ active, setActive ] = useState({
    beranda: false,
    pickup: false,
    order: false,
    driver: true,
    merchant: false,
    laporan: false,
    profil: false,
  });
  return (
    <div className="Body d-flex flex-row flex-nowrap justify-content-center align-items-start">
      <div className="d-flex flex-wrap w-100">
        <Sidebar active={active} setActive={setActive} />
        {/* eslint-disable-next-line */}
        {active.driver && (
          <Content active={active} setActive={setActive} />
          /* eslint-disable-next-line */
        ) || (
          <OtherContent />
        )}
      </div>

    </div>
  )
}
