import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-gap: 1rem;

  grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
`;
