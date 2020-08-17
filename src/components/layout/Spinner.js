import React, { Fragment } from "react";
import { FaSpinner } from "react-icons/fa";
import { IconContext } from "react-icons";

const Spinner = () => {
  return (
    <IconContext.Provider
      value={{ width: "200px", margin: "auto", display: "block" }}
    >
      <Fragment>
        <FaSpinner />
      </Fragment>
    </IconContext.Provider>
  );
};

export default Spinner;
