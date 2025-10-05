import modalOrderDetailsStyles from './ModalOrderDetails.module.css';
import doneImage from '../../../images/done.svg';

export default function ModalOrderDetails() {
  return (
    <div className={modalOrderDetailsStyles.content}>
      <h2 className={`${modalOrderDetailsStyles.order} text text_type_digits-large pb-8`}>
        034536
      </h2>
      <h3 className="text text_type_main-medium mb-15">идентификатор заказа</h3>
      <div className="mb-15">
        <img className={modalOrderDetailsStyles.image} src={doneImage} alt="Order Done" />
      </div>
      <h4 className="text text_type_main-default mb-2">Ваш заказ начали готовить</h4>
      <h4 className={`${modalOrderDetailsStyles.text} "text text_type_main-default"`}>
        Дождитесь готовности на орбитальной станции
      </h4>
    </div>
  );
}
