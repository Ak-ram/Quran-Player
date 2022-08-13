import React, { useState } from "react";
import check from "../img/check.png";
import quran from "../img/quran.png";
import { FaHeadphones, FaCheck } from "react-icons/fa";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
function Banner() {
  const [isOpen, setToggle] = useState(true);
  const toggleRightMenu = () => {
    let rightMenu = document.querySelector(".rightContainer");
    let leftMenuToggler = document.querySelector(".leftMenuToggler");
    rightMenu.classList.toggle("menuToggle");
    setToggle(!isOpen);
    // eslint-disable-next-line no-unused-expressions
    isOpen ? highlight(leftMenuToggler) : setToggle(false);
  };
  let highlight = (item) => {
    // baby pyramid of doom is not harmful hahaha
    setTimeout(() => {
      item.classList.add("highlight");
      setTimeout(() => {
        item.classList.remove("highlight");
      }, 1000);
    }, 500);
  };
  return (
    <div className="Banner">
      <img src={ quran } alt={"quran-banner"} className="bannerImg" />

      <div className="content">
        <div className="breadCrump">
          <p>
            Home <span>/Quran</span>
          </p>
          <i className="rightMenuToggler" onClick={toggleRightMenu}>
            {isOpen ? (
              <AiOutlineMenuUnfold size={25} />
            ) : (
              <AiOutlineMenuFold size={25} />
            )}
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
            <a href="#d"> Play</a>
            <a href="#d">
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
