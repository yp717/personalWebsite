// You can delete this file if you're not using it
const _ = require('lodash');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    const blogTemplate = path.resolve(`src/templates/blogTemplate.js`);
    const tagTemplate = path.resolve(`src/templates/tagsTemplate.js`);

    return graphql(`
        {
            allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 1000
            ) {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            tags
                        }
                    }
                }
            }
        }
    `).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors);
        }

        const results = result.data.allMarkdownRemark.edges;
        //Creates blog posts
        results.forEach(({ node }) => {
            createPage({
                path: node.fields.slug,
                component: blogTemplate,
                context: { slug: node.fields.slug }, // additional data can be passed via context
            });
        });

        // create tags pages
        // pulled directly from https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/#add-tags-to-your-markdown-files
        let tags = [];
        // Iterate through each post, putting all found tags into `tags`
        _.each(results, edge => {
            if (_.get(edge, 'node.frontmatter.tags')) {
                tags = tags.concat(edge.node.frontmatter.tags);
            }
        });
        // Eliminate duplicate tags
        tags = _.uniq(tags);
        // Make tag pages
        tags.forEach(tag => {
            createPage({
                path: `/tags/${_.kebabCase(tag)}/`,
                component: tagTemplate,
                context: {
                    tag,
                },
            });
        });
    });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `MarkdownRemark`) {
      const slug = createFilePath({ node, getNode, basePath: `pages` });
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      });
    }
  };