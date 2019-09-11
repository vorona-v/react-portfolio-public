import React from 'react';
import style from './About.module.css'

const About = () => {
    return (
        <div className={style.pfAboutWrap}>
            <div className="container">
                <div className="pfTitle">About me</div>
                <div className={style.pfAboutInfo}>Lorem ipsum dolor sit amet, ectetuer nonummy nibh euismod tincidunt ut laoreet  magna  laoreet  aliquam erat volutpat.</div>
            </div>
        </div>
    )
};

export default About;