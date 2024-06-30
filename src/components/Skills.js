import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import javascriptLogo from '../assets/imgs/javascript-logo.svg';
import reactLogo from '../assets/imgs/react-logo.svg';
import laravelLogo from '../assets/imgs/laravel-logo.svg';
import unityLogo from '../assets/imgs/unity-logo.svg';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
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
                                    <h5>React JS</h5>
                                </div>
                                <div className="item">
                                    <img src={laravelLogo} alt = ""/>
                                    <h5>Laravel (PHP)</h5>
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
            <div className="background-image-left" src=""></div>
        </section>
      )
}