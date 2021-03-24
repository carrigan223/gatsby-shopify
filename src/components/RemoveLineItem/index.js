import React, { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { FaTrashAlt } from 'react-icons/fa';
import { RemoveLineItemWrapper } from './styles';

const RemoveLineItem = ({ lineItemId }) => {
  //import the remove line item method from the cart context
  const { removeLineItem } = useContext(CartContext);

  const handleClick = () => {
    removeLineItem(lineItemId);
  };

  return (
    <RemoveLineItemWrapper onClick={handleClick}>
      <FaTrashAlt />
    </RemoveLineItemWrapper>
  );
};

export { RemoveLineItem };
