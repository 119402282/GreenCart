import React, {FC} from 'react';
import { cleanNum, dollar } from "~utils";
import * as style from "./style.module.css"


interface IProps {
    name: string;
    emissions: {
        CO2: number;
        price: number;
        text: string;
        value: number;
    };
}


export const Badge :FC<IProps> = ({ name, emissions}) => {
    const {CO2, price, text, value} = emissions;
    return (
        <div className={style.badge}>
            <div className={style.badgeInner}>
                <img alt={name} src={"./assets/images/"+name+".svg"} />
                <h2>{cleanNum.format(value)} {text}</h2>
                <h3>{cleanNum.format(CO2)}Kg CO2</h3>
                <h3>{dollar.format(price)}</h3>
            </div>
        </div>
    );
};