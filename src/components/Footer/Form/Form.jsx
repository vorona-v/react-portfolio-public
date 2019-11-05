import React from 'react';
import style from './../Footer.module.css';

import Input from './Input';
import Textarea from './Textarea';

function Form({ onSubmit }) {
    return (
        <form
            onSubmit={onSubmit}

           className={style.formWrap}>
            <Input
                type="text"
                id="name"
                placeholder="Name*" />

            <Input
                id="email"
                type="email"
                placeholder="Email*" />

            <Textarea
                id="text"
                type="textarea"
                rows="10"
                placeholder="Message*" />

            <button type="button" className={'btn' + ' ' + 'btn-sm' + ' ' + style.footerButton}>Hire me!</button>
        </form>
    );
}

export default Form;