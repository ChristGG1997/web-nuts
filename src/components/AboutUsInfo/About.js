import React from 'react'
import './About.css'

function About(){

    return(
        <div className="container mt-5">
            <div className="text-center">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
            <div className="text-center secText mt-3">
                <p>Have a question? Check out the F.A.Q</p>
            </div>
            <div className="d-flex text-center mt-3">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <h1 className="text-center mt-5">TEAM</h1>
            <div className="d-flex mb-5 justify-content-center">
                <div className="m-5">
                    <div className="foto m-0"></div>
                    <div className="m-2">
                        <h2 className="m-0">Sebastian Gutierrez</h2>
                        <p className="secText m-0">CEO</p>
                        <p className="m-0">@SaboTak</p>
                    </div>
                </div>
                <div className="m-5">
                    <div className="foto m-0"></div>
                    <div className="m-2">
                        <h2 className="m-0">Christian Iglesias</h2>
                        <p className="secText m-0">Founder</p>
                        <p className="m-0">@ChristGG</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default About