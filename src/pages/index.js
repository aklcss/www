import React from "react";
import { graphql } from "gatsby";
import Splash from "../components/splash/splash";
import Section from "../components/section/section";
import SEO from "../components/seo/seo";
import UpcomingEvents from "../components/upcomingEvents/upcomingEvents";

const IndexPage = ({ data }) => (
  <>
    <div className="wrapper y-scroll-snap">
      <SEO title="Home"/>
      <Splash/>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Section node={node} key={node.id}/>
      ))}
      <UpcomingEvents events={data.meetupGroup.events}/>
    </div>
  </>
);

export default IndexPage;

export const query = graphql`
{
  allMarkdownRemark(sort: {fields: frontmatter___order}) {
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
  meetupGroup {
    events {
      name
      duration
      rsvp_limit
      status
      time
      waitlist_count
      yes_rsvp_count
      featured_photo {
        id
        highres_link
        photo_link
      }
      venue {
        name
        address_1
        address_2
        city
      }
      link
      visibility
    }
    name
    status
    link
    description
    visibility
    members
    who
    next_event {
      name
      yes_rsvp_count
      time
      utc_offset
    }
  }
}
`;
