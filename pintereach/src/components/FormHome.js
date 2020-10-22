import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import Login from './Login';
import Signup from './Register';
import loginSchema from '../validation/LoginSchema';
import registerSchema from '../validation/RegisterSchema';
import * as yup from 'yup';
import '../App.css';

// INITAL VALUES OF LOGIN FORM //
const initialLoginValues = {
  username: '',
  password: '',
}
const initialLoginErrors = {
  username: '',
  password: '',
}
const initialLoginDisabled = true

// INITIAL VALUES OF REGISTER FORM //
const initialRegisterValues = {
  username: '',
  email: '',
  password: '',
}
const initialRegisterErrors = {
  username: '',
  email: '',
  password: '',
}
const initialRegisteredDisabled = true

// INITIAL USER //
const initialLoginUser = []
const initialRegisterUser = []

export default function Form() {
  // SET USER STATE //
  const [loginUser, setLoginUser] = useState(initialLoginUser)
  const [registerUser, setRegisterUser] = useState(initialRegisterUser)
  // SET VALUE STATE // STEP 2
  const [loginValues, setLoginValues] = useState(initialLoginValues)
  const [registerValues, setRegisterValues] = useState(initialRegisterValues)
  // SET ERROR STATE //
  const [loginErrors, setLoginErrors] = useState(initialLoginErrors)
  const [registerErrors, setRegisterErrors] = useState(initialRegisterErrors)
  // SET BUTTON STATUS STATE //
  const [loginDisabled, setLoginDisabled] = useState(initialLoginDisabled)
  const [registerDisabled, setRegisteredDisabled] = useState(initialRegisteredDisabled)
  // SET ARTICLES STATE //
  const [jokes, setJokes] = useState([])

  // AUTHENTICATE USER AND RETURN TOKEN // 
  const postLoginUser = newLoginUser => {
    axios
      .post('https://pintereach1.herokuapp.com/api/login', newLoginUser)
      .then((res) => {
        console.log(res.data)
        setLoginUser([...loginUser, res.data]);
        setLoginValues(initialLoginValues);
        // useHistory to reroute to appropriate page
      })
      .catch((err) => {
        console.log(err);
      });
  }

 // CREATE USER AND RETURN TOKEN //
  const postRegisterUser = newRegisterUser => {
    axios
      .post('https://pintereach1.herokuapp.com/api/register', newRegisterUser)
      .then((res) => {
        console.log(res.data)
        setRegisterUser([...registerUser, res.data]);
        setRegisterValues(initialRegisterValues);
        // useHistory to reroute to appropriate page
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // FETCH JOKE //
  useEffect(() => {
    axios.get('https://official-joke-api.appspot.com/random_joke')
      .then(res => {
        setJokes(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  // HELPER FUNCTIONS //
  const loginInputChange = (name, value) => {
    yup
      .reach(loginSchema, name)
      .validate(value)
      .then(() => {
        setLoginErrors({
          ...loginErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setLoginErrors({
          ...loginErrors,
          [name]: err.errors[0],
        });
      });
  
    setLoginValues({
      ...loginValues,
      [name]: value 
    });
  }

  const registerInputChange = (name, value) => {
    yup
      .reach(registerSchema, name)
      .validate(value)
      .then(() => {
        setRegisterErrors({
          ...registerErrors,
          [name]:"",
        });
      })
      .catch((err) => {
        setRegisterErrors({
          ...registerErrors,
          [name]: err.errors[0],
        });
      });

      setRegisterValues({
        ...registerValues,
        [name]: value
      });
  }

  const loginFormSubmit = () => { 
    const newLoginUser = {
      username: loginValues.username.trim(),
      password: loginValues.password.trim(),
    }
    postLoginUser(newLoginUser);
  }

  const registerFormSubmit = () => {
    const newRegisterUser = {
      username: registerValues.username.trim(),
      email: registerValues.email.trim(),
      password: registerValues.password.trim(),
    }
    postRegisterUser(newRegisterUser);
  }

  // CHANGING STATUS OF LOGIN BUTTON //
  useEffect(() => {
    loginSchema.isValid(loginValues).then(valid => {
      setLoginDisabled(!valid);
    })
  }, [loginValues])

  // CHANGING STATUS OF REGISTER BUTTON //
  useEffect(() => {
    registerSchema.isValid(registerValues).then(valid => {
      setRegisteredDisabled(!valid);
    })
  }, [registerValues])

  return (
    <div className="container">
      <div className="login-register-wrapper">
        <div className="nav-buttons">
          <Link to="login"><button id='loginBtn'>Log In</button></Link>
          <Link to="register"><button id='registerBtn'>Register</button></Link>
        </div>
        <div className="form-group">
          <Route path="/login">
            <Login 
            values={loginValues}
            errors={loginErrors}
            disabled={loginDisabled}
            submit={loginFormSubmit}
            change={loginInputChange}
            />  
          </Route>
          <Route path="/register">
            <Signup 
            values={registerValues}
            errors={registerErrors}
            disabled={registerDisabled}
            submit={registerFormSubmit}
            change={registerInputChange}
            />
          </Route>
        </div>
      </div>
      {/* <div className="joke-container">
          <div className="joke-wrapper">
            {jokes.map(jokes => {
            return <Jokes 
            key={jokes.id}
            setup={jokes.setup}
            punchline={jokes.punchline}
            />
            })}
          </div>
      </div> */}
      <div className="joke-container">
        <div className="joke-wrapper">
            <p className="joke-title">Joke of the Day:</p>
            <p className="joke">{jokes.setup}</p>
            <p className="answer">{jokes.punchline}</p>
        </div>
      </div>
    </div>
  );
}
