import React from 'react'
import style from './style.module.css'
import { useAuth } from '../../context/Auth'
import { useEffect } from 'react'
import { useState } from 'react'
export default function Profile() {

    const { check, setCheck } = useAuth()
    const [userProfile, setUserProfile] = useState({})

    useEffect(() => {
        fetch('https://dummyjson.com/auth/me', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${check.token}`,
            },
        })
            .then(res => res.json())
            .then(data => {
                setUserProfile(data)
            })
    }, [])

    const logOut = () => {
        sessionStorage.removeItem('check')
        setCheck(null)
    }

  return (
    <>
    <div className={style.container}>
        <div className={style.content}>
            <div className= {style.image}>
                <img src={userProfile.image}/>
            </div>
            <div className={style.userInfo}>
                <div className={style.userCred}>
                    <h1>{userProfile.firstName} {userProfile.lastname}</h1>
                    <p>{userProfile.email}</p>
                </div>
                <div className={style.userDim}>
                    <div className={style.metric}>
                        <span className={style.Label}>Height</span>
                        <span className={style.value}>{userProfile.height}</span>
                    </div>
                    <div className={style.metric}>
                        <span className={style.Label}>Weight</span>
                        <span className={style.value}>{userProfile.weight}</span>
                    </div>
                    <div className={style.metric}>
                        <span className={style.Label}>Age</span>
                        <span className={style.value}>{userProfile.age}</span>
                    </div>
                </div>
                <button className={style.logout} onClick={logOut} >Log Out</button>
            </div>
        </div>
    </div>
    </>
  )
}
