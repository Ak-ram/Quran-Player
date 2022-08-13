import "../styles/remembrance.css";
import ContentPlaceholder from "./contentPlaceholder";
const Remembrance = ({ appState }) => {
  const dayRemembrance = appState.Remembers.Day.content.map((item, index) => (
    <div className="remembrance-content">
      <span>{index + 1}</span>
      <p key={index}> {item}</p>
    </div>
  ));
  const nightRemembrance = appState.Remembers.night.content.map(
    (item, index) => (
      <div className="remembrance-content">
        <span>{index + 1}</span>
        <p key={index}> {item}</p>
      </div>
    )
  );
  return (
    <div className="remembrance">
      {Object.keys(appState).length ? (
        <>
          <h2 className="text-white">اذكار الصباح :-</h2>
          {dayRemembrance}
          <h2 className="text-white">اذكار المساء :-</h2>
          {nightRemembrance}
        </>
      ) : (
        <ContentPlaceholder />
      )}
    </div>
  );
};

export default Remembrance;
