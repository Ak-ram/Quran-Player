import React, { useEffect, useState } from "react";
import "../styles/MainContainer.css";
import { FaUsers } from "react-icons/fa";
import { Banner } from "./Banner";
import ComponentSwitcher from "./ComponentSwitcher";

function MainContainer({ appState }) {
  const [menuList] = useState([
    "Quran",
    "Remembrance",
    "Reciter",
    "Fans",
    "About",
  ]);
  const [currentPath, setCurrentPath] = useState(menuList[0]);
  useEffect(() => {
    const allLi = document.querySelector(".menuList").querySelectorAll("li");

    function changePopularActive() {
      allLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    allLi.forEach((n) => n.addEventListener("click", changePopularActive));
  }, []);

  return (
    <div className="mainContainer">
      <Banner />

      <div className="menuList">
        <ul>
          {menuList.map((item, index) => (
            <li key={String(index)} onClick={() => setCurrentPath(item)}>
              <a href="#d">{item}</a>
            </li>
          ))}
        </ul>
        <p>
          <i>
            <FaUsers />
          </i>
          12.3M <span>Followers</span>
        </p>
      </div>
      {/*  Cool 😎 */}
      <div className="component-switcher">
        <ComponentSwitcher
          currentPath={currentPath}
          menuList={menuList}
          appState={appState}
        />
      </div>
    </div>
  );
}

export { MainContainer };
