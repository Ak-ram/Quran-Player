import logo from "./logo.svg";
import "./App.css";
import { LeftMenu } from "./Components/LeftMenu";
import { MainContainer } from "./Components/MainContainer";
import { RightMenu } from "./Components/RightMenu";
import { useState } from "react";
import Welcome from "./Components/Welcome";

function App() {
  const [welcome,setWelcome] = useState(true);
  return (
      <div className="App">
        <Welcome />
      <div className=""></div>
      <LeftMenu />
      <MainContainer />
      <RightMenu />
      <div className="background"></div>
    </div>
  );
}

export default App;
