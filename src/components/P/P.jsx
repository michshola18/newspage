/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const P = ({ className, text = "Charles A. Ross of Rhode Island - $7,130,301 - Unpaid" }) => {
  return (
    <div className={`p ${className}`}>
      <p className="charles-a-ross-of">{text}</p>
    </div>
  );
};

P.propTypes = {
  text: PropTypes.string,
};
