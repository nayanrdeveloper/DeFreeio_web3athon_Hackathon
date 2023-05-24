import { projectList } from "@/constants";
import React from "react";
import GeneralHeader from "../General/GeneralHeader";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section className="px-4 py-10 bg-[#F0EFEC]">
      <GeneralHeader
        title="Latest Projects"
        subTitle="Know your worth and find the project that qualify your life"
        browseTitle="Browse All"
        route="/projects"
      />
      <div className="grid grid-cols-3 gap-x-8 gap-y-8 mt-5">
        {projectList.map(
          ({
            id,
            name,
            description,
            company,
            duration,
            englishLevel,
            language,
            level,
            location,
            locationType,
            priceEnd,
            priceStart,
            projectType,
            requiredSkills,
            sinceJoin,
            views,
          }) => {
            return (
              <ProjectCard
                key={id}
                id={id}
                description={description}
                company={company}
                duration={duration}
                englishLevel={englishLevel}
                language={language}
                level={level}
                location={location}
                locationType={locationType}
                name={name}
                priceEnd={priceEnd}
                priceStart={priceEnd}
                projectType={projectType}
                requiredSkills={requiredSkills}
                sinceJoin={sinceJoin}
                views={views}
              />
            );
          }
        )}
      </div>
    </section>
  );
}

export default Projects;
