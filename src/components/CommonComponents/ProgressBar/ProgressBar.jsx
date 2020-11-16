import React from 'react';
import style from './_ProgressBar.module.scss';

const ProgressBar = ({title, width}) => {
    return (
        <div className={style.barDetails + ' ' + 'col-md-4'}>
            <div className={style.barDetailsWrap}>
                <div className={style.progressBarTitle}>{title}</div>
                <div className={style.progressBarWrap}>
                    <div className={style.progressBarStatusWrap}>
                        <div className={style.progressBarStatus} style={{width: width+'%'}}></div>
                    </div>
                    <div className={style.progressBarValue}>{width}%</div>
                </div>
            </div>
        </div>
    )
};

export default ProgressBar;