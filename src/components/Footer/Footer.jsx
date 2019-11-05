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
                            <div className={style.locationIcon}><span className="far fa-map"></span></div>
                            <div className={style.locationTitle}>Location</div>
                            <div className={style.locationInfo}>324, Golden Tower, Amborkhana, Sylhet</div>
                        </div>
                        <div className={style.footerLocationBlock}>
                            <div className={style.locationIcon}><span className="far fa-envelope"></span></div>
                            <div className={style.locationTitle}>Email</div>
                            <div className={style.locationInfo}>vorona.v.w@gmail.com</div>
                        </div>
                        <div className={style.footerLocationBlock}>
                            <div className={style.locationIcon}><span className="far fa-paper-plane"></span></div>
                            <div className={style.locationTitle}>Telegram</div>
                            <div className={style.locationInfo}>+38(066) 080 3810</div>
                        </div>
                    </div>
                </div>
                <div className={style.bottomFooterWrap}></div>
            </div>
        </footer>
    )
};

export default Footer;