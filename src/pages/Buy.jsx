import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import cartEmptyImage from '../assets/img/empty-cart.png';
import { CartItem, Button } from '../components';
import { buyPizza } from '../redux/actions/buy';
import { clearCart, removeCartItem, plusCartItem, minusCartItem } from '../redux/actions/cart';

function Buy() {
  const dispatch = useDispatch();

  const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart); 
  // const buyPizza = {
  //   dispatch(buyPizza());
  // });
  const totalP=totalPrice;
  const totalC=totalCount;
  
  return(
    
    <div className="container container--cart">
     { totalP ? ( 
      <div className="cart">
            <div >
                <span>
                  Всего пицц: <b>{totalC} шт.</b>
                </span> 
            </div>
            <div>
                <span>
                  Сумма заказа: <b>{totalP} ₽</b>
                </span>
            </div>
            <div>
                <span>
                  Статус заказа: оплачен, в пути<b></b>
                </span>
            </div>
            <div className="cart__bottom-buttons">
                <Link to="/" className="button button--black">
                    <span>Вернуться назад</span>
                </Link>
            </div>
      </div>
     ) : (
      <div className="cart cart--empty">
        <h2>
          Мы еще не получили заказ <i>😕</i>
        </h2>
        <p>
          Вероятней всего, вы не заказывали ещё пиццу.
          <br />
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
        <img src={cartEmptyImage} alt="Empty cart" />
        <Link to="/" className="button button--black">
          <span>Вернуться назад</span>
        </Link>
      </div>
    )}
    </div>
  );
};
export default Buy;