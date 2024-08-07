import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <a className="max-w-sm rounded overflow-hidden shadow-lg cardShow h-96 relative" href={project.link}>
      <img className="w-full" src={project.image} alt={project.title} />
      <div className="px-6 py-4 cardDetails absolute">
        <div className="font-bold text-xl mb-2">{project.title}</div>
        <p className="text-base">{project.description}</p>

        <div className="py-4 ">
              {project.tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            #{tag}
          </span>
        ))}
      </div>
      </div>
      
    </a>
  );
};

export default ProjectCard;
