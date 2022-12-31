import React from 'react'

export const Navbar = () => {
    const [btn, setBtn] = React.useState("list-container")
    const clickMenu = () => {
        if (btn === "list-container") {
            setBtn("list-container active")
        } else {
            setBtn("list-container")
        }
    }
  return (
    <nav>
    <div className={btn}>
        <button className="more-button" aria-label="Menu Button" onClick={clickMenu}>
            <div className="menu-icon-wrapper">
                <div className="menu-icon-line half first"></div>
                <div className="menu-icon-line"></div>
                <div className="menu-icon-line half last"></div>
            </div>
        </button>
        <ul className="more-button-list">
            <li className="more-button-list-item">
                <span>Главная</span>
            </li>
            <li className="more-button-list-item">
                <span>Код проекта</span>
            </li>
            <li className="more-button-list-item">
                <span>Корзина</span>
            </li>
            <li className="more-button-list-item">
                <span>Просто</span>
            </li>
        </ul>
    </div>
    <div className="socials">
        <a className="social-link" href="https://twitter.com/aybukeceylan" target="_top">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-twitter">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
        </a>
        <a className="social-link" href="https://www.linkedin.com/in/ayb%C3%BCkeceylan/" target="_top">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
        </a>
    </div>
    <div className="menu">
       <a href="#"><span>Главная</span></a> 
       <a href="#"><span>Код проекта</span></a> 
       <a href="#"><span>Корзина</span></a> 
       <a href="#"><span>Просто</span></a> 
    </div>
</nav>
  )
}
