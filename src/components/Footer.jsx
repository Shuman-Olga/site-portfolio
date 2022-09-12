import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logoTelega from '../assets/img/telegram.svg';
import logoWhatsapp from '../assets/img/whatsapp.svg';
import logoGitHub from '../assets/img/github.svg';

const Footer = () => {
  return (
    <footer id="footer">
      <Container>
        <Nav className="justify-content-center ">
          <Nav.Item className="d-flex align-items-center item-rotate  ">
            <Nav.Link href="https://tlgg.ru/@OlgaShuman">
              <img src={logoTelega} alt="logo-telegram" className="btn-animated" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="d-flex align-items-center item-rotate ">
            <Nav.Link eventKey="link-1">
              {' '}
              <img src={logoWhatsapp} alt="logo-whatsapp" className="btn-animated" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="d-flex align-items-center item-rotate">
            <Nav.Link eventKey="link-2">
              <img src={logoGitHub} alt="logo-github" className="btn-animated" />
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <div className="d-flex justify-content-center copyright-div">
          <p>
            SHUMAN OLGA<span> © 2022</span>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
