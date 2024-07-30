import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProjectCard =  ({id, title, description, projectType, imgUrl}) => {
    return (
        <Col sm={6} md={4}>
            <Link to={`/projects/${id}`} className="projectcard-link">     
                <div className="project-img-box">
                    <img src={imgUrl} />
                    <div className="project-text">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </div>
            </Link>
        </Col>
    )    
}