import './portifolio.css'
import { portfolio  } from '../../data'
import PortifolioItem from '../../components/PortifolioItem'


const Portifolio = () => {
  return (
   <section className="portfolio section">
    <h2 className="section__title">Meu <span>Portfolio</span></h2>

    <div className="portfolio__container container grid">
        {portfolio.map((item) => (
          <PortifolioItem  key={item.id} {...item}/>
        ))}
    </div>
   </section>
  )
}

export default Portifolio