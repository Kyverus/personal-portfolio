import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/imgs/header-picture.jpg';

export const Banner = () => {
    const [loopnum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const specializations = ["A Web Developer", "An App Developer", "A Game Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval (() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)}
    })

    const tick = () => {
        let i = loopnum % specializations.length;
        let fullText = specializations[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false)
            setLoopNum(loopnum + 1);
            setDelta(500);
        }
    }


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={8}>
                        <span className="tagline">WELCOME TO MY PORFOLIO</span>
                        <h1>{`Hi, I'm  `}<span className="wrap">{text}</span></h1>
                        <p>
                            Hello, I'm Kirlian Pacibe, An Aspiring Software Developer/Engineer. I have fundamental knowledge in building simple and functional websites as well as web applications and game applications.
                            I have made personal projects regarding web and game applications futher showcased below.
                        </p>
                        <button onClick={() => console.log('connect') }>Contact Me <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={4}>
                        <img src={headerImg}/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}