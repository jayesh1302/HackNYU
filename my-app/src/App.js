import logo from './logo.svg';
import './App.css';
import { DeviceFrameset } from 'react-device-frameset'
import '../node_modules/react-device-frameset/dist/styles/marvel-devices.min.css'

function App() {
  return (
    <div className="App">
      <DeviceFrameset device="iPhone X" color="gold">
            <div>Hello world</div>
        </DeviceFrameset>
    </div>
  );
}

export default App;
