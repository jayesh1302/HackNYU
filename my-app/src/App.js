import logo from './logo.svg';
import './App.css';
import React from 'react';
import { DeviceFrameset } from 'react-device-frameset'
import '../node_modules/react-device-frameset/dist/styles/marvel-devices.min.css'
import Photo from './Photo' 
import NavbarSmile from './Navbar-Container';

function App() {
  // const result = Navbar.Navbar();
  return (
    
    <div className="App">
      <div className="container">
      <DeviceFrameset device="iPhone X" color="gold">
            {/* <div>Hello world</div> */}
            <NavbarSmile />
        </DeviceFrameset>
    </div>
    </div>
    
  );
}


export default App;
