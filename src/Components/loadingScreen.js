import "../styles/loadingScreen.css";
const LoadingScreen = ({ loading }) => {
  return loading ? (
    <div className="loadingScreen">
      <div className="load">
        <p>Loading...</p>
        <div className="bar"></div>
      </div>
    </div>
  ) : null;
};
export default LoadingScreen;
