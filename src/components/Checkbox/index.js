import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { CheckboxWrapper } from './styles';

const Checkbox = ({ checked }) => {
  return (
    <CheckboxWrapper checked={checked}>
      <div>
        <FaCheck color="#FF5910" />
      </div>
    </CheckboxWrapper>
  );
};

export { Checkbox };
