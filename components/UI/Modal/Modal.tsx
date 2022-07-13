import React from 'react';
import styled from 'styled-components';
import { IPayResponse } from '../../../types/PayResponse';
import TheButton from '../TheButton/TheButton';
import { useRouter } from 'next/router';

const StyledModal = styled.div`
  min-height: 100vh;
  background: rgba(0, 0, 0, .8);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding: 15px;

  .modal__inner {
    background: #fff;
    padding: 20px 30px;
    border-radius: 15px;
    max-width: 500px;
    width: 100%;
  }

  .modal__description {
    margin: 10px 0 15px;
  }
`;

interface IProps extends IPayResponse {
  className?: string;
  goToMain: () => void;
}

const Modal = ({ message, payed, className, goToMain }: IProps) => {
  function redirectToMain() {
    goToMain();
  }

  if(payed) {
    setTimeout(() => redirectToMain(), 5000);
  }

  return (
    <StyledModal className={className}>
      <div className="modal__inner center">
        <h2 className="modal__title">{message}</h2>
        {payed ? (
          <p className="modal__description">
            через 5 секунд вы перейдете на главную страницу
          </p>
        ) : (
          <>
            <p className="modal__description">Проблемка..</p>
            <TheButton onClick={redirectToMain} center>
              Перейти на главную страницу
            </TheButton>
          </>
        )}
      </div>
    </StyledModal>
  );
};

export default Modal;