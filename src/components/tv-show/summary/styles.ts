import styled from "styled-components";

export const Container = styled.article`
  display: flex;

  img {
    height: 100px;
    width: 300px;

    border-radius: 6px;

    margin-right: 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  strong {
    font-size: 16px;
    color: #333;
  }

  p {
    font-size: 12px;
    color: #666;
  }
`;
