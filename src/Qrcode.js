import './App.css'
import qr from './qr.jpg'
function QR() {
    return(
        <div className='QR'>
            <img src={qr}></img>
            <h3>Scan This for Further Details</h3>
            <br></br>
        </div>
        
    );
}
export default QR;