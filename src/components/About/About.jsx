import React from 'react';
import style from './About.module.css'

import photo from './Photo/Image-w.png';

const About = () => {
    return (
        <div className="container">
            <div className={style.pfAboutWrap}>
                <div className={style.pfAboutInfo}>
                    <div className="pfTitle">About me</div>
                    <div className={style.pfAboutInfoText}>Lorem ipsum dolor sit amet, ectetuer nonummy nibh euismod tincidunt ut laoreet  magna  laoreet  aliquam erat volutpat.</div>
                    <div className={style.pfAboutInfoWrap}>
                        <span className={style.pfInfoItem}><span>Name: </span>Victoria Vorona</span>
                        <span className={style.pfInfoItem}><span>Age: </span>29 Years</span>
                        <span className={style.pfInfoItem}><span>Email: </span>vorona.v.w@gmail.com</span>
                        <span className={style.pfInfoItem}><span>Web: </span>deviserweb.com</span>
                        <span className={style.pfInfoItem}><span>Telegram: </span>+38(066) 080 3810</span>
                    </div>
                </div>
                <div className={style.pfAboutPhoto}>
                    <img src={photo} alt='image' />
                </div>
            </div>
        </div>
    )
};

export default About;