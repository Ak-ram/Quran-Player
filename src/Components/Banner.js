import React from "react";
import artist from "../img/artist.jpg";
import check from "../img/check.png";
import { FaEllipsisH, FaHeadphones, FaCheck } from "react-icons/fa";
function Banner() {
  return (
    <div className="Banner">
      <img src={'https://lh5.googleusercontent.com/proxy/1wKQktyPi-rVawVbnAxSXUcy9KE-SDBX3A8Z3rvrBn5fGb6ZAs7ZMCMT68Wb6NXwL95McaPrxFc2iNMC-asAXgGG2LtuvHUfVI94A7J9R4fJug=s0-d'} alt="" className="bannerImg" />

      <div className="content">
        <div className="breadCrump">
          <p>
            Home <span>/Quran</span>
          </p>
          <i onClick={()=> console.log('some boring time')}>
            <FaEllipsisH />
          </i>
        </div>

        <div className="artist">
          <div className="left">
            <div className="name">
              <h2>A-ha</h2>
              <img src={check} alt="" />
            </div>

            <p>
              <i>
                <FaHeadphones />
              </i>
              11,184,1811 <span>Monthly Listeners</span>
            </p>
          </div>

          <div className="right">
            <a href="#"> Play</a>
            <a href="#">
              <i>
                <FaCheck />
              </i>
              Following
            </a>
          </div>
        </div>
      </div>

      <div className="bottom"></div>
    </div>
  );
}

export { Banner };
