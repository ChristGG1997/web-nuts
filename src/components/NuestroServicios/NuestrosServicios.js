import React from 'react'
import './NuestroServicios.css'
import computerCode from '../../assets/images/computer-code.png'
import LogoWeb from '../../assets/images/web.png'
import LogoMovil from '../../assets/images/movil.png'
import LogoDesing from '../../assets/images/desing.png'
import LogoMarketing from '../../assets/images/marketing.png'
import LogoMarca from '../../assets/images/marca.png'

function NuestrosServicios(){

    return(
        <div className="">
            <div className="backgroundServices text-center p-5">
                <h1>NUESTRO SERVICIOS</h1>
                <img src={computerCode} />
            </div>
           <div className="">
                <div className="backGray">
                    <div className="d-flex pt-3 pb-1 p-5 container">
                        <div className="d-flex m-2">
                            <img className="" width="250px" height="250" src={LogoWeb} />
                            <p className=" mt-4">Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed 
                            labore et dolore <br/>aliqua. Ut enim ad minim veniam, quis <br/>nostrud exercitation
                            ullamco laboris nisi <br/> ut aliquip ex ea commodo consequat.<br/> Duis aute irure dolor in
                            reprehenderit in <br/> voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                        </div>
                        <div className="d-flex m-2">
                            <img width="250px" height="250" src={LogoMovil} />
                            <p className="mt-4">Lorem ipsum dolor sit amet, <br/>adipiscing elit, sed 
                            labore et dolore <br/>aliqua. Ut enim ad minim veniam, quis <br/>nostrud exercitation
                            ullamco laboris nisi <br/> ut aliquip ex ea commodo consequat.<br/> Duis aute irure dolor in
                            reprehenderit in <br/> voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="d-flex pt-1 pb-1 p-5 container">
                        <div className="d-flex m-2">
                            <img width="250px" height="250"  src={LogoDesing} />
                            <p className="mt-4">Lorem ipsum dolor sit amet,  <br/>adipiscing elit, sed 
                            labore et dolore  <br/>aliqua. Ut enim ad minim veniam, quis <br/>nostrud exercitation
                            ullamco laboris nisi <br/> ut aliquip ex ea commodo consequat.<br/> Duis aute irure dolor in
                            reprehenderit in <br/> voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                        </div>
                        <div className="d-flex m-2">
                            <img width="250px" height="250"  src={LogoMarketing} />
                            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed 
                            labore et dolore magna <br/>aliqua. Ut enim ad minim veniam, quis <br/>nostrud exercitation
                            ullamco laboris nisi <br/> ut aliquip ex ea commodo consequat.<br/> Duis aute irure dolor in
                            reprehenderit in <br/> voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                        </div>
                    </div>   
                </div>
                  

                <div className="backGray">
                    <div className="d-flex pt-1 pb-1 p-5 container">
                        <div className="d-flex mt-2">
                            <img width="250px" height="250"  src={LogoMarca} />
                            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed 
                            labore et dolore magna <br/>aliqua. Ut enim ad minim veniam, quis <br/>nostrud exercitation
                            ullamco laboris nisi <br/> ut aliquip ex ea commodo consequat.<br/> Duis aute irure dolor in
                            reprehenderit in <br/> voluptate velit esse cillum dolore eu fugiat. </p>
                        </div>
                    </div> 
                </div>
                                    
           </div>
        </div>
    )
}

export default NuestrosServicios