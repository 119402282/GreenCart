import React, {FC} from 'react';
import { cleanNum, dollar } from '~utils';


import * as style from "./style.module.css"


interface IProps {
    offsetKg: number;
    totalEuro: number;
    onClick: () => void;
}


export const Main :FC<IProps> = ({ offsetKg, totalEuro, onClick }) => {

    return (
        <main className={style.main}>
            <img className={style.icon} alt="greencart" src="./assets/images/icon.png" />
            <div className={style.hero}>
                <h1 onClick={()=>onClick()}>GREENCART</h1>
                <p>{cleanNum.format(offsetKg)}Kg <span style={{fontSize: "2.75rem", fontWeight: "100 !important", lineHeight: "2.75rem"}}>|</span> {dollar.format(totalEuro)}</p>
            </div>
        </main>
    );
};

