import Button from '../../components/Button';

import { MdWavingHand } from 'react-icons/md';
import { FaArrowDown } from "react-icons/fa";
import { scrollToView } from '../../util/util';

import "./Home.scss"

interface Prototype
{
    isMobile: boolean,
}

const Home = ({isMobile} : Prototype) => 
{
    return (
        <div className="pageBodyDiv" style={{ flexGrow: "1" }}>
            <div className= {"center " + (isMobile ? "centerElements" : "") } style={{ flexGrow: "1" }}>
                
                <MdWavingHand className="wavingHand"/>
                
                <h1 className="title">
                    Hello, I'm KM.
                    <p className="gradientColor">Fullstack Software Developer!</p>
                </h1>

                <div className="description">
                    <p>I'm a software engineer based in New York City! I fell in love with technology { !isMobile && <br/> } at a young age and have been pursuing it ever since.</p>
                </div>

                <Button onClick={() => scrollToView("about")}>
                    Explore More!
                </Button>
            </div>
            
            {
                // Unnecessary on mobile devices due to lack of whitespace
                !isMobile && 
                (
                    <div className="end">
                        <p>Scroll down for more!</p>
                        <FaArrowDown className="icon"/>
                    </div>
                )
            }
        </div>  
    )
}

export default Home


