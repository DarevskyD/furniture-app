import styled from "styled-components";
import { size } from "../BreakPoints";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: ${size.lg};
  height: 55px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 5px 20px;
  margin-left: 10px;
  font-size: 18px;
  font-style: italic;
  border: none;
  border-bottom: 1px solid ${({theme}) => theme.colors.secondary};
  outline: none;
`;
