import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroSection from "../components/HomePage/HeroSection";

// retrieve all project titles and images from prismic
export const query = graphql`
{
  prismic {
    allProjects {
      edges {
        node {
          project_title
          project_image
          project_link {
            ... on PRISMIC__ExternalLink {
              url
            }
          }
        }
      }
    }
  }
}

`;



function IndexPage({ data }) {
  const projects = data.prismic.allProjects.edges;

  if (!projects) return null;

  return (
    <Layout pageLink="contact">
      <SEO title="Home" />
      <HeroSection />
      {projects.map(project => (
        <div>
          <h1>{project.node.project_title.text}</h1>
          <img src={project.node.project_image.url} alt={project.node.project_image.alt} style={{ maxWidth: 400 }} />
        </div>
      ))}
    </Layout>
  );
}

export default IndexPage;
