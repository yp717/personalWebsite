import React from "react";
// import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Button from '../components/button';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ color: `black`, margin: `3rem auto`, maxWidth: 600 }}>
      <h1 className>Hi, I'm Yannis Panagis</h1>
      <p>I'm a third year MEng Electrical Engineering student at Imperial College London looking for a 6 month placement in 2020.</p>
    </div>
    <Button buttonText="Click me" />
  </Layout>
)

export default IndexPage;
