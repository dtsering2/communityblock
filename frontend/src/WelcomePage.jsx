import React from "react";
import "./css/WelcomePage.css"


const WelcomePage = ({ navigateToSignUp, navigateToLogin}) => {

    return(
        <>
            <div id = "welcomePage__container">
                <div id = "welcomePage__header">
                    <div id = "welcomePage_header-col1">
                        <h1 id = "appName">CommunityBlock</h1>
                    </div>
                    <div id = "welcomePage_header-col2">
                        <button 
                            id = "signUpBtn" 
                            onClick = {navigateToSignUp}
                        >
                            Sign Up
                        </button>
                    </div>
                    <div id = "welcomePage_header-col3">
                        <button 
                            id = "loginBtn" 
                            onClick = {navigateToLogin} 
                        >
                            Login
                        </button>
                    </div>
                </div>
                <div id = "welcomePage__main">
                    <div id = "welcomePage__main-col1">
                        <div id = "welcomePage__main-col1-missionStatement">
                            <h2 id = "missionStatement">
                                Connect with anyone, anywhere.
                            </h2>
                        </div>
                        <div id = "welcomePage__main-col1-description">
                            <p id = "description">
                                CommunityBlock envisions a world where 
                                you can belong to a gaming group,
                                a work space, or a worldwide community. A place where you can build your own niche to
                                connect you and your community.
                            </p>
                        </div>
                    </div>
                    <div id = "welcomePage__main-col2">
                        <div className = "welcomePage__logoIcon-container">
                            <div className = "welcomePage__logoIcon">
                                <div className="cube">
                                    <div style = {{"--x":-1, "--y":0}}>
                                        <span style = {{"--i" : 3}}></span>
                                        <span style = {{"--i" : 2}}></span>
                                        <span style = {{"--i" : 1}}></span>
                                    </div>
                                    <div style = {{"--x":0, "--y":0}}>
                                        <span style = {{"--i" : 3}}></span>
                                        <span style = {{"--i" : 2}}></span>
                                        <span style = {{"--i" : 1}}></span>
                                    </div>
                                    <div style = {{"--x":1, "--y":0}}>
                                        <span style = {{"--i" : 3}}></span>
                                        <span style = {{"--i" : 2}}></span>
                                        <span style = {{"--i" : 1}}></span>
                                    </div>
                                </div>

                                <div className = "cube">
                                    <div style = {{"--x":-1, "--y":0}}>
                                        <span style = {{"--i" : 3}}></span>
                                        <span style = {{"--i" : 2}}></span>
                                        <span style = {{"--i" : 1}}></span>
                                    </div>
                                    <div style = {{"--x":0, "--y":0}}>
                                        <span style = {{"--i" : 3}}></span>
                                        <span style = {{"--i" : 2}}></span>
                                        <span style = {{"--i" : 1}}></span>
                                    </div>
                                    <div style = {{"--x":1, "--y":0}}>
                                        <span style = {{"--i" : 3}}></span>
                                        <span style = {{"--i" : 2}}></span>
                                        <span style = {{"--i" : 1}}></span>
                                    </div>
                                </div>

                                <div className = "cube">
                                    <div style = {{"--x":-1, "--y":0}}>
                                        <span style = {{"--i" : 3}}></span>
                                        <span style = {{"--i" : 2}}></span>
                                        <span style = {{"--i" : 1}}></span>
                                    </div>
                                    <div style = {{"--x":0, "--y":0}}>
                                        <span style = {{"--i" : 3}}></span>
                                        <span style = {{"--i" : 2}}></span>
                                        <span style = {{"--i" : 1}}></span>
                                    </div>
                                    <div style = {{"--x":1, "--y":0}}>
                                        <span style = {{"--i" : 3}}></span>
                                        <span style = {{"--i" : 2}}></span>
                                        <span style = {{"--i" : 1}}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WelcomePage