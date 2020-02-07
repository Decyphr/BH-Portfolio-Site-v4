import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroSection from "../components/HomePage/HeroSection";

// retrieve all project titles and images from prismic
export const query = graphql`
{
  allPrismicProject {
    edges {
      node {
        data {
          project_title {
            text
          }
          project_image {
            url
            alt
          }
        }
      }
    }
  }
}

`;

function IndexPage({ data }) {
  const projects = data.allPrismicProject.edges;

  if (!projects) return null;

  return (
    <Layout pageLink="contact">
      <SEO title="Home" />
      <HeroSection />
      {projects.map(project => (
        <div>
          <h1>{project.node.data.project_title.text}</h1>
          <img src={project.node.data.project_image.url} alt={project.node.data.project_image.alt} />
        </div>
      ))}
    </Layout>
  );
}

export default IndexPage;
