import type { NextPage } from "next";
import { Operators } from "../components/Operators/Operators";
import styled from "styled-components";
import { Container } from "../components/Container/Container";
import { theme } from "../styles/theme";

const StyledHome = styled.div`
  padding: 50px 0;
  @media ${theme.media.medium} {
    padding: 25px 0;
  }
`;

const Home: NextPage = () => {
  return (
    <StyledHome>
      <Container>
        <div className="home__inner">
          <Operators />
        </div>
      </Container>
    </StyledHome>
  );
};

export default Home;
