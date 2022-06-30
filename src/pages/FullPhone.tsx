import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
// import { CardProperty } from '../components/CardColorSize';
import s from '../components/Сharacteristic/Сharacteristic.module.scss'
import { Link } from 'react-router-dom';

const FullPhone: React.FC = () => {
  const property = [
    { parameter: "Экран", parameterValue: "6.67/1080x2400 Пикс" },
    { parameter: "Процессор", parameterValue: "Qualcomm Snapdragon 870 3.2 ГГц" },
    { parameter: "Оперативная память ", parameterValue: "8 ГБ" },
    { parameter: "Встроенная память (ROM)", parameterValue: "Встроенная память (ROM)" },
    { parameter: "Основная камера МПикс", parameterValue: "48/8/5" },
    { parameter: "Фронтальная камера МПикс", parameterValue: "20" },
    { parameter: "Технология NFC", parameterValue: "Да" },
  ]
  const [phone, setPhone] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();
  React.useEffect(() => {
    async function fetchPhone() {
      try {
        const { data } = await axios.get('https://618e3ea350e24d0017ce1178.mockapi.io/Items/' + id);
        setPhone(data);
      } catch (error) {
        alert('Ошибка при получении Данных!');
        navigate('/');
      }
    }
    fetchPhone();
  }, []);

  if (!phone) {
    return <>Загрузка...</>;
  }
  return (
    <div className="container">
     {/* <CardProduct {...phone}/> */}
      {/* <CardProperty {...phone}/> */}
      <div className={s.product}>
      <img className={s.productPhoto} src={phone.imageUrl} />
      <div className={s.productSpecifications}>
        <h2>{phone.title}</h2>
        <h4>{phone.price} ₽</h4>
        <div className={s.productProperty}>
            {property.map((arr:any,i:number) => <li key={i} className={s.productPropertyList}>
              <ul className={s.productPropertyParameter}><p>{arr.parameter}</p></ul>
              <ul className={s.productPropertyValue}><p>{arr.parameterValue}</p></ul>
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
        <button className="button button--outline button--add">
          <span>купить</span>
        </button>
      </Link>
      </div>
    </div>
  );
};

export default FullPhone;
