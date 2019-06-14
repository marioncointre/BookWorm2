import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../assets/images/left.svg";

function Return() {
  return (
    <div className="breadcrumb">
      <img src={arrow} width="15px" /> Return to all categories
    </div>
  );
}

export default Return;
