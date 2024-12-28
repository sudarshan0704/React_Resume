import React from "react";
import './App.css';
import mypic from'./suda.jpg'

function Card() {
    return (
       <div className="Card">
            <div className="img">
                <img src={mypic}></img>
            </div>
            <h2 >Sudarshan K M</h2>
            <ul>
                <li>  <b>+91</b> 7676045748 </li>
                <li> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10z"/>
</svg> kmragusudarshan@gamil.com</li>
                <li> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
    </svg> su_darshan_07</li>
                <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path d="M19 0h-14c-1.1 0-2 .9-2 2v14h2v-10h10v10h2v-14c0-1.1-.9-2-2-2zM16 16v-2h-3v2h3zm-3-8v-2h-3v2h3z"/>
</svg> linked In</li>
            </ul>
            <hr ></hr>
            <section>
            <h3 >Education</h3>
            <h4 id="start">Graduation</h4>
            <p>Completed my BCA Graduation in SDMC ujire Under mangalore university</p>
            <p><b>9.2 CGPA</b> </p>
            <p>2022-2025</p>
            <h4>PUC</h4>
            <p>Completed my PUC Education in ST Joseph's PU college Somwarpet</p>
            <p><b>96.33% CGPA</b> </p>
            <p>2020-2022</p>
            <h4>SSLC</h4>
            <p>Completed my SSLC Education in ST Joseph's High School Somwarpet</p>
            <p><b>96%</b> </p>
            <p>2017-2020</p>
            </section>
            <div className="lang">
                 <h4>Languages </h4>
            <ul>
                <li>English</li>
                <li>kannada</li>
                <li>Hindi</li>
            </ul></div>
            
       </div>
    );
}

export default Card;
