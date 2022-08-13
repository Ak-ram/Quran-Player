import { BiLoaderAlt } from "react-icons/bi";
const ContentPlaceholder = () => {
  return (
    <>
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
    </>
  );
};
export default ContentPlaceholder;
