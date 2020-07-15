import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Content from './Content';

export default function Body() {
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
    <div className="Body container d-flex flex-row flex-nowrap justify-content-center align-items-start">
      <div className="d-flex flex-wrap w-100">
        <Sidebar active={active} setActive={setActive} />
        <Content active={active} setActive={setActive} />
      </div>

    </div>
  )
}
