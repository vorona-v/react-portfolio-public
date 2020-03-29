import React from 'react';
import style from './Work.module.css';

import Rectangle from "../CommonComponents/Rectangle/Rectangle";

const Work = (props) => {

    let info = [
        {title: 'UI/UX Designer', subtitle: '@Academy', time: 'Jan 2013 - Dec 2014', information: 'Lorem ipsum dolor sit amet, consectetur et incididunt ut labore et dolorea.'},
        {title: 'UI/UX Designer', subtitle: '@Academy', time: 'Jan 2013 - Dec 2014', information: 'Lorem ipsum dolor sit amet, consectetur et incididunt ut labore et dolorea.'},
        {title: 'UI/UX Designer', subtitle: '@Academy', time: 'Jan 2013 - Dec 2014', information: 'Lorem ipsum dolor sit amet, consectetur et incididunt ut labore et dolorea.'},
        {title: 'UI/UX Designer', subtitle: '@Academy', time: 'Jan 2013 - Dec 2014', information: 'Lorem ipsum dolor sit amet, consectetur et incididunt ut labore et dolorea.'},
    ];

    let infoElements = info.map(info =>
        <Rectangle title={info.title} subtitle={info.subtitle} time={info.time} information={info.information} />
    );

    return (
        <div className="container">
            <div className="pfTitle">Work</div>

            <div className={style.workRectangleWrap}>
                {infoElements}
            </div>
        </div>
    )
};

export default Work;