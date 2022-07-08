import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


import s from './FullProperty.module.scss'
import { typeNames } from '../phoneBlock';
import { addItem } from '../../redux/cart/slice';
;
const colorType = ['чёрный', 'белый', 'коралловый']
//the server is under development
const property = [
  { parameter: "Экран", parameterValue: "6.67/1080x2400 Пикс" },
  { parameter: "Процессор", parameterValue: "Qualcomm Snapdragon 870 3.2 ГГц" },
  { parameter: "Оперативная память ", parameterValue: "8 ГБ" },
  { parameter: "Встроенная память (ROM)", parameterValue: "Встроенная память (ROM)" },
  { parameter: "Основная камера МПикс", parameterValue: "48/8/5" },
  { parameter: "Фронтальная камера МПикс", parameterValue: "20" },
  { parameter: "Технология NFC", parameterValue: "Да" },
]
const ColorKinds = ["colorBlack", "colorWhile", "colorCoral"]


type fullPhoneProps = {
  id: string
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
}
type CartItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  type: string;
  size: number;
  count: number;
};
export const FullProperty: React.FC<fullPhoneProps> = ({ id, title, price, imageUrl, sizes, types }) => {
  const dispatch = useDispatch();
  const [color, setColor] = React.useState(0)
  const [choiceMemory, setChoiceMemory] = React.useState(1)
  const clickColor = (str: number) => { setColor(str) }

  const ClickPay = () => {
    const item: CartItem = {
      id,
      title,
      price,
      imageUrl,
      type: typeNames[choiceMemory],
      size: sizes[color],
      count: 0,
    };
    dispatch(addItem(item));
  }

  return (
    <div >
      <div className={s.product}>
        <img className={s.productPhoto} src={imageUrl} />
        <div className={s.productSpecifications}>
          <h2>{title}</h2>
          <h4>{price} ₽</h4>
          <li className={s.productMemeres}>{typeNames.map((items, i) => <li key={items} className={`${choiceMemory === i ? s.active : ""}`} onClick={() => setChoiceMemory(i)}>{items}</li>)}</li>
          <p>Цвет: {colorType[color]}</p>
          <div className="color">
            {ColorKinds.map((items, i) => <li key={i} onClick={() => clickColor(i)} className={`${items} ${color === i ? `active` : `""`}`}></li>)}
          </div>
          <div className={s.productProperty}>
            {property.map((arr: any, i: number) => <li key={i} className={s.productPropertyList}>
              <ul className={s.productPropertyParameter}>{arr.parameter}</ul>
              <ul className={s.productPropertyValue}>{arr.parameterValue}</ul>
            </li>)}
          </div>
        </div>
      </div>
      <div className={s.navigateBtn}>
        <Link to="/">
          <button className={s.navigateBtnBack}>
            <span>Назад</span>
          </button>
        </Link>
        <Link to="/cart">
          <button className="button button--outline button--add" onClick={ClickPay}>
            <span>купить</span>
          </button>
        </Link>
      </div>
    </div>
  )
}
