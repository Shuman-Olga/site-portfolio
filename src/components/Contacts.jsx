import { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import Container from 'react-bootstrap/Container';
import emailjs from '@emailjs/browser';

import imgMail from '../assets/img/mail.png';

const Contacts = () => {
  const form = useRef();
  const [message, setMessage] = useState('');
  const [successful, setSuccessful] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setMessage('');
    setSuccessful(false);
    emailjs
      .sendForm('service_0lb2x7w', 'template_5zvvxl9', form.current, 'WPzV1jZB5CfTQ-Zv2')
      .then((response) => {
        console.log('Сообщение отправлено!', response.status, response.text, response);
        setMessage('Сообщение отправлено!');
        setSuccessful(true);
        setTimeout(() => {
          setMessage('');
          setSuccessful(false);
        }, 3000);
      })
      .catch((err) => {
        console.log('Упс! Ошибочка...', err);
      });
  };

  return (
    <section id="contacts">
      <Container>
        <div data-aos="slide-right" className="title d-flex justify-content-end">
          <div>
            <h2>Контакты</h2>
            <hr className="style1"></hr>
          </div>
        </div>
        <div className="d-flex justify-content-between ">
          <form className="w-60 row g-3" ref={form} onSubmit={sendEmail}>
            {!successful && (
              <>
                <p>Напишите мне письмо</p>
                <div className="col-md-4 ">
                  <div className="mb-4">
                    <input
                      id="name"
                      type="text"
                      name="user_name"
                      className="form-control"
                      placeholder="Имя"
                    />
                  </div>
                  <div className=" mb-4">
                    <input
                      id="email"
                      type="email"
                      name="user_email"
                      className="form-control"
                      placeholder="E-mail"
                    />
                  </div>
                </div>
                <div className="col mb-3">
                  <textarea
                    id="message"
                    className="form-control "
                    name="message"
                    placeholder="Сообщение"
                  ></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-dark">
                    Отправить
                  </button>
                </div>
              </>
            )}
            {message && (
              <div className="col d-flex justify-content-end" data-aos="slide-right">
                <div className={successful ? 'alert ' : 'alert alert-danger'} role="alert">
                  <img src={imgMail} alt="img-email" />
                </div>
              </div>
            )}
          </form>
          <div className="d-flex vr-w">
            <div className="vr"></div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Contacts;
