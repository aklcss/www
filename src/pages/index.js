import React from "react";
import Section from "../components/section/section";
import SEO from "../components/seo/seo";
import Splash from "../components/splash/splash";

const IndexPage = ({ data }) => (
  <div className="wrapper y-scroll-snap">
    <SEO title="Home"/>
    <Splash/>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <Section node={node} key={node.id}/>
    ))}
  </div>
);

export default IndexPage;

export const query = graphql`
  query {
    allMarkdownRemark (sort:{fields: frontmatter___order}) {
      totalCount
      edges {
        node {
        internal {
        content
        }
        html
          id
          frontmatter {
            title
            order
            theme
          }
          excerpt
        }
      }
    }
  }
`;