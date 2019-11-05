import React from 'react';

function Textarea({ name, type, placeholder }) {
    return (
        <div className="form-group">
            <textarea
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

export default Textarea;