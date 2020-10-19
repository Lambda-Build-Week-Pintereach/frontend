import React from 'react';
import '../App.css'

export default function Login(props) {
    const { values, submit, change, disabled, errors } = props;

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    };

    const onChange = (evt) => {
        const { name, value } = evt.target;
        change(name, value); 
    };

    return (
        <form id="loginform" onSubmit={onSubmit}>

            {/* RENDER VALIDATION ERRORS */}
            <div className="errors">{errors.username}</div>
            <div className="errors">{errors.password}</div>

            {/* TEXT INPUTS */}
            <label>Username:
                <input 
                value={values.username}
                onChange={onChange}
                name="username"
                type="text"
                id="username"
                />
            </label>

            <label>Password:
                <input 
                value={values.password}
                onChange={onChange}
                name="password"
                type="text"
                id="password"
                />
            </label>

            {/* DISABLE BUTTON */}
            <button id='submit' disabled={disabled}>Submit</button>

        </form>
    )
}