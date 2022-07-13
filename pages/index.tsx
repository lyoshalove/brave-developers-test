import type { NextPage } from 'next';
import Operators from '../components/Operators/Operators';
import styled from 'styled-components';
import { useState } from 'react';
import Payment from '../components/Payment/Payment';
import { IPaymentInfo } from '../types/PaymentInfo';
import Container from '../components/Container/Container';

const StyledHome = styled.div`
  padding: 50px 0;
  @media (max-width: 768px) {
    padding: 25px 0;
  }
`;

const Home: NextPage = () => {
  const [PaymentInfo, setPaymentInfo] = useState<IPaymentInfo>({
    operator: '',
    tel: '',
    amount: '',
  });

  function getOperatorName(name: string) {
    setPaymentInfo(prev => ({...prev, operator: name}));
  }

  function changeInputValue(type: string, value: string) {
    if(type === 'tel') {
      setPaymentInfo((prev) => ({ ...prev, tel: value }));
    } else {
      setPaymentInfo((prev) => ({ ...prev, amount: value }));
    }
  }

  function goBack() {
    setPaymentInfo(prev => ({...prev, operator: ''}));
  }

  function goToMain() {
    goBack();
  }

  return (
    <StyledHome>
      <Container>
        <div className="home__inner">
          {!PaymentInfo.operator ? (
            <Operators getOperatorName={getOperatorName} />
          ) : (
            <Payment
              className="payment"
              changeInputValue={changeInputValue}
              goBack={goBack}
              PaymentInfo={PaymentInfo}
              goToMain={goToMain}
            />
          )}
        </div>
      </Container>
    </StyledHome>
  );
}

export default Home
