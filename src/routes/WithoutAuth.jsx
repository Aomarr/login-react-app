import React from 'react'
import { useAuth } from '../context/Auth'
import { Navigate } from 'react-router-dom'

export default function WithoutAuth({ children }) {

    const { check } = useAuth()


    if (check !== null) {
        return <Navigate to="/profile" replace />
    }

    return (
        <>{children}</>
    )
}
