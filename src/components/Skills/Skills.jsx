import React from 'react';
import style from './_Skills.module.scss';
import ProgressBar from "../CommonComponents/ProgressBar/ProgressBar";

const Skills = () => {

    let info = [
        {title: 'UI/UX Designer', width: '100'},
        {title: 'UI/UX Designer', width: '95'},
        {title: 'UI/UX Designer', width: '90'},
        {title: 'UI/UX Designer', width: '85'},
        {title: 'UI/UX Designer', width: '80'},
        {title: 'UI/UX Designer', width: '75'},
        {title: 'UI/UX Designer', width: '75'},

    ];

    let skillsBarElements = info.map(info =>
        <ProgressBar title={info.title} width={info.width} />
    );

    return (
        <div className="container">
            <div className="pfTitle">My Skills</div>

            <div className={style.skillsWrap}>
                <div className="row">
                    {skillsBarElements}
                </div>
            </div>
        </div>
    )
};

export default Skills;