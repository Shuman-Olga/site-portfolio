import { useEffect } from 'react';
import AOS from 'aos';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import img1 from '../assets/img/skills/skills-frontend.png';
import img2 from '../assets/img/skills/skills-backend.png';
import img3 from '../assets/img/skills/skills-hard.png';
import img4 from '../assets/img/skills/skills-soft.png';

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <section id="skills">
      <Container>
        <div data-aos="slide-right" className="title d-flex justify-content-end">
          <div>
            <h2>Skills</h2>
            <hr className="style1"></hr>
          </div>
        </div>
        <Row xs={1} md={4} className="g-4">
          <Col>
            <Card>
              <Card.Img variant="top" src={img1} />
              <Card.Body>
                <Card.Title>Hard skills/front-end</Card.Title>
                <p>HTML5</p>
                <p>CSS3/SASS?SCSS</p>
                <p>Java Script ES6</p>
                <p>React js</p>
                <p>Vue.js</p>
                <p>Bootstrap</p>
                <p>GitHub</p>
                <p>Sublime Merge</p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={img2} />
              <Card.Body>
                <Card.Title>Hard skills/backend</Card.Title>
                <p>Node js</p>
                <p>Express</p>
                <p>Sequelize</p>
                <p>MySQL</p>
                <p>PostgreSQL</p>
                <p>Postman</p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={img3} />
              <Card.Body>
                <Card.Title>Skills</Card.Title>
                <p>Figma</p>
                <p>Trello</p>
                <p>Adobe Photoshop</p>
                <p>VS Code</p>
                <p>SEO</p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={img4} />
              <Card.Body>
                <Card.Title>Soft skills</Card.Title>
                <p>Умение работать в команде</p>
                <p>Стремление к саморазвитию</p>
                <p>Ответственность</p>
                <p>Активная позиция</p>
                <p>Стрессоустойчивость</p>
                <p>Тайм-менеджмент</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
