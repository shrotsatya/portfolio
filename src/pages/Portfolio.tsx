import React from "react"
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";


const Portfolio: React.FC = () => {
  return (
    <Layout>
      <h1 className="heading">Projects</h1>
      <div className="projects-container">
        {
          projects.map((project, i) => {
            return <ProjectCard key={project.key} image={project.image} title={project.title} content={project.content} github={project.github} />
          })
        }
      </div>

    </Layout>
  )
}

export default Portfolio;
