import "../styles/reciter.css";
import ContentPlaceholder from "./contentPlaceholder";
const Reciter = ({ appState }) => {
  const content = (
    <>
      <img className="reciter-image" src={appState.reciter.image} alt="" />
      <div className="reciter-info">
        <h2>{appState.reciter.englishName}</h2>
        <p>{appState.reciter.info}</p>
      </div>
    </>
  );
  return (
    <div className="reciter">
      {Object.keys(appState).length ? content : <ContentPlaceholder />}
    </div>
  );
};
export default Reciter;
