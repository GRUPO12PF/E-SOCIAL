import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import s from './Carousell.module.css'


const Carousell = () => {
  return (
    <Carousel>
                <div>
                    <img className={s.imag} src="https://phantom-marca.unidadeditorial.es/8aaf9a66118e335ea504d938f4686fac/resize/1320/f/jpg/assets/multimedia/imagenes/2021/11/12/16367392288904.jpg" />
                    <p className="legend">Harry Potter</p>
                </div>
                <div>
                    <img className={s.imag} src="https://consolaytablero.com/wp-content/uploads/2015/11/hunger-games-katniss.jpg" />
                    <p className="legend">Los juegos del hambre</p>
                </div>
                <div>
                    <img className={s.imag} src="https://i.blogs.es/a58267/the_lord_of_the_rings_characters/1366_2000.jpeg" />
                    <p className="legend">El Señor de los Anillos</p>
                </div>
                <div>
                    <img className={s.imag} src="https://d33wubrfki0l68.cloudfront.net/7541dea58bd9e0f2a2c64fd748ec4f29306054c8/8a445/images/gulp-banner.jpg" />
                    <p className="legend">GULP</p>
                </div>
    </Carousel>
  )
}

export default Carousell