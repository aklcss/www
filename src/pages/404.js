import React from "react";
import Emoji from "../components/emoji/emoji";
import SEO from "../components/seo/seo";

const divStyle = {
  padding: '20px',
  margin: '5px',
  textAlign: 'center'
};

const NotFoundPage = () => (
  <div style={divStyle}>
    <SEO title="404: Not found"/>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.
      <Emoji symbol="😭" label="Crying"/>
    </p>
  </div>
);

export default NotFoundPage;
