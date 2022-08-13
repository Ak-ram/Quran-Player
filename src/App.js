import { useEffect, useState } from "react";
import "./App.css";
import { LeftMenu } from "./Components/LeftMenu";
import LoadingScreen from "./Components/loadingScreen";
import { MainContainer } from "./Components/MainContainer";
import { RightMenu } from "./Components/RightMenu";
// import Welcome from "./Components/Welcome";
function App() {
  const [isLoading,setLoading] = useState(true)
  const [appState, setAppState] = useState({}); // all surahs
  const data = async () => {
    const res = await fetch("https://myjson.dit.upm.es/api/bins/fr50");
    const data = await res.json();
    return data.data;
  };

  useEffect(() => {
    data().then((data) => {
      setAppState(data);
    });
  });
  window.onload = ()=> setLoading(!isLoading)
  return (
    <div className="App">
      {/* <Welcome /> */}
      <LoadingScreen loading={isLoading}/>
      <div className=""></div>
      <LeftMenu appState={appState} />
      <MainContainer appState={appState} />
      <RightMenu />
      <div className="background"></div>
    </div>
  );
}

export default App;
