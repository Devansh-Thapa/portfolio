import React from "react";
import "./Projects.css";
import { projectsData } from "./../../assets/projectsData";
import Header from "./../Header/Header";
import FooterLink from "./../FooterLink/FooterLink";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <div className="section-container">
      <Header heading="My Projects" details="details" />

      <div className="project-card-container">
        {projectsData.map(
          ({
            projectName,
            projectDescription,
            imageUrl,
            videoUrl,
            projectUrl,
          }) => {
            return (
              <ProjectCard
                projectName={projectName}
                projectDescription={projectDescription}
                imageUrl={imageUrl}
                projectUrl={projectUrl}
                videoUrl={videoUrl}
              />
            );
          }
        )}
      </div>
      <FooterLink phrase="Check out " link="my skills" toAddress="/skills" />
    </div>
  );
};

export default Projects;
