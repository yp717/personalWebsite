import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

const BlogTemplate = ({ data }) => {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;
    return (
        <Layout>
            <section>
                <div>
                    <h1>{frontmatter.title}</h1>
                    <span>{frontmatter.date}</span>
                </div>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </section>
        </Layout>
    );
};

export default BlogTemplate;

export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug }}) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
            }
        }
    }    
`;