import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import banner1 from "../../../assets/images/Banners1.jpg"
import banner2 from "../../../assets/images/Banners2.jpg"

const Carousell = () => {

  return (
    <Carousel>
      <div>
        <img className="imag" src={banner1} />
        <p className="legend">Vida Saludable</p>
      </div>
      <div>
        <img className="imag" src={banner2} />
        {/* <p className="legend"></p>*/}
      </div>

    </Carousel>

  )
}

export default Carousell
