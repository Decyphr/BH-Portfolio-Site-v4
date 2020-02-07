import React from "react";
import { graphql } from "gatsby";
import { RichText } from "prismic-reactjs";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "../components/image";
import { FlexBox } from "../components/styles/containers";

// retrieve all project titles and images from prismic
export const query = graphql`
{
  prismic {
    allProjects {
      edges {
        node {
          project_title 
          project_image
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
      <FlexBox>
        <Image />
        <div>
          <h1>Design.</h1>
          <h1>Develop.</h1>
          <h1>Enhance.</h1>
        </div>
      </FlexBox>
      {projects.map(project => (
        <div>
          <h1>{RichText.render(project.node.project_title)}</h1>
          <img src={project.node.project_image.url} alt={project.project_title} />
        </div>
      ))}
    </Layout>
  );
}

export default IndexPage;
