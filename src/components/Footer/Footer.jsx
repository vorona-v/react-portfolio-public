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
                    <div className={style.footerInfoBlock}>
                        <div className={style.footerLocationBlock}>
                            <div className="fas fa-home"></div>
                            <div className={style.pfTitle}>Location</div>
                            <div className={style.pfInfo}>324, Golden Tower, Amborkhana, Sylhet</div>
                        </div>
                        <div className={style.footerLocationBlock}>
                            <div className="fas fa-envelope"></div>
                            <div className={style.pfTitle}>Email</div>
                            <div className={style.pfInfo}>vorona.v.w@gmail.com</div>
                        </div>
                        <div className={style.footerLocationBlock}>
                            <div className="fas fa-paper-plane"></div>
                            <div className={style.pfTitle}>Telegram</div>
                            <div className={style.pfInfo}>+38(066) 080 3810</div>
                        </div>
                    </div>
                </div>
                <div className={style.bottomFooterWrap}></div>
            </div>
        </footer>
    )
};

export default Footer;