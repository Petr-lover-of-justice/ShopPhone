import React from 'react'
import s from "./Login.module.scss"

import { Enter } from '../Enter'
import { Registration } from '../Registration'
export const Login = () => {

 
    return (
        <div className={s.root}>
            <div className={s.root__title}><h2 className={s.active}>Войти</h2><h2> Зарегистрироваться</h2></div>
            <Enter />
            {/* <Registration /> */}
        </div>
    )
}
