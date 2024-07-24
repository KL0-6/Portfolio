import React, { CSSProperties } from "react"

import { TbBrandCpp, TbBrandTypescript, TbBrandJavascript, TbFileTypeSql } from "react-icons/tb";
import { MdOutlinePhp } from "react-icons/md";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { DiRedis } from "react-icons/di";

import { openUrl } from "../../util/util";

import "./About.scss"
import IconButton from "../../components/IconButton";

const iconStyle: CSSProperties = 
{
    color: "white", 
    fontSize: "3em",
};

const About = () => 
{
    return (
        <div id="about" className="pageBodyDiv center" style={{ minHeight: "100vh" }}>
            <div className="center" style={{ maxWidth: "80%", flexGrow: "1" }}>
                <h1 className="pageTitle">Get to know me!</h1>
                <h3 className="sectionTitle">History</h3>
                <p className="aboutMe">I'm a 17 year old highschool graduate from The Bronx, New York! I've been interested in computers ever since I was five and have been programming since I was 13.</p>

                <h3 className="sectionTitle">Hobbies</h3>
                <p className="aboutMe">Other than technology, I love to go outside and walk to relax after a long week. I'm also a skateboarder!</p>

                <h3 className="sectionTitle">Skills</h3>

                <br/>

                <div className="langDiv">
                    <IconButton title="C++" onClick={() => openUrl("https://cplusplus.com/") }>
                        <TbBrandCpp style={iconStyle}/>
                    </IconButton>

                    <IconButton title="Typescript" onClick={() => openUrl("https://www.typescriptlang.org/") }>
                        <TbBrandTypescript style={iconStyle}/>
                    </IconButton>

                    <IconButton title="Javascript" onClick={() => openUrl("https://www.javascript.com/") }>
                        <TbBrandJavascript style={iconStyle}/>
                    </IconButton>

                    <IconButton title="Php" onClick={() => openUrl("https://www.php.net/") }>
                        <MdOutlinePhp style={iconStyle}/>
                    </IconButton>

                    <IconButton title="HTML" onClick={() => openUrl("https://developer.mozilla.org/en-US/docs/Web/HTML") }>
                        <FaHtml5 style={iconStyle}/>
                    </IconButton>

                    <IconButton title="CSS" onClick={() => openUrl("https://developer.mozilla.org/en-US/docs/Web/CSS") }>
                        <FaCss3Alt style={iconStyle}/>
                    </IconButton>

                    <IconButton title="SQL" onClick={() => openUrl("https://developer.mozilla.org/en-US/docs/Glossary/SQL") }>
                        <TbFileTypeSql style={iconStyle}/>
                    </IconButton>

                    <IconButton title="Redis" onClick={() => openUrl("https://redis.io/") }>
                        <DiRedis style={iconStyle}/>
                    </IconButton>

                    <IconButton title="React.js" onClick={() => openUrl("https://react.dev/") }>
                        <FaReact style={iconStyle}/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default About