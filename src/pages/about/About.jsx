import Info from "../../components/Info"
import { FaDownload } from 'react-icons/fa'
import CV from '../../assets/talisson-barbosa-cv.pdf'
import Stats from "../../components/Stats"
import './about.css'
import Skills from "../../components/Skills"

const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section__title">Sobre <span>Mim</span></h2>

        <div className="about__container grid">
          <div className="about__info">
            <h3 className="section__subtitle">Informações Pessoais</h3>

            <ul className="info__list grid">
              <Info />
            </ul>
            <a href={CV} download='' className="button">Download CV <span className="button__icon"><FaDownload /></span></a>
          </div>
          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </section>

      <div className="separator"></div>

      <section className="skill">
        <h3 className="section_subtitle subtitle__center">My Skills</h3>

        <div className="skills__container grid">
          <Skills />
        </div>
      </section>

      <div className="separator"></div>

      
    </main>
  )
}

export default About