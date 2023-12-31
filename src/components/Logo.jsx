import React from "react";
import Icon from "../assets/react.svg";

const Logo = ({ width = "100%" }) => {
  return <img src={Icon} style={{ width }} alt="Logo" />;
};

export default Logo;
