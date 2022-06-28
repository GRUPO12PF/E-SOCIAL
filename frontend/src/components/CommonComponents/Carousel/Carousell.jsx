import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import ban01 from "../../../assets/images/ban01.png"
import ban02 from "../../../assets/images/ban02.png"
import ban03 from "../../../assets/images/ban03.png"
import ban04 from "../../../assets/images/ban04.png"
import ban05 from "../../../assets/images/ban05.png"
import ban06 from "../../../assets/images/ban06.png"
import ban07 from "../../../assets/images/ban07.png"
import ban08 from "../../../assets/images/ban08.png"
import ban09 from "../../../assets/images/ban09.png"
import ban10 from "../../../assets/images/ban10.png"
import ban11 from "../../../assets/images/ban11.png"

const Carousell = () => {

  return (


    <div className="slider">
    <div className="slide-track">
      <div className="slide">
        <img src={ban01} height="200" width="250" alt="" />
      </div>
      <div className="slide">
        <img src={ban02} height="200" width="250" alt="" />
      </div>
      <div className="slide">
        <img src={ban03} height="200" width="250" alt="" />
      </div>
      <div className="slide">
        <img src={ban04} height="200" width="250" alt="" />
      </div>
      <div className="slide">
        <img src={ban05} height="200" width="250" alt="" />
      </div>
      <div className="slide">
        <img src={ban06} height="200" width="250" alt="" />
      </div>
      <div className="slide">
        <img src={ban07} height="200" width="250" alt="" />
      </div>
      <div className="slide">
        <img src={ban08} height="200" width="250" alt="" />
      </div>
      <div className="slide">
        <img src={ban09} height="200" width="250" alt="" />
      </div>
      <div className="slide">
        <img src={ban10} height="200" width="250" alt="" />
      </div>
      <div className="slide">
        <img src={ban11} height="200" width="250" alt="" />
      </div>
      {/* <div className="slide">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
      </div>
      <div className="slide">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
      </div>
      <div className="slide">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
      </div> */}
    </div>
  </div>
    // <Carousel>
    //   <div>
    //     <img className="imag" src={banner1} />
    //     <p className="legend">Vida Saludable</p>
    //   </div>
    //   <div>
    //     <img className="imag" src={banner2} />
       
    //   </div>

    // </Carousel>

  )
}

export default Carousell
