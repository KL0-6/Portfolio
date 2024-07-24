import { ReactNode, CSSProperties } from "react";

import "./Button.scss"

interface Props
{
    children?: ReactNode;
    style?: CSSProperties;
    onClick?: () => void;
}

const Button = ({ children, style, onClick }: Props) => 
{
    return (
        <button onClick={onClick} className="Button" style={style}>
            {children} 
        </button>    
    )
}

export default Button