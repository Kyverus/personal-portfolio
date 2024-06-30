import { useState, useEffect } from 'react';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

import linkedinLogo from '../assets/imgs/linkedin-light-icon.svg';
import githubLogo from '../assets/imgs/github-light-icon.svg';
import discordLogo from '../assets/imgs/discord-light-icon.svg';
import websiteLogo from '../assets/imgs/profile-picture.jpg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
            <Navbar.Brand href="#home" className='text-white'>
                <img className='profile-logo' src={websiteLogo} alt = "" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <div className='navbar-links'>
                <span className='navbar-text'>
                    <div className='social-icon'>
                        <a href='https://www.linkedin.com/in/kirlianpacibe12' target='_blank'><img src={linkedinLogo} alt = "" /></a>
                        <a href='https://github.com/kyverus' target='_blank'><img src={githubLogo} alt = "" /></a>
                        <a href='#'><img src={discordLogo} alt = "" /></a>
                    </div>
                    <button className='vvd' onClick={() => {console.log("Contact")}}><span>Contact Me!</span></button>
                </span>
            </div>
            </Navbar.Collapse>
        </Container>
        </Navbar>
  );
}