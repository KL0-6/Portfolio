import { useState } from "react";

import Logo from "./../../assets/images/logo.png"

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";

import { openUrl, scrollToView } from "../../util/util";

import "./NavBar.scss"


interface Props
{
    githubUrl: string,
    linkedinUrl: string,
    isMobile: boolean,
}

const iconStyle = 
{
    color: "white", 
    fontSize: "2em" 
};


const NavBar = ({githubUrl, linkedinUrl, isMobile} : Props) => 
{
    const [ extendNav, setExtendNav ] = useState(false);

    return (
        <>
            <nav className="navbar">
                <img src={Logo}></img>

                {
                    isMobile ? 
                    (
                        <button className="menu" onClick={() => setExtendNav(!extendNav) }>
                            <CiMenuBurger style={iconStyle}/>
                        </button>
                    ) :
                    ( 
                        <>
                            <ul>
                                <li><button className="navButton" onClick={() => scrollToView("about")}>About</button></li>
                                <li><button className="navButton" onClick={() => scrollToView("projects")}>Projects</button></li>
                                <li><button className="navButton">Blog</button></li>
                            </ul>

                            <button className="socials" onClick={() => openUrl(githubUrl) }>
                                <FaGithub style={iconStyle}/>
                            </button>

                            <button className="socials" onClick={() => openUrl(linkedinUrl) }>
                                <FaLinkedin style={iconStyle}/>
                            </button>
                        </>
                    )
                }
            </nav>
            {
                // Mobile Nav Bar

                (extendNav && isMobile) && 
                (
                    <div className="navbar">
                            <ul>
                                <li><button className="navButton" onClick={() => scrollToView("about")}>About</button></li>
                                <li><button className="navButton" onClick={() => scrollToView("projects")}>Projects</button></li>
                                <li><button className="navButton">Blog</button></li>
                            </ul>
                    </div>
                )
            }
        </>
        
    )
}

export default NavBar