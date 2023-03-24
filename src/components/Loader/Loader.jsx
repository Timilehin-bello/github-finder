import React, { Fragment } from "react";
import loader from "../../img/loader.gif";

const Loader = () => {
  return (
    <Fragment>
      <img src={loader} alt="Loading....." style={ImageStyle} />
    </Fragment>
  );
};

const ImageStyle = {
  width: "200px",
  margin: "auto",
  display: "block",
};

export default Loader;
