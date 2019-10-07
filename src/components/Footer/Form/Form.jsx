import React from 'react';
import style from './../Footer.module.css';

import Input from './Input';
import Textarea from './Textarea';

function Form({ onSubmit }) {
    return (
        <form
            onSubmit={onSubmit}>
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
                placeholder="Message*" />

            <button type="button" className={'btn' + ' ' + 'btn-sm' + ' ' + style.pfFooterButton}>Hire me!</button>
        </form>
    );
}

export default Form;