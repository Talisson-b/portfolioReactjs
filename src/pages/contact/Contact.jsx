import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaWhatsapp
} from 'react-icons/fa'

import {FiSend} from 'react-icons/fi'
import './contact.css'
import emailjs from '@emailjs/browser'
import {useRef} from 'react'

const Contact = () => {
const form = useRef();

const sendEmaill = (e) => {
  e.preventDefault()

  emailjs.sendForm('service_cc9zgwa', 'template_1ezvm5f', form.current, 'vZUYxHcIUNpjPDFKX')
 .then((result) => {
    console.log(result.text)
 })
 .catch((error) => {
  console.log(error)
 })
}
  
  return (
    <section className="contact section">
      <h2 className="section__title">
        Entrar em <span>Contato</span>
      </h2>

      <div className="contact__container grid container">
        <div className="contact__data">
          <h3 className="contact__title">Não seja tímido</h3>

          <p className="contact__description">
          sinta-se à vontade para entrar em contato comigo. Estou sempre aberto para discutir novos projetos, ideias criativas ou oportunidades para fazer parte da sua empresa !!
          </p>

          <div className="contact__info">
          <div className="info__item">
              <FaEnvelopeOpen className='info__icon' />

              <div>
                <span className="info__title">envie-me um e-mail</span>
                <h4 className="info__description"> talisson422@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className='info__icon' />

              <div>
                <span className="info__title">Me ligue</span>
                <h4 className="info__description">(11) 93049-9961</h4>
              </div>
            </div>

          </div>

          <div className="contact_socials">
            <a href="https://linkedin.com/in/talisson-barbosa-404a93175" target='blank' className="contact__social-link">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Talisson-b" target='blank' className="contact__social-link">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/_talissonb/" className="contact__social-link" target='blank'>
              <FaInstagram />
            </a>
            <a href="https://api.whatsapp.com/send?phone=+5511930499961&text=Ol%C3%A1%20talisson"
            target='blank'
            className="contact__social-link">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <form onSubmit={sendEmaill} ref={form}className='contact__form'>
            <div className="form__input-group">
              <div className="form__input-div">
                <input type="text" className='form__control' placeholder='Seu Nome' name='to_name' />
              </div>
              <div className="form__input-div">
                <input type="email" className='form__control' placeholder='Seu Email' name='email' />
              </div>
              <div className="form__input-div">
                <input type="text" className='form__control' placeholder='Assunto' name='assunto' />
              </div>
            </div>
            
            <div className="form__input-div">
              <textarea placeholder='Sua Mensagem' className="form__control textarea" name='message'></textarea>
            </div>
            <button  className='button'>Enviar Mensagem
            <span className='button__icon contact__button-icon'> <FiSend /></span></button>
        </form>
      </div>
    </section>
  )
}

export default Contact