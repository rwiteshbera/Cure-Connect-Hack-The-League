import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./topbar.css";


export default function TopBar() {
  return  (
  <div className='topbar'>
    <div className="topbarWrapper">
      <div className='topleft'>
      <a href="/Doctor"><i className="fas fa-home" herf = "#"></i></a>
      </div>
      
      <div className='topright'>Right</div>
    </div>
  </div>
  
  );
}
