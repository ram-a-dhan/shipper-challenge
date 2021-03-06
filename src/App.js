import React from 'react';
import DriverManagement from './views/DriverManagement';
import './App.css';

function App() {
  return (
    <div className="App">
      <DriverManagement />
    </div>
  );
}

export default App;

/////////////////////////
// COMPONENT TREE
/////////////////////////
// 
// App
// -> DriverManagement
//    -> Topbar
//    -> Body
//       -> Sidebar
//       -> Content
//          -> DriverCard
//       -> OtherContent
// 
/////////////////////////