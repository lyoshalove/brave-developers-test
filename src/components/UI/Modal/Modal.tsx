import React from 'react';
import { IPayResponse } from '../../../types/PayResponse';
import {TheButton} from '../TheButton/TheButton';
import { useRouter } from 'next/router';
import { StyledModal, StyledDescription, StyledModalInner, StyledTitle } from './styles';

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