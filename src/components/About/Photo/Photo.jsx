import React from 'react';
import style from './_Photo.module.scss'
import photo from './Image-w.png';

const Photo = () => {
    return (
        <div className={style.photoWrap}>
            <img src={photo} alt="photo" />
            <div className={style.pfAuthorNameWrap}>
                <span className={style.pfAuthorName}>Victoria Vorona</span>
                <span className={style.pfAuthorPosition}>WEB developer</span>
            </div>
        </div>
    )
};

export default Photo;