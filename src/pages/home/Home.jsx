/* eslint-disable react/no-unescaped-entities */
import Profile from '../../assets/home.png'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import './home.css'
import {useTypewriter} from 'react-simple-typewriter'



const Home = () => {

const [text] = useTypewriter({
  words:["Talisson", "barbosa"],
  loop: 'infinitely',
  cursor: true,
  cursorStyle: '|',
  typeSpeed:150,
  deleteSpeed:50,
  delaySpeed:1000,


})

  return (
   <section className="home section grid">
    <img src={Profile} alt="" className="home__img" />

    <div className="home__content">
      <div className="home__data">
         <h1 className='home__title home__titlee'>
           <span>{text}|</span> 
         </h1>
        <h1 className="home__title">   
         Web Developer</h1>
        <p className="home__description">
        "Transformando linhas de código em experiências digitais incríveis. Bem-vindo ao meu portfólio, onde a criatividade se une à funcionalidade para criar soluções web que impressionam e entregam resultados. Explore meu trabalho e descubra como posso dar vida às suas ideias online."
        </p>

        <Link to='/about' className='button'>
          Mais sobre mim <span className='button__icon'> <FaArrowRight /> </span>
        </Link>
      </div>
    </div>

    <div className="color__block">
      
    </div>
   </section>
  )
}

export default Home