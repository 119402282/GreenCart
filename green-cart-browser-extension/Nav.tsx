import React, {FC} from 'react';

import * as style from "./style.module.css"

interface IProps {
}


export const Nav :FC<IProps> = () => {

    return (
        <header>
            <nav>
                <ul className={style.navList}>
                    <li style={{
                        paddingLeft:"4rem",
                        paddingRight:"4rem",
                    }} className={style.navItem}><a href="#">Login</a></li>
                    <li className={style.navItem}>
                        <a href="#">
                            <img alt="Share" src={"./assets/images/share.svg"} />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};