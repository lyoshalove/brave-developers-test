import React, { FormEvent, useState } from 'react';
import {Container} from '../../components/Container/Container';
import {InputContainer} from '../../components/UI/InputContainer/InputContainer';
import {TheButton} from '../../components/UI/TheButton/TheButton';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { setOperators } from '../_app';
import { NextPage } from 'next';
import { isEmpty } from '../../utils/isEmpty';
import { StyledAddOperator, StyledForm, StyledTitle } from './styles';
import { checkSpecialSymbols } from '../../utils/checkSpecialSymbols';

const Index: NextPage = () => {
  const [name, setName] = useState<string>("");
  const router = useRouter();
  const btnDisabledRule = !isEmpty(name);

  function changeInputValue(data: string, value: string) {
    if (data === "name") {
      setName(value);
    }
  }

  function addOperator(e?: FormEvent) {
    e?.preventDefault();

    if (isEmpty(name) && checkSpecialSymbols(name)) {
      setOperators({ id: name, name: name.trim() });
      router.push("/");
    } else if (!checkSpecialSymbols(name)) {
      alert('Имя оператора не может содержать спец. символы');
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
          <StyledForm action="#" onSubmit={(e) => addOperator(e)}>
            <InputContainer
              width100
              type={"text"}
              placeholder={"Введите название оператора"}
              value={name}
              data={"name"}
              changeInputValue={changeInputValue}
            />
          </StyledForm>
          <TheButton disabled={btnDisabledRule} center onClick={addOperator}>
            Добавить
          </TheButton>
        </Container>
      </StyledAddOperator>
    </>
  );
};

export default Index;