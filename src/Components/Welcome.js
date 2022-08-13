import React, { useRef, useState } from "react";
import "../styles/Welcome.css";
const Welcome = () => {
  const player = useRef();
  const [loading, setLoading] = useState(true);
  const [ayahAudio, setAyahAudio] = useState(null);
  const [ayahText, setAyahText] = useState(null);
  const clearLoading = () => {
    setLoading(false);
  };

  (async () => {
    try {
      let url = "https://api.alquran.cloud/v1/ayah/4881/ar.alafasy";
      let res = await fetch(url);
      let delevered = await res.json();
      setAyahAudio(delevered.data.audio);
      setAyahText(delevered.data.text);
    } catch (error) {

      console.log(error);
    }
  })();

window.onclick = () => player.current.play();

  return (
    <>
      {loading ? (
        <div className="introWrapper">
          <div className="intro">
          <audio
            ref={player}
            src={ayahAudio}
            preload="metadata"
            onEnded={clearLoading}
          />
          </div>
          <h2 className="ayahText">{ayahText}</h2>
          
        </div>
      ) : null}
    </>
  );
};

export default Welcome;
