import React from 'react';
import '../App.css'
// import { useHistory } from "react-router-dom";

export default function Signup(props){
    const { values, submit, change, disabled, errors } = props;

    // const history = useHistory()

    // const routeToApp = () => {
    //     history.push("/")
    // }

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
            <form id="registerform" onSubmit={onSubmit}>

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
                    id="username"
                    />
                </label>

                <label>Email:
                    <input 
                    value={values.email}
                    onChange={onChange}
                    name="email"
                    type="email"
                    id="email"
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
                {/* add to button ^ onClick={routeToApp} */}

            </form>
        </div>
    )
}