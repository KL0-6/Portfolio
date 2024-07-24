import { ReactNode, CSSProperties } from "react"

import "./IconButton.scss"

interface Props
{
    children?: ReactNode;
    style?: CSSProperties;
    title?: string;
    onClick?: () => void;
}

const IconButton = ({ children, style, title, onClick }: Props) => 
{
    return (
        <button className="IconButton" title={title} style={style} onClick={onClick}>
            {children}
        </button>
    )
}

export default IconButton