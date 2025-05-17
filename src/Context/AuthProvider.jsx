import React from 'react';
import { AuthContext } from './AuthContex';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase/firebase.config';


const AuthProvider = ({children}) => {


    const createUser = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    const user = auth.currentUser ? auth.currentUser : null;

    const deleteUser = (user) => {
        return deleteUser(user)
    }

    const singnIn = (email, password) => {
            return signInWithEmailAndPassword(auth, email, password)
    }

    const userInfo = {
           user,
           createUser,
           deleteUser,
           singnIn
    }
    return (
       <AuthContext value={userInfo}>
        {children}
       </AuthContext>
    );
};

export default AuthProvider;