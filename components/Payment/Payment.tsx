import React, { MouseEventHandler, useState } from "react";
import styled from "styled-components";
import InputContainer from "../UI/InputContainer/InputContainer";
import Loader from "../UI/Loader/Loader";
import TheButton from "../UI/TheButton/TheButton";
import { IPaymentInfo } from "../../types/PaymentInfo";
import operators from "../../constants/operators";
import { IPayResponse } from "../../types/PayResponse";
import Modal from "../UI/Modal/Modal";

const StyledPayment = styled.div`
  max-width: 400px;
  margin: 0 auto;
  animation: fadeInTop 0.8s forwards;

  .payment__form {
    margin: 35px 0;
  }

  .payment__title {
    font-size: 34px;
  }

  @media (max-width: 768px) {
    .payment__title {
      font-size: 24px;
    }
  }

  .back {
    background: none;
    border: none;
    color: #3a86ff;
    font-weight: bold;
    margin: 0 0 20px;
  }

  .payment__logo {
    width: 150px;
    margin: 0 auto;
    text-align: center;
  }

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

interface IPayment {
  PaymentInfo: IPaymentInfo;
  changeInputValue: (data: string, value: string) => void;
  className: string;
  goBack: () => void;
  goToMain: () => void;
}

const Payment = ({
  PaymentInfo,
  changeInputValue,
  goBack,
  ...props
}: IPayment) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPayed, setIsPayed] = useState<IPayResponse>({
    message: '',
    payed: null
  });
  const Operator = operators.find(
    (operator) => operator.name === PaymentInfo.operator
  )?.image as React.ElementType;

  async function pay() {
    try {
      setIsLoading(true);

      const sendRequestForPay = () => {
        const response = new Promise<IPayResponse>((resolve) => {
          setTimeout(() => {
            Math.random() < 0.5
              ? resolve({ message: "Оплата прошла успешно", payed: true })
              : resolve({ message: "Оплата не прошла", payed: false });
          }, 3500);
        });

        return response;
      };

      await sendRequestForPay()
        .then(data => setIsPayed(data));
      await setIsLoading(false);
      PaymentInfo.amount = "";
      PaymentInfo.tel = "";
    } catch (e) {
      console.warn(e);
    }
  }

  function goToMain() {
    setIsPayed(prev => ({...prev, message: ''}));
    props.goToMain();
  }

  return (
    <>
      <StyledPayment className={props.className}>
        <button className="back" onClick={goBack}>
          Назад
        </button>
        <div className="payment__logo">
          <Operator />
        </div>
        <h1 className="payment__title center">Введите свои данные</h1>
        <form action="" className="payment__form">
          <InputContainer
            width100
            type={"tel"}
            placeholder={"Введите свой номер"}
            value={PaymentInfo.tel}
            data={"tel"}
            changeInputValue={changeInputValue}
          />
          <InputContainer
            width100
            type={"number"}
            placeholder={"Введите сумму платежа"}
            value={PaymentInfo.amount}
            data={"amount"}
            changeInputValue={changeInputValue}
          />
        </form>
        <TheButton
          disabled={
            !(
              PaymentInfo.tel.match(
                /\d/g
              )?.length === 11 &&
              +PaymentInfo.amount >= 1 &&
              +PaymentInfo.amount <= 1000
            )
          }
          onClick={pay}
          center
        >
          {isLoading ? <Loader /> : "Оплатить"}
        </TheButton>
      </StyledPayment>
      {isPayed.message && (
        <Modal
          message={isPayed.message}
          payed={isPayed.payed}
          className="modal"
          goToMain={goToMain}
        ></Modal>
      )}
    </>
  );
};

export default Payment;
