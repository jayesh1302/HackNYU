import logo from './logo.svg';
import './App.css';
import React from 'react';
import { DeviceFrameset } from 'react-device-frameset'
import '../node_modules/react-device-frameset/dist/styles/marvel-devices.min.css'
import Photo from './Photo' 
import NavbarSmile from './Navbar-Container';
import Maps from './Maps';
import { BrowserRouter as Router, BrowserRouter } from 'react-router-dom';
// import HomeComponent from './Home-Component';
import { Routes ,Route } from 'react-router-dom';
import MapComponent from './Map-component';


function App() {
  // const result = Navbar.Navbar();
  return (
    
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <DeviceFrameset device="iPhone X" color="gold">
              {/* <div>Hello world</div> */}
              <NavbarSmile />
              <Routes>
              <Route path="/" element={<Photo/>} />
              <Route path="/maps" element={<Maps/>} />
              </Routes>
              {/* <HomeComponent />
              <MapComponent /> */}
          </DeviceFrameset>
        </BrowserRouter>
       
    </div>
    </div>
    
  );
}


export default App;
