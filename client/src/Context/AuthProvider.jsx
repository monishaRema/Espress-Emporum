import React from 'react';
import { AuthContext } from './AuthContex';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase/firebase.config';


const AuthProvider = ({children}) => {


    const createUser = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    const userInfo = {
           createUser
    }
    return (
       <AuthContext value={userInfo}>
        {children}
       </AuthContext>
    );
};

export default AuthProvider;