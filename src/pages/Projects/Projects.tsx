import React, { CSSProperties } from "react"

import { openUrl } from "../../util/util";
import Card from "../../components/Card"
import IconButton from "../../components/IconButton"

import { FaGithub } from "react-icons/fa";

import "./Projects.scss"

const iconStyle: CSSProperties = 
{
    color: "white", 
    fontSize: "2em",
};

interface Props
{
    isMobile: boolean;
}

const Projects = ({ isMobile } : Props) => 
{
    return (
        <div id="projects" className="pageBodyDiv center" style={{ minHeight: "100vh" }}>
            <h1 className="pageTitle">Projects</h1>

            <div className="cardDiv">
                <Card style={{ display: "flex", flexDirection: "column" }} title="Portfolio Website" label="July 2024">
                    <p style={{ flexGrow: "1", textAlign: "left" }}>
                        The current website you're on! I created this website to showcase information about myself and provide an easy way to contact me and a resource for other developers via my blog!
                    </p>

                    <IconButton style={{ width: "48px", height: "48px", alignSelf: "center" }} title="Github" onClick={() => openUrl("https://github.com/KL0-6/Portfolio") }>
                        <FaGithub style={iconStyle}/>
                    </IconButton>
                </Card>

                <Card style={{ display: "flex", flexDirection: "column" }} title="ImGui Luau Wrapper" label="July 2024">
                    <p style={{ flexGrow: "1", textAlign: "left" }}>
                        A wrapper around ImGui for Luau that enables scripters to build and interact seamlessly with ImGui UIs. This wrapper integrates ImGui's efficient user interface capabilities with Lua, making creating efficient UIs simple.
                    </p>

                    <IconButton style={{ width: "48px", height: "48px", alignSelf: "center" }} title="Github" onClick={() => openUrl("https://github.com/KL0-6/ImGUI-Lua-Wrapper") }>
                        <FaGithub style={iconStyle}/>
                    </IconButton>
                </Card>

                <Card style={{ display: "flex", flexDirection: "column" }} title="KDE Vocabulary" label="June 2024">
                    <p style={{ flexGrow: "1", textAlign: "left" }}>
                        Created a KDE Plasma desktop environment widget that displays a random English word and its definition to help users expand their vocabulary.
                    </p>


                    <IconButton style={{ width: "48px", height: "48px", alignSelf: "center" }} title="Github" onClick={() => openUrl("https://github.com/KL0-6/KDE-Vocabulary") }>
                        <FaGithub style={iconStyle}/>
                    </IconButton>
                </Card>

                <Card style={{ display: "flex", flexDirection: "column" }} title="Luau Websockets" label="October 2023">
                    <p style={{ flexGrow: "1", textAlign: "left" }}>
                        Developed a complete API around <a className="dottedA" href="https://github.com/machinezone/IXWebSocket">ixwebsocket</a> for <a className="dottedA" href="https://github.com/Luau-lang/Luau">Luau</a>, providing users with functionality to interact with WebSocket connection. It offers a user-friendly Lua API.
                    </p>

                    <IconButton style={{ width: "48px", height: "48px", alignSelf: "center" }} title="Github" onClick={() => openUrl("https://github.com/KL0-6/LuauWebsockets") }>
                        <FaGithub style={iconStyle}/>
                    </IconButton>
                </Card>

                <Card style={{ display: "flex", flexDirection: "column" }} title="MemoryAnalyzer" label="October 2023">
                    <p style={{ flexGrow: "1", textAlign: "left" }}>
                        Created a project to disassemble applications to learn about how memory works and learn more about mnemonics!
                    </p>
    
                    <IconButton style={{ width: "48px", height: "48px", alignSelf: "center" }} title="Github" onClick={() => openUrl("https://github.com/KL0-6/MemoryAnalyzer") }>
                        <FaGithub style={iconStyle}/>
                    </IconButton>
                </Card>
            </div>

        </div>
    )
}

export default Projects