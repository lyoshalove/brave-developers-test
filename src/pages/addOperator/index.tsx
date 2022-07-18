import React, { useState } from 'react';
import styled from 'styled-components';
import {Container} from '../../components/Container/Container';
import {InputContainer} from '../../components/UI/InputContainer/InputContainer';
import {TheButton} from '../../components/UI/TheButton/TheButton';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { setOperators } from '../_app';
import { NextPage } from 'next';

const StyledAddOperator = styled.section`
  max-width: 500px;
  margin: 0 auto;
  animation: fadeInTop 0.8s forwards;

  @keyframes fadeInTop {
    0% {
      transform: translate(0, -150px);
      opacity: 0;
    }
    ,
    100% {
      transform: translate(0, 0);
      opacity: 1;
    }
  }
`;

const StyledForm = styled.form`
  margin: 30px 0;
`;

const StyledTitle = styled.h1`
  text-align: center;
`;

const Index: NextPage = () => {
  const [name, setName] = useState<string>("");
  const router = useRouter();

  function changeInputValue(data: string, value: string) {
    if (data === "name") {
      setName(value);
    }
  }

  return (
    <>
      <Head>
        <title>Добавление нового оператора</title>
      </Head>
      <StyledAddOperator>
        <Container>
          <StyledTitle>Добавить нового оператора</StyledTitle>
          <StyledForm action="#">
            <InputContainer
              width100
              type={"text"}
              placeholder={"Введите название оператора"}
              value={name}
              data={"name"}
              changeInputValue={changeInputValue}
            />
          </StyledForm>
          <TheButton
            center
            onClick={() => {
              setOperators({ id: name, name: name });
              router.push("/");
            }}
          >
            Добавить
          </TheButton>
        </Container>
      </StyledAddOperator>
    </>
  );
};

export default Index;