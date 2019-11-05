import React from 'react';

function Input({ name, type, placeholder }) {
    return (
        <div className="form-group">
            <input
                id={name}
                className="form-control"
                autoComplete="false"
                required
                type={type}
                placeholder={placeholder}
            />
        </div>
    );
}

export default Input;