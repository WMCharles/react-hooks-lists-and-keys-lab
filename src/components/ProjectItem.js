import React from "react";

function ProjectItem({ id, name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {technologies.map((technology) => {
          return (
            technology.technologies.map((stack) => <span>
              {stack}
            </span>)
            
          )
        })}
      </div>
    </div>
  );
}

export default ProjectItem;