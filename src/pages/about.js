import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
export default () => (
    <>
        <SEO title="About" />
        <Layout>
        <div style={{ color: `teal` }}>
            <h1>About Gatsby</h1>
            <p>Such wow. Very React.</p>
        </div>
        </Layout>
    </>
);