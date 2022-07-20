import React from 'react'
import s from "./Login.module.scss"

import { Enter } from '../Enter'
import { Registration } from '../Registration'

const emailData =[
    {name:"email",
    type:"email",
    check:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/},
    {name:"password", 
    type:"password", 
    check: /^[a-zA-Z0-9]{3,20}$/}
]

export const Login = () => {
    const acquaint = ["Войти", "Зарегистрироваться"]
    const [actives, setActives] = React.useState(0)
    const entry = acquaint.map((item, i) => (
        <h2 key={item} onClick={() => setActives(i)} className={i === actives ? s.active : ""}>{item}</h2>
    ))
    return (
        <div className={s.root}>
            <div className={s.root__title}>
                {entry}
            </div>
        {actives===0? <Enter {...emailData}/>:<Registration />}
        </div>
    )
}
