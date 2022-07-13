import React from 'react'

import s from "./Footer.module.scss"
import { Link, useLocation } from 'react-router-dom';
import facebook from '..//../assets/img/facebook.png';
import instagram from '..//../assets/img/instagram.png';
import telegram from '..//../assets/img/telegram.png';
import twitter from '..//../assets/img/twitter (1).png';
import arrow from '..//../assets/img/share1.png';

const aboutWe = ["О НАС", "Xiaomi", "Команда лидеров", "Политика Конфиденциальности", "Добросовестность и соблюдение требований"];
const products = ["ПРОДУКЦИЯ", "Xiaomi 12X", "Xiaomi 11T", "Redmi Note 11", "Код купона"];
const support = ["СВЯЗАТЬСЯ С НАМИ", "Онлайн поддержка", "Эл. почта", "Горячая линия : 88007756615", "Часы работы с 9:00 до 20:00 МСК, Пн. – Пт"];
const link = ["/ShopPhone/", "/ShopPhone/", "/ShopPhone/", "/ShopPhone/", "/ShopPhone/"];

export const Footer = () => {
    let linlus = link.map((item, i) => (item))
    let aboutUs = aboutWe.map((item, i) => (<ul><Link className={i === 0 ? s.title : s.text} to={`${linlus[i]}`}>{item}</Link></ul>))
    let productsUs = products.map((item, i) => (<ul><Link className={i === 0 ? s.title : s.text} to={`${linlus[i]}`}>{item}</Link></ul>))
    let supportUs = support.map((item, i) => (<ul><Link className={i === 0 ? s.title : s.text} to={`${linlus[i]}`}>{item}</Link></ul>))
    return (
        <div className={s.root}>
            <li>
                {aboutUs}
            </li>
            <li>
                {productsUs}
            </li>
            <li>
                {supportUs}
            </li>

            <div className={s.network}>
                <span className={s.networkNew}>Новости Xiaomi</span>
                <li className={s.network__link}>
                    <ul><Link to="/ShopPhone/"><img src={facebook} alt="facebook" /></Link></ul>
                    <ul><Link to="/ShopPhone/"><img src={instagram} alt="instagram" /></Link></ul>
                    <ul><Link to="/ShopPhone/"><img src={telegram} alt="telegram" /></Link></ul>
                    <ul><Link to="/ShopPhone/"><img src={twitter} alt="twitter" /></Link></ul>
                </li>
                <div className={s.network__sending}>
                    <div><span>Будьте в курсе обновлений.</span></div>
                    <input
                        type="text"
                        placeholder="Введите адрес e-mail"
                        className={s.network__sending__input}
                    />
                    <Link to="/ShopPhone/"><img src={arrow} alt="" /></Link>
                </div>
            </div>
        </div>
    )
}
