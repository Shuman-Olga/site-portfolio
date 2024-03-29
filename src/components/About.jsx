import { useEffect } from "react";
import AOS from "aos";
import Container from "react-bootstrap/Container";
import MyPhoto from "../assets/img/photo1657535612.jpeg";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <section id="about">
      <Container>
        <div
          data-aos="slide-right"
          className="title d-flex justify-content-end"
        >
          <div>
            <h2>Обо мне</h2>
            <hr className="style1"></hr>
          </div>
        </div>
        <div className="d-flex justify-content-between ">
          <div className="row w-100 align-items-center">
            <div className="col">
              <img
                src={MyPhoto}
                className="img-fluid img-thumbnail"
                alt="About_Us"
              />
            </div>
            <div className="col text-col">
              <p>
                Меня зовут, Ольга Шуман. Я Frontend-разработчик. В настоящее
                время работаю над web-приложением для медицинской клиники.
                Приложение записи пациентов и оформления вызовов. Использую
                React js+Node.js+MySQL.
                <br />
                <br /> Разработала сайт для клиники&nbsp;
                <a href="https://aibolit.tom.ru" className="link-secondary">
                  https://aibolit.tom.ru
                </a>
                . Использовала React js+Bootstrap+настройка SEO. Деплой на
                хостинг.
                <br />
                <br /> Учавствовала в командной разработке проекта, по изучению
                английского языка. Использовали Vue.js/Python/Django.
                <br />
                <br />
                Порядка 5 лет занимаюсь обслуживанием и развитием сайтов для
                двух компаний:&nbsp;
                <a href="https://psyvtomske.ru" className="link-secondary">
                  https://psyvtomske.ru
                </a>{" "}
                &nbsp;и&nbsp;
                <a href="https://aibolit.tom.ru" className="link-secondary">
                  https://aibolit.tom.ru
                </a>
                &nbsp;SEO и SMM продвижение (сайты находятся в топ ) в поисковых
                системах, таргетированная и контекстная реклама.
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
