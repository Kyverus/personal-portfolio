import { Col, Row, Container, Tab, Nav } from "react-bootstrap";
import projects from "./project-contents";
import { useState } from "react";
import { SearchBar } from "../components/Projects/SearchBar";
import { ProjectsList } from "../components/Projects/ProjectsList";

const projectSearchFunction = (project, searchInput) => {   //To be improved
    if (project.language.toLowerCase().includes(searchInput.toLowerCase())) return true;
    if (project.projectType.toLowerCase().includes(searchInput.toLowerCase())) return true;
    if (project.title.toLowerCase().includes(searchInput.toLowerCase())) return true;
    if (project.description.toLowerCase().includes(searchInput.toLowerCase())) return true;

    return false;
}

const projectSortFunction = (item1, item2, sortBy, orderBy) => {
    const value = (item1[sortBy].toLowerCase() > item2[sortBy].toLowerCase()) ? 1 : -1;

    return (orderBy.toLowerCase() === "asc") ? (value * 1) : (value * -1);
}

export const ProjectsListPage = () => {

    const [searchInput, setSearchInput] = useState("");
    const [sortBy, setSortBy] = useState("title");
    const [orderBy, setOrderBy] = useState("asc");
    const filteredProjects = projects.filter((project) => (projectSearchFunction(project, searchInput))).sort((a,b) => projectSortFunction(a, b, sortBy, orderBy));

    return (
        <div className="projects-list-page">
            <Container>
                <Row>
                    <Col>
                        <h2>
                            PROJECTS
                        </h2>
                        <p>
                            These are the personal projects I am working on/ have worked on.
                        </p>
                        <SearchBar 
                            sortBy = {sortBy}
                            orderBy = {orderBy}
                            onSearchChange = {(query) => {setSearchInput(query)}}
                            onSortByChange = {(query) => {setSortBy(query)}}
                            onOrderByChange = {(query) => {setOrderBy(query)}}
                        />
                        <ProjectsList projects={filteredProjects} />
                    </Col>
                </Row>
            </Container>
            <div className="background-image-projects" src=""></div>
        </div>      
    );
}
