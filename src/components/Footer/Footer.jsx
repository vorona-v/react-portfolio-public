import React from 'react';
import style from './Footer.module.css';
import Form from "./Form/Form";

const Footer = () => {
    return (
        <footer className={style.footerWrap}>
            <div className="container">
                <div className={style.topFooterWrap}>
                    <div className={style.footerMessageBlock}>
                        <div className={style.messageBlockTitle}>Leave a Message</div>
                        <Form/>
                    </div>
                    <div className={style.footerLocationBlock}>
                        <div className={style.footerLocationBlock}></div>
                        <div className="fas fa-home"></div>
                    </div>
                </div>
                <div className={style.bottomFooterWrap}></div>
            </div>
        </footer>
    )
};

export default Footer;