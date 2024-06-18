import { useState } from 'react'
import './App.css'
import AuthProvider from './context/Auth'
import { RouterProvider } from 'react-router-dom'
import browserRouter from './routes/Router'

function App() {

  return (
    <>
    <AuthProvider>
      <RouterProvider router={browserRouter} />
    </AuthProvider>
    </>
  )
}

export default App
