import styled from 'styled-components';
import { size, device } from '../BreakPoints';

export const Wrapper = styled.div`
  height: 50vh;
  max-width: ${size.xl}px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 60px;
  font-weight: 300;
  margin: 0 0 20px;
  @media only screen and (${device.sm}) {
    font-size: 40px;
  }
`;

export const Description = styled.p`
  font-size: 24px;
  font-weight: 300;
  margin: 0 0 20px;
  @media only screen and (${device.sm}) {
    font-size: 20px;
    padding: 0 10px;
    text-align: center;
  }
`;

export const InputContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.light};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  @media only screen and (${device.md}) {
    width: 70%;
  }
  @media only screen and (${device.sm}) {
    width: 90%;
  }
`;

export const Input = styled.input`
  flex: 7;
  padding: 10px 0;
  margin: 0 0 0 20px;
  outline: none;
  border: none;
`;

export const Button = styled.button`
  flex: 1;
  height: 100%;
  color: ${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.colors.additionalMd};
  @media only screen and (${device.sm}) {
    flex: 2;
  }
`;