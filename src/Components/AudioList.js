import React, { useEffect, useState } from "react";
import { FaHeadphones, FaRegClock, FaRegHeart } from "react-icons/fa";
import { BiLoaderAlt } from "react-icons/bi";
import "../styles/LeftMenu.css";
import MusicPlayer from "./MusicPlayer";
import SearchBox from "./SearchBox";
import recordDesk from "../img/record-desk.png";
import ContentPlaceholder from "./contentPlaceholder";
function AudioList({ appState }) {
  const [currentSong, setCurrentSong] = useState(null); // all surahs
  const [songAudio, setSongAudio] = useState(null);
  const [auto, setAuto] = useState(false);
  const [musicPlayerVisibility, setMusicPlayerVisibility] = useState(false);
  useEffect(() => {
    const allSongs = document.querySelectorAll(".songs");
    function changeActive() {
      allSongs.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    allSongs.forEach((n) => n.addEventListener("click", changeActive));
  }, []);

  const setMainSong = (songSrc) => {
    setSongAudio(songSrc);
    // setImage(imgSrc);
    setAuto(true);
  };
  // {Object.keys(appState).length ?():()}
  return (
    <div className="AudioList">
      <h2 className="title">
        The list
        <span>
          {Object.keys(appState).length ? (
            appState.surahs.length + " Surahs"
          ) : (
            <BiLoaderAlt size={20} className="spin" />
          )}
        </span>
      </h2>
      {Object.keys(appState).length ? <SearchBox /> : null}
      <div className="songsContainer">
        {Object.keys(appState).length
          ? appState.surahs.map((song) => (
              <div
                className="songs"
                key={song?.number}
                onClick={() => {
                  setMainSong(song?.audio);
                  setCurrentSong(song);
                  setMusicPlayerVisibility(!musicPlayerVisibility);
                }}
              >
                <div className="count">
                  <p>{song?.number}</p>
                </div>
                <div className="song">
                  {/* <div className="imgBox">
             <img src="https://www.seekpng.com/png/detail/411-4111212_al-quran-kareem-png.png" alt="" />
           {song.ayahs.length} Ayahs 
            </div>  */}
                  <div className="section">
                    <p className="songName">
                      {song?.name} <span className="songSpan">12 Ayahs</span>
                    </p>

                    <div className="hits">
                      <p className="hit">
                        <i>
                          <FaHeadphones />
                        </i>
                        {song?.englishName}
                      </p>

                      <p className="duration">
                        <i>
                          <FaRegClock />
                        </i>
                        {song?.revelationType}
                      </p>
                      <div className="favourite">
                        <i>
                          <FaRegHeart />
                        </i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : <ContentPlaceholder />}
      </div>

      <MusicPlayer
        currentSong={currentSong}
        songAudio={songAudio}
        imgSrc={recordDesk}
        autoplay={auto}
        visibility={musicPlayerVisibility}
      />
    </div>
  );
}

export { AudioList };
