import React from 'react';
import PropTypes from 'prop-types';
import orderDetailsStyles from './OrderDetails.module.css';
import doneImage from '../../../images/done.svg';

export default function OrderDetails({ order, error }) {
  if (error) {
    return (
      <div className={orderDetailsStyles.content}>
        <h2 className="text text_type_main-large mb-8">Ошибка</h2>
        <p className="text text_type_main-default mb-15">{error}</p>
        <p className="text text_type_main-small">Попробуйте создать заказ еще раз</p>
      </div>
    );
  }

  if (!order || !order.order) {
    return (
      <div className={orderDetailsStyles.content}>
        <h2 className="text text_type_main-large mb-8">Загрузка...</h2>
        <p className="text text_type_main-default">Создаем ваш заказ</p>
      </div>
    );
  }

  return (
    <div className={orderDetailsStyles.content}>
      <h2 className={`${orderDetailsStyles.order} text text_type_digits-large pb-8`}>
        {order.order.number}
      </h2>
      <h3 className="text text_type_main-medium mb-15">идентификатор заказа</h3>
      <div className="mb-15">
        <img className={orderDetailsStyles.image} src={doneImage} alt="Order Done" />
      </div>
      <h4 className="text text_type_main-default mb-2">Ваш заказ начали готовить</h4>
      <h4 className={`${orderDetailsStyles.text} text text_type_main-default`}>
        Дождитесь готовности на орбитальной станции
      </h4>
    </div>
  );
}

OrderDetails.propTypes = {
  order: PropTypes.shape({
    order: PropTypes.shape({
      number: PropTypes.number,
    }),
    name: PropTypes.string,
    success: PropTypes.bool,
  }),
  error: PropTypes.string,
};
