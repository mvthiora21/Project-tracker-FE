import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/projects/${id}`)
      .then(response => {
        setProject(response.data);
      });
  }, [id]);

  if (!project) return <div>Loading...</div>;

  return (
    <div className="project-details">
      <h2>{project.name}</h2>
      <p><strong>Description:</strong> {project.description}</p>
      <p><strong>GitHub Link:</strong> <a href={project.github_link} target="_blank" rel="noopener noreferrer">{project.github_link}</a></p>
      <p><strong>Contributors:</strong> {project.contributors}</p>
      <p><strong>Admin:</strong> {project.admin}</p>
    </div>
  );
};

export default ProjectDetails;