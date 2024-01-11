import { Button } from "./../components/Button/styles";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  & div Button {
    margin-right: 1rem;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const Variant = styled.div`
  display: block;
`;

export const Color = styled.div`
  display: block;
`;

export const Size = styled.div`
  display: block;
`;
