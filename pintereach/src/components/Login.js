import React from 'react';
import styled from 'styled-components';
import '../App.css'

// COMPONENT STYLING
const LoginTitle = styled.h1`
    font-size: 25px;
`

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
        <form onSubmit={onSubmit}>

            <LoginTitle>Login:</LoginTitle>

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
                />
            </label>

            <label>Password:
                <input 
                value={values.password}
                onChange={onChange}
                name="password"
                type="text"
                />
            </label>

            {/* DISABLE BUTTON */}
            <button id='loginBtn' disabled={disabled}>Log In</button>

        </form>
    )
}