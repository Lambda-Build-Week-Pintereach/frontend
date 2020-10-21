import React from 'react';
// import { useHistory } from 'react-router-dom';
import '../App.css'

export default function Login(props) {
    const { values, submit, change, disabled, errors } = props; // STEP 4

    // const history = useHistory()

    // const routeToApp = () => {
    //     history.push("/")
    // }

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    };

    const onChange = (evt) => { // STEP 6
        const { name, value } = evt.target;
        change(name, value); // STEP 6.5
    };

    return (
        <form id="loginform" onSubmit={onSubmit}> 

            {/* RENDER VALIDATION ERRORS */}
            <div className="errors">{errors.username}</div>
            <div className="errors">{errors.password}</div>

            {/* TEXT INPUTS */}
            <label>Username:
                <input 
                value={values.username} // STEP 5
                onChange={onChange} // STEP 5.5
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
            {/* add to button ^ onClick={routeToApp} */}

        </form>
    )
}