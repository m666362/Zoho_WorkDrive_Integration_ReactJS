import React from "react";
// import { Helmet } from "react-helmet";
const PageContainer = (props) => {
  return (
    <div>
      {/* <Helmet>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Helmet> */}
      {props.children}
    </div>
  );
};

export default PageContainer;
