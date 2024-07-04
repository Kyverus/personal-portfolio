import './Skills.css';
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import javascriptLogo from '../../assets/icons/javascript-logo.svg';
import reactLogo from '../../assets/icons/react-logo.svg';
import laravelLogo from '../../assets/icons/laravel-logo.svg';
import phpLogo from '../../assets/icons/php-logo.svg';
import unityLogo from '../../assets/icons/unity-logo.svg';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                SKILLS
                            </h2>
                            <p>
                                These are the technologies I am most familiar with as a Developer:
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={javascriptLogo} alt = ""/>
                                    <h5>Javascript</h5>
                                </div>
                                <div className="item">
                                    <img src={reactLogo} alt = ""/>
                                    <h5>React Framework</h5>
                                </div>
                                <div className="item">
                                    <img src={laravelLogo} alt = ""/>
                                    <h5>Laravel Framework</h5>
                                </div>
                                <div className="item">
                                    <img src={phpLogo} alt = ""/>
                                    <h5>PHP</h5>
                                </div>
                                <div className="item">
                                    <img src={unityLogo} alt = ""/>
                                    <h5>Unity</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="background-image-skills" src=""></div>
        </section>
      )
}