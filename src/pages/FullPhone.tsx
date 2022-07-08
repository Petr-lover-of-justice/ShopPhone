import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectFullPhone } from '../redux/fullPhone/selectors';
import { fetchFullPhone } from '../redux/fullPhone/asyncActionsFull';
import { FullProperty } from '../components/FullProperty';
import { addItem } from '../redux/cart/slice';


const FullPhone: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  React.useEffect(() => {
    const getPhone = async () => {
      dispatch(fetchFullPhone(id))
    }
    getPhone()
  }, [])
  const { items } = useSelector(selectFullPhone)

const y=(items)


  const phone = items.map((item) => (
    <div key={item.id}><FullProperty key={item.id} {...item} /></div>
  ))


  return (
    <div className="container">
      {phone}
    </div>
  );
};

export default FullPhone;
