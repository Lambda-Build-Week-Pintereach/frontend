import React, { createContext, useReducer, useContext, useEffect, useState } from 'react';
import Reducer  from './Reducer'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'

const initialState = {
    article: []
}




export const GlobalContext = createContext(initialState);


export const GlobalProvider = ({ children }) => {
    const [state,dispatch] = useReducer(Reducer, initialState);
    let history = useHistory();
    const [updated, setUpdated] = useState(false);
    let user = { id: "", email: "", firstName: "", lastName: "" };

  

    function createArticle(article, id){
        dispatch({
            type: 'CREATE_ARTICLE',
            payload: article
        })
        axiosWithAuth()
        .post(`https://pintereach0.herokuapp.com/api/articles/`)
        .then(res => {
            console.log(res)})
        
        .catch(err => {
            console.log(err)
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
            payload: article, 
        })
    }
    function login  (email, password)  {
        return axiosWithAuth()
          .post("/api/login", { email, password })
          .then((res) => {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("id", res.data.user.id);
            localStorage.setItem("email", res.data.user.email);
            setUpdated(true)
            history.push("/");
          })
          .catch((err) => console.log(err));
      };
    
      function signup ( email, username,  password)  {
        return axiosWithAuth()
          .post("/api/auth/register", {
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
      

    return (

        
    <GlobalContext.Provider value={{
        article: state.article,
        createArticle,
        editArticle,
        deleteArticle,
        signup,
        login
       
    }}>
   
        {children}
   
   
   
    </GlobalContext.Provider>
)
}