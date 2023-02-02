import styled from 'styled-components';
import { size } from '../BreakPoints';

export const Wrapper = styled.div`
  height: 50vh;
  max-width: ${size.lg};
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
`;

export const Description = styled.p`
  font-size: 24px;
  font-weight: 300;
  margin: 0 0 20px;
`;

export const InputContainer = styled.div`
  width: 50%;  
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.light};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
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
  background-color: ${({ theme }) => theme.colors.additional};
  color: ${({ theme }) => theme.colors.light};
`;
