import React from 'react';
import style from './Header.module.css'

const Header = () => {
    return (
        <header className={style.headerSlideWrap}>
            <div className={style.pfHeaderTitleWrap}>
                <h1 className={style.pfHeaderTitle}>Lets Make Something Great</h1>
                <div className={style.pfHeaderSubtitle}>I’m an UI designer that prides ourself on being strategic brand partners and awesome product providers</div>
                <button type="button" className={'btn' + ' ' + 'btn-lg' + ' ' + style.pfHeaderButton}>Hire Me!</button>
            </div>
        </header>
    )
};

export default Header;