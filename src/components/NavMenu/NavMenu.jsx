import React from 'react';
import style from './_NavMenu.module.scss';
import {NavLink} from "react-router-dom";

const NavMenu = () => {
    return (
        <nav className={style.nav}>
            <div className={style.link}>
                <NavLink to="/about" activeClassName={style.active}>About me</NavLink>
            </div>
            <div className={style.link}>
                <NavLink to="/education" activeClassName={style.active}>Education</NavLink>
            </div>
            <div className={style.link}>
                <NavLink to="/work" activeClassName={style.active}>Work experience</NavLink>
            </div>
            <div className={style.link}>
                <NavLink to="/skills" activeClassName={style.active}>Skills</NavLink>
            </div>
            <div className={style.link}>
                <NavLink to="/portfolio" activeClassName={style.active}>Portfolio</NavLink>
            </div>
            <div className={style.link}>
                <NavLink to="/contacts" activeClassName={style.active}>Contacts</NavLink>
            </div>
        </nav>
    )
};

export default NavMenu;