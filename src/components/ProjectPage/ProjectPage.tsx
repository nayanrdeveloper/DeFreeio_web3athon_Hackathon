import { projectList } from "@/constants";
import React from "react";
import ProjectCard from "../Projects/ProjectCard";

function ProjectPage() {
  return (
    <div className="bg-[#F0EFEC]">
      <div className="bg-service-background py-10 px-10 object-cover space-y-3">
        <h5 className="font-medium text-3xl">Projects List</h5>
        <p>
        All the Lorem Ipsum generators on the Internet tend to repeat.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5 py-6 px-4" >
        {projectList.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              name={project.name}
              company={project.company}
              description={project.description}
              duration={project.duration}
              englishLevel={project.englishLevel}
              id={project.id}
              language={project.language}
              level={project.level}
              location={project.location}
              locationType={project.locationType}
              priceEnd={project.priceEnd}
              priceStart={project.priceStart}
              projectType={project.projectType}
              requiredSkills={project.requiredSkills}
              sinceJoin={project.sinceJoin}
              views={project.views}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProjectPage;
