import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import s from './Carousell.module.css'

const Carousell = () => {

  return (
    <Carousel>
      <div>
        <img className="imag " src="https://i.pinimg.com/originals/ba/26/8c/ba268c0cf6b390a2194806b1483946eb.gif" />
        <p className="legend">Harry Potter</p>
      </div>
      <div>
        <img className="imag" src="https://i.pinimg.com/originals/9d/5f/03/9d5f03787e7bb953df208c3d6a6a24aa.jpg" />
        <p className="legend">Los juegos del hambre</p>
      </div>
      <div>
        <img className="imag" src="https://i.3djuegos.com/juegos/9280/mount__blade_ii_bannerlord/fotos/maestras/mount__blade_ii_bannerlord-5133383.jpg" />
        <p className="legend">El Señor de los Anillos</p>
      </div>
      <div>
        <img className="imag" src="https://d33wubrfki0l68.cloudfront.net/7541dea58bd9e0f2a2c64fd748ec4f29306054c8/8a445/images/gulp-banner.jpg" />
        <p className="legend">GULP</p>
      </div>
    </Carousel>

  )
}

export default Carousell
