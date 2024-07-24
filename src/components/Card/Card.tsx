import { ReactNode, CSSProperties } from "react";

import "./Card.scss"

interface Props
{
    title: string;
    label: string;
    style?: CSSProperties;
    children?: ReactNode;
}

const Card = ({ title, label, style, children }: Props) => 
{
    return (
       <div className="Cards" style={style}>
            <h2>{title}</h2>
            <p className="label">{label}</p>
            {children}
       </div> 
    )
}

export default Card