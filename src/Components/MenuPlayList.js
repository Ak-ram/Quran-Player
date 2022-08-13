import React, { useState } from "react";
import "../styles/LeftMenu.css";
import { BsMusicNoteList } from "react-icons/bs";
import { BiLoaderAlt } from "react-icons/bi";
import MusicPlayer from "./MusicPlayer";
import recordDesk from "../img/record-desk.png";
function MenuPlayList({ appState = [] }) {
  const [currentSong, setCurrentSong] = useState(null); // all surahs
  const [songAudio, setSongAudio] = useState(null);
  const [auto, setAuto] = useState(false);
  const [musicPlayerVisibility, setMusicPlayerVisibility] = useState(false);

  const setMainSong = (songSrc) => {
    setSongAudio(songSrc);
    // setImage(imgSrc);
    setAuto(true);
  };
  return (
    <div className="playListContainer">
      <div className="nameContainer">
        <p>Playlists</p>
      
      </div>
      {Object.keys(appState).length ? (
        <div className="playListScroll">
          {appState.surahs.map((item) => (
            <div
              className="playLists"
              key={item?.number}
              onClick={() => {
                setMainSong(item?.audio);
                setCurrentSong(item);
                setMusicPlayerVisibility(!musicPlayerVisibility);
              }}
            >
              <i className="list">
                <BsMusicNoteList />
              </i>
              <p>{item?.englishName}</p>
            </div>
          ))}
          <MusicPlayer
            currentSong={currentSong}
            songAudio={songAudio}
            imgSrc={recordDesk}
            autoplay={auto}
            visibility={musicPlayerVisibility}
          />
        </div>
      ) : (
        <i className="center-xy text-white">
          <BiLoaderAlt size={30} className="spin" />
        </i>
      )}
    </div>
  );
}

export { MenuPlayList };
