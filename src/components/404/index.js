import React from "react";
import img from "../../assets/not-found.png";
import "./nfstyle.css";

const NotFoundComponent = () => {
  return (
    <div>
      <img src={img} alt="404" className="NotFound" />
    </div>
  );
};

export default NotFoundComponent;
