
import './App.css';
import Card from './Profilecard'
import Objective from './Objective';
import Skills from './Skills';
import Certificate from './Certificates';
import QR from './Qrcode';
function App() {
  return (
    <div className="App">
       <Card/>
       <Objective/>
       <Skills/>
       <Certificate/>
       <QR/>
    </div>
  );
}

export default App;
