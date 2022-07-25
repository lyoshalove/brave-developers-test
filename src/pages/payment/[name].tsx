import { NextPage } from "next";
import React, { FormEvent, useState } from "react";
import {InputContainer} from "../../components/UI/InputContainer/InputContainer";
import {Loader} from "../../components/UI/Loader/Loader";
import {TheButton} from "../../components/UI/TheButton/TheButton";
import {operators} from "../../constants/operators";
import { IPayResponse } from "../../types/PayResponse";
import {Modal} from "../../components/UI/Modal/Modal";
import { useRouter } from "next/router";
import Head from "next/head";
import { Container } from "../../components/Container/Container";
import { StyledBack, StyledForm, StyledLogo, StyledPayment, StyledTitle } from "./styles";


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

  async function pay(e?: FormEvent) {
    e?.preventDefault();

    try {
      setIsLoading(true);

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
          <StyledBack onClick={goToBack}>Назад</StyledBack>
          <StyledLogo>
            {OperatorImage ? <OperatorImage /> : <h2>{OperatorName}</h2>}
          </StyledLogo>
          <StyledTitle>Введите свои данные</StyledTitle>
          <StyledForm action="#" onSubmit={(e) => pay(e)}>
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
            <TheButton disabled={buttonDisabledRule} onClick={pay} center>
              {isLoading ? <Loader /> : "Оплатить"}
            </TheButton>
          </StyledForm>
        </StyledPayment>
      </Container>
      {isPayed.message && (
        <Modal message={isPayed.message} payed={isPayed.payed}></Modal>
      )}
    </>
  );
};

export default PaymentPage;