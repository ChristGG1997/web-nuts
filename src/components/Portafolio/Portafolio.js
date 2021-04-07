import React from 'react'
import './Portafolio.css'
import LogoProtafolio from '../../assets/images/logo-portafolio.png'
import Imgport1 from '../../assets/images/portafolio/Drone.jpg'
import Imgport2 from '../../assets/images/portafolio/I&Sservices.jpg'
import Imgport3 from '../../assets/images/portafolio/CarWraps.jpg'
import Imgport4 from '../../assets/images/portafolio/BabyBoomers.jpg'
import Imgport5 from '../../assets/images/portafolio/CesarBike.jpg'
import Imgport6 from '../../assets/images/portafolio/RicardoPA.jpg'
import Imgport7 from '../../assets/images/portafolio/Insurance.jpg'
// import Imgport8 from '../../assets/images/portafolio/Vida.jpg'
import Imgport9 from '../../assets/images/portafolio/LuisPinate.jpg'
import Imgport10 from '../../assets/images/portafolio/CarolynSosa.jpg'



function Portafolio(){

    return(
        <div className="">
            <div className="container mt-5">
                <div className="d-flex justify-content-center titlePort">
                    <img src={LogoProtafolio} />
                    <div className="text-center mt-3 m-5">
                        <h1>PORTAFOLIO</h1>
                    </div>
                </div>
            </div>
                <div className="backGray">
                    <div className="container">
                        <div className="d-flex justify-content-center mt-2">
                            <img className="imagesPort m-5" src={Imgport1} />
                            <img className="imagesPort m-5" src={Imgport2} />
                        </div>

                        <div className="d-flex justify-content-center">
                            <img className="imagesPort m-5" src={Imgport3} />
                            <img className="imagesPort m-5" src={Imgport4} />
                        </div>

                        <div className="d-flex justify-content-center">
                            <img className="imagesPort m-5" src={Imgport5} />
                            <img className="imagesPort m-5" src={Imgport6} />
                        </div>

                        <div className="d-flex justify-content-center">
                            <img className="imagesPort m-5" src={Imgport7} />
                            <img className="imagesPort m-5" src={Imgport7} />
                        </div>

                        <div className="d-flex justify-content-center">
                            <img className="imagesPort m-5" src={Imgport9} />
                            <img className="imagesPort m-5" src={Imgport10} />
                        </div>
                        
                    </div>
                </div>
        </div>

    )
}


export default Portafolio