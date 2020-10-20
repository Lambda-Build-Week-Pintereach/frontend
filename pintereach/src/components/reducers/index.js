import {
    ADD_BOARD_START,
    ADD_BOARD_SUCCESS,
    ADD_ARTICLE_START,
    ADD_ARTICLE_SUCCESS,
    DELETE_START,
    DELETE_SUCCESS,
    FETCH_CATEGORIES_START,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_DATA_FAILURE,
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGOUT_START,
    LOGOUT_SUCCESS,
    SIGNUP_START,
    FETCH_DATA2_START,
    FETCH_DATA2_SUCCESS
  } from "../actions";
  
  const initialState = {
    boards: [],
    articles: [],
    allArticles: [],
    error: "",
    message: "",
    token: localStorage.getItem("token"),
    id: localStorage.getItem("id"),
    errorStatusCode: null,
    addingStudy: false,
    loggingIn: false,
    fetchingArticles: false,
    signingUp: false,
    deletingArticle: false,
    loggingOut: false,
    addingBoard: false,
    fetchingBoards: false,
    fetchingAllArticles: false
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_START:
        return {
          ...state,
          loggingIn: true
        };
      case SIGNUP_START:
        return {
          ...state,
          loggingIn: true,
          signingUp: true
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          loggingIn: false,
          token: action.payload.token,
          message: action.payload.message,
          id: action.payload.id
        };
      case FETCH_DATA_START:
        return {
          ...state,
          fetchingArticles: true
        };
      case FETCH_CATEGORIES_START:
        return {
          ...state,
          fetchingBoards: true
        };
      case FETCH_CATEGORIES_SUCCESS:
        return {
          ...state,
          error: "",
          errorStatusCode: null,
          fetchingArticles: false,
          fetchingBoards: false,
          boards: action.payload
        };
      case FETCH_DATA2_START:
        return {
          ...state,
          fetchingAllArticles: true
        };
      case FETCH_DATA2_SUCCESS:
        return {
          ...state,
          error: "",
          errorStatusCode: null,
          fetchingAllArticles: false,
          allArticles: action.payload
        };
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          error: "",
          errorStatusCode: null,
          fetchingArticles: false,
          articles: action.payload
        };
      case FETCH_DATA_FAILURE:
        return {
          ...state,
          error: action.payload.status,
          errorStatusCode: action.payload.status,
          fetchingArticles: false
        };
      case DELETE_START:
        return {
          ...state,
          deletingArticle: true
        };
      case DELETE_SUCCESS:
        return {
          ...state,
          deletingArticle: false,
          error: "",
          errorStatusCode: null,
          articles: action.payload
        };
      case ADD_ARTICLE_START:
        return {
          ...state,
          addingArticle: true
        };
      case ADD_ARTICLE_SUCCESS:
        return {
          ...state,
          addingArticle: false
        };
      case LOGOUT_START:
        return {
          ...state,
          loggingOut: true
        };
      case LOGOUT_SUCCESS:
        return {
          ...state,
          logginOut: false
        };
      case ADD_BOARD_START:
        return {
          ...state,
          addingBoard: true
        };
      case ADD_BOARD_SUCCESS:
        return {
          ...state,
          addingBoard: false
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  