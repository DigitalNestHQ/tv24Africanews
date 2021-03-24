import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken'

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    CLEAR_ERRORS,
    LOGOUT
} from '../types'

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem("token"),
        isAuthenticated: null,
        loading: true,
        error: null,
        user: null
    }

    const [state, dispatch] = useReducer(authReducer, initialState);  
    // Register User
    const register = async formData => {
        const config ={
            headers: {
                'Content-Type': 'application/json',
            }
        }
        try {
            const res = await axios.post('http://api.tv24africa.com/api/v1/register', formData, config);
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
            loadUser();
            	    
         } catch (error) {
            dispatch({
                type: REGISTER_FAIL,
                payload: error.response.data.message
            })
        }
    }
    // Login User
    const login = async formData => {
        const config ={
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('http://api.tv24africa.com/api/v1/login', formData, config);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
            console.log(res.data);
            console.log(state)
            return res
         } catch (error) {
            dispatch({
                type: LOGIN_FAIL,
                payload: error.response.data.message
            })
        }
    }
    // load user 
    const loadUser = async () => { // endpoint not found
        console.log('called!!!')
        if(localStorage.token){
            setAuthToken(localStorage.token)
        }   
        const token = localStorage.getItem("token");
        const config = {
            headers: {
                "Authorization" : `Bearer ${token}`, 
                'Content-Type': 'application/json',
              }
        }

        try {
            const res = await axios.get('http://api.tv24africa.com/api/v1/user', config);
            console.log('loaduser', res)
            dispatch({
                type: USER_LOADED,
                payload: res.data,
            })
        } catch (err) {
            console.log("err from loaduser", err) // throwing error 404
            dispatch({
                type: AUTH_ERROR,
                payload: err.message
            })
        }

    }
    // logout user

    // clear errors
    const clearErrors = () => dispatch({
        type: CLEAR_ERRORS,
    })

    return (
        <AuthContext.Provider
        value={{
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            loading: state.loading,
            error: state.error,
            user: state.user,
            loadUser,
            register,
            login,
            clearErrors,
        }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthState;
