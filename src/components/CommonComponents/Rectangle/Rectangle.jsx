import React from 'react';
import style from './_Rectangle.module.scss';

const Rectangle = ({title, subtitle, time, information}) => {
    return (
        <div className={style.rectangleWrap}>
            <div className={style.rectangleItemWrap}>
                <div className={style.titleWrap}>
                    <span>{title}</span>
                    <span>{subtitle}</span>
                </div>
                <div className={style.timeWrap}>{time}</div>
                <div className={style.infoWrap}>{information}</div>
                <div className={style.roundWrap}></div>
            </div>
        </div>
    )
};

export default Rectangle;