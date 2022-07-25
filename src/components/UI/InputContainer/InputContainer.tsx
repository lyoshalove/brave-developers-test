import React, { ChangeEvent } from "react";
import InputMask from 'react-input-mask';
import { StyledInputContainer, StyledSpan } from './styles';

interface IInputContainer {
  type: string;
  placeholder: string;
  value: string;
  width100?: boolean;
  data: string;
  changeInputValue: (
    data: string,
    value: string
  ) => void;
}

export const InputContainer: React.FC<IInputContainer> = ({
  type,
  placeholder,
  width100,
  value,
  data,
  changeInputValue,
}) => {
  const styles = width100 ? { width: "100%" } : {};

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    changeInputValue(data, e.target.value);
  }

  function chooseInput() {
    if (type === "tel") {
      return (
        <InputMask
          mask="+7 999 999 99 99"
          style={styles}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      );
    } else if (type === "number") {
      return (
        <>
          <input
            style={styles}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            min="1"
            max="1000"
          />
          <StyledSpan>Минимум 1 рубль и максимум 1000 рублей</StyledSpan>
        </>
      );
    } else {
      return (
        <input
          style={styles}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      );
    }
  }

  return <StyledInputContainer>{chooseInput()}</StyledInputContainer>;
};