import React from 'react';
import './css/style.css'; // Import the CSS file

const MainContent = () => {
  return (
    <div className="main-content-container">
      <div className="content-box">
        <div className="content-inner-box">
          <Link to="/bet" className="content-link">Start Betting</Link>
        </div>
      </div>
      <div className="content-box">
        <div className="content-inner-box">
          <h3 className="content-title">RESULT DIRI</h3>
          <p className="content-desc">2:00 PM Draw | Cut-Off Time: 4:45 PM</p>
        </div>
      </div>
      <div className="content-box">
        <div className="content-inner-box">
          <h3 className="content-title">RESULT DIRI</h3>
          <p className="content-desc">5:00 PM Draw | Cut-Off Time: 4:45 PM</p>
        </div>
      </div>
      <div className="content-box">
        <div className="content-inner-box">
          <h3 className="content-title">RESULT DIRI</h3>
          <p className="content-desc">9:00 PM Draw | Cut-Off Time: 8:45 PM</p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
