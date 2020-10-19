import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Login from './components/Login';
import Signup from './components/Register';
import loginSchema from './validation/LoginSchema';
import registerSchema from './validation/RegisterSchema'
import * as yup from 'yup';
// import styled from 'styled-components';

// COMPONENT STYLING

// INITAL VALUES OF LOGIN FORM
const initialLoginValues = {
  username: '',
  password: '',
}
const initialLoginErrors = {
  username: '',
  password: '',
}
const initialLoginDisabled = true

// INITIAL VALUES OF REGISTER FORM
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

// INITIAL USER
const initialLoginUser = []
const initialRegisterUser = []

export default function App() {
  // SET USER STATE
  const [loginUser, setLoginUser] = useState(initialLoginUser)
  const [registerUser, setRegisterUser] = useState(initialRegisterUser)
  // SET VALUE STATE
  const [loginValues, setLoginValues] = useState(initialLoginValues)
  const [registerValues, setRegisterValues] = useState(initialRegisterValues)
  // SET ERROR STATE
  const [loginErrors, setLoginErrors] = useState(initialLoginErrors)
  const [registerErrors, setRegisterErrors] = useState(initialRegisterErrors)
  // SET BUTTON STATUS STATE
  const [loginDisabled, setLoginDisabled] = useState(initialLoginDisabled)
  const [registerDisabled, setRegisteredDisabled] = useState(initialRegisteredDisabled)

  const postLoginUser = newLoginUser => {
    axios
      .post('https://reqres.in/api/users', newLoginUser)
      .then((res) => {
        console.log(res.data)
        setLoginUser([...loginUser, res.data]);
        setLoginValues(initialLoginValues);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const postRegisterUser = newRegisterUser => {
    axios
      .post('https://reqres.in/api/users', newRegisterUser)
      .then((res) => {
        console.log(res.data)
        setRegisterUser([...registerUser, res.data]);
        setRegisterValues(initialRegisterValues);
      })
      .catch((err) => {
        console.log(err);
      });
  }

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

  // CHANGING STATUS OF LOGIN BUTTON
  useEffect(() => {
    loginSchema.isValid(loginValues).then(valid => {
      setLoginDisabled(!valid);
    })
  }, [loginValues])

  // CHANGING STATS OF REGISTER BUTTON
  useEffect(() => {
    registerSchema.isValid(registerValues).then(valid => {
      setRegisteredDisabled(!valid);
    })
  }, [registerValues])

  return (
    <div>
      <Login 
      values={loginValues}
      errors={loginErrors}
      disabled={loginDisabled}
      submit={loginFormSubmit}
      change={loginInputChange}
      />
      <Signup 
      values={registerValues}
      errors={registerErrors}
      disabled={registerDisabled}
      submit={registerFormSubmit}
      change={registerInputChange}
      />
    </div>
  );
}
