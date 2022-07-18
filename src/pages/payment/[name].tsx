import { NextPage } from "next";
import React, { useState } from "react";
import styled from "styled-components";
import {InputContainer} from "../../components/UI/InputContainer/InputContainer";
import {Loader} from "../../components/UI/Loader/Loader";
import {TheButton} from "../../components/UI/TheButton/TheButton";
import {operators} from "../../constants/operators";
import { IPayResponse } from "../../types/PayResponse";
import {Modal} from "../../components/UI/Modal/Modal";
import { useRouter } from "next/router";
import Head from "next/head";
import { Container } from "../../components/Container/Container";

const StyledPayment = styled.div`
  max-width: 400px;
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

const StyledTitle = styled.h1`
  font-size: 34px;
  text-align: center;
  
  @media (max-width: 768px) {
    .payment__title {
      font-size: 24px;
    }
  }
`;

const StyledForm = styled.form`
  margin: 35px 0 25px;
`;

const StyledLogo = styled.div`
  width: 150px;
  margin: 0 auto;
  text-align: center;
`;

const StyledBack = styled.button`
  background: none;
  border: none;
  color: #3a86ff;
  font-weight: bold;
  margin: 0 0 20px;
`;


const PaymentPage: NextPage = () => {
  const [phone, setPhone] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPayed, setIsPayed] = useState<IPayResponse>({
    message: "",
    payed: null,
  });
  const router = useRouter();
  const { name } = router.query;
  const buttonDisabledRule = !(
    phone.match(/\d/g)?.length === 11 &&
    +amount >= 1 &&
    +amount <= 1000
  );
  const OperatorImage = operators.find((operator) => operator.name === name)
    ?.image as React.ElementType;

  const OperatorName: string | undefined = operators.find(operator => operator.name === name)?.name;

  async function pay() {
    try {
      setIsLoading(true);

      const sendRequestForPay = () => {
        const response = new Promise<IPayResponse>((resolve) => {
          setTimeout(() => {
            Math.random() < 0.5
              ? resolve({ message: "Оплата прошла успешно", payed: true })
              : resolve({ message: "Оплата не прошла", payed: false });
          }, 1500);
        });

        return response;
      };

      await sendRequestForPay().then((data) => setIsPayed(data));
      await setIsLoading(false);
      setPhone("");
      setAmount("");
    } catch (e) {
      console.warn(e);
    }
  }

  function changeInputValue(data: string, value: string) {
    if (data === "phone") {
      setPhone(value);
    } else {
      setAmount(value);
    }
  }

  function goToBack() {
    setIsPayed((prev) => ({ ...prev, message: "" }));
    router.back();
  }

  return (
    <>
      <Head>
        <title>Оплата: {name}</title>
      </Head>
      <Container>
        <StyledPayment>
          <StyledBack onClick={goToBack}>
            Назад
          </StyledBack>
          <StyledLogo>
            {OperatorImage ? <OperatorImage /> : <h2>{OperatorName}</h2>}
          </StyledLogo>
          <StyledTitle>Введите свои данные</StyledTitle>
          <StyledForm action="#">
            <InputContainer
              width100
              type={"tel"}
              placeholder={"Введите свой номер"}
              value={phone}
              data={"phone"}
              changeInputValue={changeInputValue}
            />
            <InputContainer
              width100
              type={"number"}
              placeholder={"Введите сумму платежа"}
              value={amount}
              data={"amount"}
              changeInputValue={changeInputValue}
            />
          </StyledForm>
          <TheButton
            disabled={buttonDisabledRule}
            onClick={() => pay()}
            center
          >
            {isLoading ? <Loader /> : "Оплатить"}
          </TheButton>
        </StyledPayment>
      </Container>
      {isPayed.message && (
        <Modal message={isPayed.message} payed={isPayed.payed}></Modal>
      )}
    </>
  );
};

export default PaymentPage;
