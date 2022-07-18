import React from 'react';
import styled from 'styled-components';
import { IPayResponse } from '../../../types/PayResponse';
import {TheButton} from '../TheButton/TheButton';
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
`;

const StyledModalInner = styled.div`
  background: #fff;
  padding: 20px 30px;
  border-radius: 15px;
  max-width: 500px;
  width: 100%;
  text-align-center;
`;

const StyledTitle = styled.h2`
  text-align: center;
`;

const StyledDescription = styled.p`
  margin: 10px 0 15px;
  text-align: center;
`;

export const Modal: React.FC<IPayResponse> = ({ message, payed }) => {
  const router = useRouter();

  function redirectToMain() {
    router.push("/");
  }

  if (payed) {
    setTimeout(() => redirectToMain(), 2000);
  }

  return (
    <StyledModal>
      <StyledModalInner>
        <StyledTitle>{message}</StyledTitle>
        {payed ? (
          <StyledDescription>
            через 2 секунды вы перейдете на главную страницу
          </StyledDescription>
        ) : (
          <>
            <StyledDescription>Проблемка..</StyledDescription>
            <TheButton onClick={redirectToMain} center>
              Перейти на главную страницу
            </TheButton>
          </>
        )}
      </StyledModalInner>
    </StyledModal>
  );
};