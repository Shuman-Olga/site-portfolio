import { useEffect } from 'react';
import AOS from 'aos';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import img1 from '../assets/img/helptense.png';
import img2 from '../assets/img/mysite.png';
import img3 from '../assets/img/my_github.png';

const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <section id="portfolio">
      <Container>
        <div data-aos="slide-right" className="title d-flex justify-content-end">
          <div>
            <h2>Портфолио</h2>
            <hr className="style1"></hr>
          </div>
        </div>
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card>
              <Card.Img variant="top" src={img1} />
              <Card className="card-hover">
                <Card.Body>
                  <Card.Title>Сервис для изучения английского язык</Card.Title>
                  <Card.Text>Vue.js/Python/Django </Card.Text>
                  <Card.Link href="https://languageportalf.herokuapp.com/">
                    <Button variant="outline-dark">Посмотреть</Button>
                  </Card.Link>
                </Card.Body>
              </Card>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={img2} />
              <Card className="card-hover">
                <Card.Body>
                  <Card.Title>Сайт-портфолио</Card.Title>
                  <Card.Text>React.js/Bootstrap </Card.Text>
                  <Card.Link href="">
                    <Button variant="outline-dark">Посмотреть</Button>
                  </Card.Link>
                </Card.Body>
              </Card>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img className="img-filter" variant="top" src={img3} />
              <Card className="card-hover">
                <Card.Body>
                  <Card.Title>Сервис для изучения английского язык</Card.Title>
                  <Card.Text>Vue.js/Python/Django </Card.Text>
                  <Card.Link href="https://github.com/Shuman-Olga">
                    <Button variant="outline-dark">Посмотреть</Button>
                  </Card.Link>
                </Card.Body>
              </Card>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Portfolio;
