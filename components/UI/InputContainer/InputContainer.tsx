import React, { ChangeEvent } from "react";
import styled from "styled-components";
import InputMask from 'react-input-mask';

const StyledInputContainer = styled.div`
  position: relative;
  &:not(:last-child) {
    margin: 0 0 15px;
  }

  input {
    border: 2px solid #c4c4c4;
    border-radius: 10px;
    padding: 14px 20px;
    color: #3a86ff;
    transition: 0.3s;
    outline: none;

    &:focus {
      border: 2px solid #3a86ff;
    }
  }

  span {
    color: #3a86ff;
    font-size: 14px;
    user-select: none;
  }
`;

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

const InputContainer = ({
  type,
  placeholder,
  width100,
  value,
  data,
  changeInputValue,
}: IInputContainer) => {
  const styles = width100 ? { width: "100%" } : {};

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    changeInputValue(data, e.target.value);
  }

  return (
    <StyledInputContainer>
      {type === "tel" ? (
        <InputMask
          mask="+7 999 999 99 99"
          style={styles}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      ) : (
        <label>
          <input
            style={styles}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            min="1"
            max="1000"
          />
          <span>Минимум 1 рубль, максимум 1000 рублей</span>
        </label>
      )}
    </StyledInputContainer>
  );
};

export default InputContainer;
