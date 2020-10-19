import React from 'react';
import styled from 'styled-components';
import '../App.css'

// COMPONENT STYLING
const RegisterTitle = styled.h1`
    font-size: 25px;
`

export default function Signup(props){
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
        <div>
            <form onSubmit={onSubmit}>

            <RegisterTitle>Register:</RegisterTitle>

            {/* RENDER VALIDATION ERRORS */}
            <div className="errors">{errors.username}</div>
            <div className="errors">{errors.email}</div>
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

                <label>Email:
                    <input 
                    value={values.email}
                    onChange={onChange}
                    name="email"
                    type="email"
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
                <button id='registerBtn' disabled={disabled}>Register</button>
            </form>
        </div>
    )
}