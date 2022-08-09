import React, { useEffect, useState } from "react";
import { FaHeadphones, FaRegClock, FaRegHeart, FaHeart } from "react-icons/fa";
import { BiLoaderAlt, BiSearchAlt } from "react-icons/bi";
import "../styles/LeftMenu.css";
import MusicPlayer from "./MusicPlayer";
import SearchBox from "./SearchBox";
function AudioList() {
  const [songs, setSongs] = useState([]); // all surahs
  const [currentSong, setCurrentSong] = useState(null); // all surahs
  const [songAudio, setSongAudio] = useState(
    null
  );
  const [isFavouriteSong, setIsFavouriteSong] = useState(false);
  const [auto, setAuto] = useState(false);
  const [ayahNum, setAyahNum] = useState(6);
  const Songs = async () => {
    const res = await fetch("http://api.alquran.cloud/v1/quran/ar.alafasy");
    const data = await res.json();
    return data.data.surahs;
  };
  // const nextAyah = ()=> console.log(setAyahNum(ayahNum + 1))
  useEffect(() => {
    Songs().then((data) => {
      setSongs(data);
    });
    const allSongs = document.querySelectorAll(".songs");
    function changeActive() {
      allSongs.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    allSongs.forEach((n) => n.addEventListener("click", changeActive));
  }, []);

  // const changeFavourite = (id) => {
  //   Songs.forEach((song) => {
  //     if (song.id == id) { // number
  //       song.favourite = !song.favourite;
  //     }
  //   });
  //   setSongs([...songs]);
  // };

  const setMainSong = (songSrc) => {
    setSongAudio(songSrc);
    // setImage(imgSrc);
    setAuto(true);
  };

  return (
    <div className="AudioList">
      <h2 className="title">
        The list{" "}
        <span>
          {songs?.length ? (
            songs.length + " Surahs"
          ) : (
            <BiLoaderAlt size={20} className="spin" />
          )}{" "}
        </span>
      </h2>
      {songs.length ? <SearchBox songs={songs} /> : null}
      <div className="songsContainer">
        {songs.length ? (
          songs.map((song, index) => (
            <div
              className="songs"
              key={song?.number}
              onClick={() => {
                setMainSong(
                  `https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/${
                    String(song?.number).length === 1
                      ? `00${song?.number}`
                      : String(song?.number).length === 2
                      ? `0${song?.number}`
                      : `${song?.number}`
                  }.mp3`
                );
                setCurrentSong(song);
              }}
            >
              <div className="count">
                <p>{`#${index + 1}`}</p>
              </div>
              <div className="song">
                {/* <div className="imgBox">
                   <img src="https://www.seekpng.com/png/detail/411-4111212_al-quran-kareem-png.png" alt="" />
                {song.ayahs.length} Ayahs
                </div> */}
                <div className="section">
                  <p className="songName">
                    {song?.name}{" "}
                    <span className="songSpan">{song.ayahs.length} Ayahs</span>
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
                    <div
                      className="favourite"
                      // onClick={(event) => changeFavourite(event,song?.number)}
                    >
                      {isFavouriteSong ? (
                        <i>
                          <FaHeart />
                        </i>
                      ) : (
                        <i>
                          <FaRegHeart />
                        </i>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h3
            style={{
              color: "#8b8989",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <BiLoaderAlt
              style={{
                margin: "0 10px",
              }}
              size={20}
              className="spin"
            />{" "}
            Loading...
          </h3>
        )}
      </div>
      {songAudio ? (
        <MusicPlayer
          currentSong={currentSong}
          songAudio={songAudio}
          imgSrc={"https://pngimg.com/uploads/vinyl/vinyl_PNG33.png"}
          autoplay={auto}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export { AudioList };
