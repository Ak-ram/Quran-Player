import React from "react";
import "../styles/RightMenu.css";
import { FaCrown, FaBell, FaRegHeart, FaSun } from "react-icons/fa";
import { BsGrid1X2Fill } from "react-icons/bs";
import Profile from "../img/profile.jpg";

function RightMenu() {
  const menuToggle = () => {
    let leftMenu = document.querySelector(".leftMenu");
    console.log(leftMenu.classList.toggle("menuToggle"));
  };

  return (
    <div className="rightContainer menuToggle">
      <div className="goPro">
        <i>
          <FaCrown />
          <p>
            <span>Go</span>Pro
          </p>
        </i>

        <i>
          <FaBell />
        </i>

        <i>
          <FaRegHeart />
        </i>
      </div>
      <div className="profile">
        <i>
          <FaSun />
        </i>
        <i className="leftMenuToggler" onClick={menuToggle}>
          {/* <FaCogs /> */}
          <BsGrid1X2Fill />
        </i>

        <div className="profileImage">
          <img src={Profile} alt="" />
        </div>
      </div>
    </div>
  );
}

export { RightMenu };
