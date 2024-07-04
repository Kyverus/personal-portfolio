import './Projects.css';
import { Col, Row, Container, Tab, Nav } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"

import projImg1 from '../../assets/imgs/proj-img-1.png';
import projImg2 from '../../assets/imgs/proj-img-2.png';
import projImg3 from '../../assets/imgs/proj-img-3.png';
import projImg4 from '../../assets/imgs/proj-img-4.png';

export const Projects = () => {
    const projects = [
        {
            title: "Project: Taskkaiser",
            description: "Task management web application for simple UI for completed, pending and dropped tasks.",
            language: "PHP",
            projectType: "Web App",
            imgUrl: projImg1
        },
        {
            title: "Project: Allocate",
            description: "Web application journal for making budgets and managing finances.",
            language: "PHP",
            projectType: "Web App",
            imgUrl: projImg2
        },
        {
            title: "Inventory Manager",
            description: "Task management web application for simple UI for completed, pending and dropped tasks.",
            language: "Java",
            projectType: "App",
            imgUrl: projImg3
        },
        {
            title: "Personal Portfolio",
            description: "Website for showcasing technology skills and personal projects.",
            language: "Javascript (React)",
            projectType: "Website",
            imgUrl: projImg4
        }
    ]

    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>
                            PROJECTS
                        </h2>
                        <p>
                            These are the personal projects I am working on/ have worked on.
                        </p>
                        <Tab.Container class="project-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                                <Nav.Item>
                                <Nav.Link eventKey="first">Web App</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="second">Desktop App</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="third">Websites</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects
                                            .filter(project => project.projectType === "Web App")
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
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            projects
                                            .filter(project => project.projectType === "App")
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
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {
                                            projects
                                            .filter(project => project.projectType === "Website")
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
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <div className="background-image-projects" src=""></div>
        </section>
    )
}