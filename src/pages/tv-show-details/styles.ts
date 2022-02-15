import styled from "styled-components";

export const Container = styled.div`
  max-width: 1020px;
  margin-left: auto;
  margin-right: auto;

  margin-top: 40px;

  @media (max-width: 1335px) {
    padding: 0 15px;
  }

  h1 {
    text-align: center;

    margin-bottom: 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
`;

export const GoBack = styled.span``;
