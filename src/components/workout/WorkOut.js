import React from 'react';
import './WorkOut.css';
import {Link} from 'react-router-dom';
import obese from '../../assets/scales.png';
import under from '../../assets/weight.png';
import normal from '../../assets/weight-scale.png';

function WorkOut() {
  return (
    <ul className="ul">
    <div className="WorkOut">

        <Link to ='/WorkOutObese'
        style={{
          textDecoration: 'none',
          color: '#4B4948',
         }}>
            <div className="section">
            <img src={obese} alt=""/>
            <p>Over <br/>Weight</p></div>
        </Link>

        <Link to ='/WorkOutNormal'
        style={{
          textDecoration: 'none',
          color: '#4B4948',
         }}>
            <div className="section">
            <img src={normal} alt=""/>
            <p>Normal <br/>Weight</p></div>
        </Link>

        <Link to ='/WorkOutUnder'
         style={{
           textDecoration: 'none',
           color: '#4B4948',
          }}>
            <div className="section">
            <img src={under} alt=""/>
            <p>Under <br/>Weight</p></div>
        </Link>

    </div>

    </ul>
  );
}

export default WorkOut;