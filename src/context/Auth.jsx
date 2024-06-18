import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

const Auth = createContext()

const getAuth = () => {
    const sessionToken = sessionStorage.getItem('check')
    if (sessionToken != null) {
        return JSON.parse(sessionToken)
    }

    return null
}


export default function AuthProvider({ children }) {

    const [check, setCheck] =useState (getAuth())

    useEffect(()=> {
        sessionStorage.setItem('check', JSON.stringify(check))
    },[check])

  return (
    <Auth.Provider value={{ check, setCheck }}>
        {children}
    </Auth.Provider>
  )
}

export function useAuth() {
    const { check, setCheck } = useContext(Auth)

    return { check, setCheck }
}