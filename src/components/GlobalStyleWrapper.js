import React from "react";
import PropTypes from "prop-types";
import { Global, css } from "@emotion/react";

const GlobalStyleWrapper = ({ children, backgroundColor }) => {
  return (
    <Global
      styles={css`
        html,
        body {
          background: ${backgroundColor};
          margin: 0;
          padding: 0;
          min-height: "100vh";
          max-width: "100vw";
        }
      `}
    >
      {children}
    </Global>
  );
};

GlobalStyleWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.number.isRequired,
};

export default GlobalStyleWrapper;
