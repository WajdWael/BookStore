// import React, { useContext, useState, useEffect } from "react"
// import { auth } from "../firebase"

// const AuthContext = React.createContext()

// export function useAuth() {
//   return useContext(AuthContext)
// }


import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState
} from 'react'
import {
    Auth,
    User,
    UserCredential,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut
    // updateEmail,
    // updatePassword
    // updateProfile
} from 'firebase/auth'
import { auth } from '../utils/firebase'


export interface AuthProviderProps{
    children?: ReactNode
}

export interface UserContextState{
    isAuthenticated: boolean
    isLoading: boolean
    id?: string
}
export const UserStateContext = createContext<UserContextState>({} as UserContextState)

export interface AuthContextModel{
    auth: Auth
    user: User | null
    signIn: (email:string, password:string)=>Promise<UserCredential>
    signUp: (email: string, password: string) => Promise<UserCredential>
    logOut: () => Promise<void>
    sendPasswordResetEmail?: (email: string) => Promise<void>
    
    // updateEmailFunction?:    (user:User, email: string) => Promise<void>
    // updatePasswordFunction?: (user:User, password: string) => Promise<void>
}

export const AuthContext = createContext<AuthContextModel>({} as AuthContextModel)


export function useAuth(): AuthContextModel{
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null)
    
    function signUp(email: string, password: string): Promise<UserCredential> {
        return createUserWithEmailAndPassword(auth, email, password)
        // const createUser = async ( username:string ) => {/
        //     await createUserWithEmailAndPassword(auth, email, password)
        //     updateProfile(auth.currentUser!, {
        //         displayName: username // it can be a value of an input
        //     })
        // }
        // createUser(username)

    }




    function signIn(email: string, password: string): Promise<UserCredential> {
        return signInWithEmailAndPassword(auth, email, password)
    }
    function resetPassword(email: string): Promise<void> {
        return sendPasswordResetEmail(auth, email)
    }
    function logOut() {
        return signOut(auth)
    }

    
    // function updateEmailFunction(user: User, email: string): Promise<void> {
    //     return updateEmail(user, email)
    // }
    
    // function updatePasswordFunction(user:User, password:string): Promise<void> {
    //     return updatePassword(user, password)
    // }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user)
        })
        return unsubscribe
    }, [])
    const values = {
        signUp,
        signIn,
        resetPassword,
        // updateEmailFunction,
        // updatePasswordFunction,
        user,
        logOut,
        auth
    }

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
