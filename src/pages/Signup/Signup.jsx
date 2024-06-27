import React from 'react'
import style from './style.module.css'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {
  return (
    <>
        <div className={style.whole}>
        <div className={style.content}>
            <h1>Create Account<span>.</span></h1>
            <form>
                <div className={style.creds}>
                    <div className={style.credUnit}>
                        <label>Username</label>
                        <input className={style.credName} placeholder='Enter your name'/>
                    </div>
                    <div className={style.credUnit}>
                        <label>Email</label>
                        <input className={style.credMail} placeholder='Enter your email address'/>
                    </div>
                    <div className={style.credUnit}>
                        <label>Password</label>
                        <input className={style.credPassword} placeholder='Enter your password' type='password'/>
                    </div>
                </div>
                <div className={style.actions}>
                    <button>Create Account</button>
                    <p>Already have an account? <Link to='/login'>Log in</Link></p>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}
