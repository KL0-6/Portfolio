import { useState, useEffect } from "react";

const useResize = () =>
{
    const [ size, setSize ] = useState([window.innerWidth, window.innerHeight]);

    useEffect(() => 
    {
        if(window)
        {
            window.addEventListener("resize", () => 
            {
                setSize([window.innerWidth, window.innerHeight]);
            })
        }
    }, []);

    return {size: size, isMobile: size[0] < 500 };
}

export default useResize;