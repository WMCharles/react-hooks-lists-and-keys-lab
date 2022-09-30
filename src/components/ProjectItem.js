import React from "react";
//wimport user from "../data/user";

function ProjectItem({ name, about, technologies }) {
  console.log(technologies);

  const tech=technologies.map((tech)=>{
    return <span key={tech}>{tech}</span>})

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>

      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}

       <span> {tech} </span>
        
      </div>
    </div>
  );
}

export default ProjectItem;