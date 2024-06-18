import React, { useRef } from 'react'
import style from './style.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/Auth'

export default function Login() {

    const usernameRef = useRef()
    const passwordRef = useRef()
    const { setCheck } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = (e)=> {
        e.preventDefault()
        
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: usernameRef.current.value,
                password: passwordRef.current.value,
                expiresInMins: 1440
            })
        })
        .then(res => res.json())
        .then(data => setCheck(data))
        navigate("/profile")
    }

  return (
    <>
    <div className={style.whole}>
        <div className={style.image}>
            <img src='../public/pic.png'></img>
        </div>
        <div className={style.content}>
            <h1>Welcome Back<span>.</span></h1>
            <form onSubmit={handleSubmit}>
                <div className={style.creds}>
                    <div className={style.credUnit}>
                        <label>Username</label>
                        <input className={style.credName} placeholder='Enter your name' ref={usernameRef}/>
                    </div>
                    <div className={style.credUnit}>
                        <label>Password</label>
                        <input className={style.credPassword} placeholder='Enter your password' type='password' ref={passwordRef}/>
                    </div>
                </div>
                <div className={style.actions}>
                    <button>Log In</button>
                    <p>Don't have an account? <Link to={'/signup'}>Create One</Link></p>
                </div>
                <p className={style.notice}>Use dummyjson users data <a href='https://dummyjson.com/users'>https://dummyjson.com/users</a></p>
            </form>
        </div>
    </div>
    </>
  )
}
