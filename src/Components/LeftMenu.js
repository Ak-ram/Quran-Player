import React from "react";
import "../styles/LeftMenu.css";
import { FaMosque, FaEllipsisH } from "react-icons/fa";
import { Menu } from "./Menu";
import { MenuList } from "./MenuList";
import { MenuPlayList } from "./MenuPlayList";
import TrackList from "./TrackList";
function LeftMenu({ appState }) {
  return (
    <div className="leftMenu menuToggle">
      <div className="logoContainer">
        <div className="logo">
          <i>
            <FaMosque />
          </i>

          <h2>Quran</h2>
        </div>

        <i>
          <FaEllipsisH />
        </i>
      </div>

      <Menu title={"Menu"} listObject={MenuList} />

      <MenuPlayList appState={appState} />

      <TrackList trackName={"Take On Me"} artistName={"A-ha"} />
    </div>
  );
}

export { LeftMenu };
