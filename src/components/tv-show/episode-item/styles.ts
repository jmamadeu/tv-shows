import styled from "styled-components";

export const Container = styled.article`
  display: flex;

  img {
    height: 50px;
    width: 100px;

    border-radius: 6px;

    margin-right: 20px;
  }

  border-bottom: 1px solid #ccc;

  padding-bottom: 4px;
  margin-top: 12px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  button {
    font-size: 16px;
    color: #333;

    text-decoration: underline;

    border: 0;

    background: transparent;
    text-align: left;

    cursor: pointer;
  }

  p {
    font-size: 12px;
    color: #666;
  }
`;
