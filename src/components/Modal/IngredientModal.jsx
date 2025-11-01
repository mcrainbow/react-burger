import useIngredientModalClose from '../../hooks/useIngredientModalClose';
import Modal from './Modal';
import IngredientDetails from './IngredientDetails/IngredientDetails';

function IngredientModal() {
  const onClose = useIngredientModalClose();
  return (
    <Modal onClose={onClose}>
      <IngredientDetails />
    </Modal>
  );
}

export default IngredientModal;
