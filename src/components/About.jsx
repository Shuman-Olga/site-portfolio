import { useEffect } from 'react';
import AOS from 'aos';
import Container from 'react-bootstrap/Container';
import MyPhoto from '../assets/img/photo1657535612.jpeg';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <section id="about">
      <Container>
        <div data-aos="slide-right" className="title d-flex justify-content-end">
          <div>
            <h2>Обо мне</h2>
            <hr className="style1"></hr>
          </div>
        </div>
        <div className="d-flex justify-content-between ">
          <div className="row w-100 align-items-center">
            <div className="col">
              <img src={MyPhoto} className="img-fluid img-thumbnail" alt="About_Us" />
            </div>
            <div className="col text-col">
              <p>
                Меня зовут, Шуман Ольга. Я Frontend-разработчик. В настоящее время работаю над
                проектом по разработке сайта для компании, предоставляющей медицинские услуги.
                Учувствовала в командной разработке, проект по изучению иностранных языков. Порядке
                5 лет занимаюсь поддержкой, продвижением и дизайном сайтов на платформах Wix,
                WordPress.
              </p>
            </div>
          </div>
          <div className="d-flex vr-w">
            <div className="vr"></div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
