import { ReactNode, CSSProperties } from "react";

import "./Card.scss"

interface Props
{
    title: string;
    label: string;
    children?: ReactNode;
}

const Card = ({ title, label, children }: Props) => 
{
    return (
       <div className="Cards">
            <h2>{title}</h2>
            <p className="label">{label}</p>
            {children}
       </div> 
    )
}

export default Card