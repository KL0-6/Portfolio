import NavBar from "./components/NavBar"
import useResize from "./hooks/useResize";
import Home from "./pages/Home"

import "./assets/css/Page.scss"

import Projects from "./pages/Projects";
import About from "./pages/About";

function App() 
{
    const { isMobile } = useResize();

    return (
        <>
            <div className="page">
                <NavBar linkedinUrl="https://www.linkedin.com/in/kmlabib" githubUrl="https://github.com/KL0-6" isMobile={isMobile}/>
                <Home isMobile={isMobile}/>
            </div>
            
            <About/>
            <Projects/>
  
        </>
    )
}

export default App
