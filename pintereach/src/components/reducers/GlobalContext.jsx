import React, { createContext, useReducer, useContext, useEffect, useState } from 'react';
import Reducer  from './Reducer'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'

const initialState = {
    article: []
}

const LoginContext = React.createContext();
const SignupContext = React.createContext();

export const useLogin = () => {
    return useContext(LoginContext);
  };

export const useSignup = () => {
    return useContext(SignupContext);
  };
  

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
    const [state,dispatch] = useReducer(Reducer, initialState);
    let user = { id: "", email: "", firstName: "", lastName: "" };
    let history = useHistory();
    const [updated, setUpdated] = useState(false);

    const login = (email, password) => {
        return axiosWithAuth()
          .post("/api/login", { email, password })
          .then((res) => {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("firstName", res.data.user.firstName);
            localStorage.setItem("lastName", res.data.user.lastName);
            localStorage.setItem("id", res.data.user.id);
            localStorage.setItem("email", res.data.user.email);
            setUpdated(true)
            history.push("/");
          })
          .catch((err) => console.log(err));
      };

      const signup = ( email, username,  password) => {
        return axiosWithAuth()
          .post("/api/register", {
            email,
            username,
            password,
          })
          .then((res) => {
            console.log(res);
            history.push("/");
          })
          .catch((err) => console.log(err));
      };
    

    function createArticle(article){
        dispatch({
            type: 'CREATE_ARTICLE',
            payload: article
        })
    }

    function deleteArticle(id) {
        dispatch({
            type: 'DELETE_ARTICLE',
            payload: id
        });
    };
 

    function editArticle(article){
        dispatch({
            type: 'EDIT_ARTICLE',
            payload: article
        })
    }

    return (<GlobalContext.Provider value={{
        article: state.article,
        createArticle,
        editArticle,
        deleteArticle
    }}>
        {children}
    </GlobalContext.Provider>);
}

