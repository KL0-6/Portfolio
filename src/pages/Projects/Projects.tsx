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

const Projects = () => 
{
    return (
        <div id="projects" className="pageBodyDiv center" style={{ minHeight: "100vh" }}>
            <h1 className="pageTitle">Projects</h1>

            <div className="cardDiv">
                <Card title="Portfolio Website" label="July 2024">
                    <p style={{ textAlign: "left" }}>
                        The current website you're on! I created this website to showcase information about myself and provide an easy way to contact me and a resource for other developers via my blog!
                    </p>

                    <IconButton style={{ width: "48px", height: "48px", }} title="Github" onClick={() => openUrl("https://cplusplus.com/") }>
                        <FaGithub style={iconStyle}/>
                    </IconButton>
                </Card>

                <Card title="ImGui Luau Wrapper" label="July 2024">
                    <p style={{ textAlign: "left" }}>
                        A wrapper around ImGui for Luau that enables scripters to build and interact seamlessly with ImGui UIs. This wrapper integrates ImGui's efficient user interface capabilities with Lua, making creating efficient UIs simple.
                    </p>
                </Card>

                <Card title="KDE Vocabulary" label="June 2024">
                    <p style={{ textAlign: "left" }}>
                        Created a KDE Plasma desktop environment widget that displays a random English word and its definition to help users expand their vocabulary.
                    </p>
                </Card>

                <Card title="Luau Websockets" label="October 2023">
                    <p style={{ textAlign: "left" }}>
                        Developed a complete API around <a className="dottedA" href="https://github.com/machinezone/IXWebSocket">ixwebsocket</a> for <a className="dottedA" href="https://github.com/Luau-lang/Luau">Luau</a>, providing users with functionality to interact with WebSocket connection. It offers a user-friendly Lua API.
                    </p>
                </Card>

                <Card title="MemoryAnalyzer" label="October 2023">
                    <p style={{ textAlign: "left" }}>
                        Created a project to disassemble applications to learn about how memory works and learn more about mnemonics!
                    </p>
                </Card>
            </div>

        </div>
    )
}

export default Projects