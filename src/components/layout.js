import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import "../styles/main.scss";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="lol how many days has it been since Ace got into a bike accident?"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" },
      ]}
    />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0,
      }}
    >
      {children}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
