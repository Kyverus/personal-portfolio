import '../components/Projects/Projects.css' 
import React from 'react';
import { useParams } from 'react-router-dom';
import projects from './project-contents';
import { NotFoundPage } from './NotFoundPage';
import { Container } from 'react-bootstrap';

export const ProjectPage = () => {
    const {projectId} = useParams();

    const project = projects.find((project) => project.id === projectId);

    if (!project) {
        return <NotFoundPage />
    }

    return (
        <div className='project-page'>
            <Container>
                <h1>{project.title}</h1>
                <h3>{project.language}</h3>
                <p>{project.description}</p>
                {project.content.map((content, i)=> (
                    <React.Fragment key={i}>
                        <img  className='content-img' src={content.contentImg} />
                        <p>{content.contentText}</p>
                    </React.Fragment>
                ))} 

                
            </Container>
            <div className="background-image-projects" src=""></div>
        </div>
    );
}