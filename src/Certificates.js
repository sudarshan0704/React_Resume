import './App.css';
import myimg from './download (1).jpg'
import node from './nodejs.png'
import web from './web.png'
import javascript from './javascript.png'
function Certificate() {
  return (
    <div className="Certificate">
      <h3>Certificate</h3>
      <div className='cource'>
        <img src={myimg}></img>
      <h4>Flutter Cource by Skillup </h4>
      <button>View</button>
      </div>
      <div className='cource'>
        <img src={node}></img>
      <h4>Node js by Infosys Springbord </h4>
      <button>View</button>
      </div>
      <div className='cource'>
        <img src={web}></img>
      <h4>Web development Cource By Udemy </h4>
      <button>View</button>
      </div>
      <div className='cource'>
        <img src={javascript}></img>
      <h4>JavaScript and PHP by Udemy </h4>
      <button>View</button>
      </div>
    </div>
  );
}

export default Certificate;