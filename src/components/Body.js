import React from 'react';
import Sidebar from './Sidebar';
import Content from './Content';

export default function Body() {
  return (
    <div className="Body container d-flex flex-row flex-nowrap justify-content-center align-items-start">
      <Sidebar />
      <Content />

    </div>
  )
}
