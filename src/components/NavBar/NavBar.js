import './NavBar.css';
import { useState, useEffect } from 'react';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import linkedinLogo from '../../assets/icons/linkedin-light-icon.svg';
import githubLogo from '../../assets/icons/github-light-icon.svg';
import discordLogo from '../../assets/icons/discord-light-icon.svg';
import websiteLogo from '../../assets/imgs/profile-picture.jpg';

export const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [expanded, setExpanded] = useState(false);

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

    return (
        <>
        <Navbar expand="lg" aria-expanded={`${expanded}`} className={scrolled ? "scrolled" : ""}>
        <Container >
            <Navbar.Brand href="#home" className='text-white'>
                <img className='profile-logo' src={websiteLogo} alt = "" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" aria-expanded={`${expanded}`} onClick={() => setExpanded(!expanded)}>
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink  to='/' className={({isActive}) => isActive? 'nav-link navbar-link active' : 'nav-link navbar-link'}>Home</NavLink>
                    <NavLink  to='/about' className={({isActive}) => isActive? 'nav-link navbar-link active' : 'nav-link navbar-link'}>About</NavLink>
                    <NavLink  to='/projects' className={({isActive}) => isActive? 'nav-link navbar-link active' : 'nav-link navbar-link'}>Projects</NavLink>
                    <NavLink  to='#' className={({isActive}) => isActive? 'nav-link navbar-link active' : 'nav-link navbar-link'}>Contacts</NavLink>
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
        </>
  );
}