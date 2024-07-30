import projImg1 from '../assets/imgs/proj-img-1.png';
import projImg2 from '../assets/imgs/proj-img-2.png';
import projImg3 from '../assets/imgs/proj-img-3.png';
import projImg4 from '../assets/imgs/proj-img-4.png';

const projects = [
    {
        id: "project-task-kaiser",
        title: "Project: Taskkaiser",
        description: "Task management web application for simple UI for completed, pending and dropped tasks.",
        language: "PHP",
        projectType: "Web App",
        imgUrl: projImg1,
        content: [
            {
                contentImg: projImg1,
                contentText: "Task management web application for simple UI for completed, pending and dropped tasks."
            }
        ]
    },
    {
        id: "project-allocate",
        title: "Project: Allocate",
        description: "Web application journal for making budgets and managing finances.",
        language: "PHP",
        projectType: "Web App",
        imgUrl: projImg2,
        content: []
    },
    {
        id: "project-inv-manager",
        title: "Inventory Manager",
        description: "Task management web application for simple UI for completed, pending and dropped tasks.",
        language: "Java",
        projectType: "App",
        imgUrl: projImg3,
        content: []
    },
    {
        id: "project-personal-portfolio",
        title: "Personal Portfolio",
        description: "Website for showcasing technology skills and personal projects.",
        language: "Javascript (React)",
        projectType: "Website",
        imgUrl: projImg4,
        content: []
    }
]

export default projects;