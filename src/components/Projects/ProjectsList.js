import { Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

export const ProjectsList = ({projects}) => {
    return (
        <Row className="project-list">
            {
                projects
                .map((project, index) => {
                    return (
                        <ProjectCard 
                            key={index}
                            {...project}
                        />
                    )
                })
            }
        </Row>
    )
}