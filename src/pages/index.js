import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroSection from "../components/HomePage/HeroSection";
import AboutSection from "../components/HomePage/AboutSection";

// retrieve all project titles and images from prismic
export const query = graphql`
{
  allContentfulProject {
    edges {
      node {
        title
        url
        image {
          file {
            url
          }
        }
      }
    }
  }
}
`;

const IndexPage = ({ data }) => {
  const projects = data.allContentfulProject.edges;

  if (!projects) return null;

  return (
    <Layout pageLink="contact">
      <SEO title="Home" />
      <HeroSection />
      <AboutSection />
      {projects.map(project => (
        <div>
          <h1>{project.node.title}</h1>
          <img src={project.node.image.file.url} alt={project.node.title} style={{ maxWidth: 400 }} />
        </div>
      ))}
    </Layout>
  );
};

export default IndexPage;
