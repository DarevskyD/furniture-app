import styled from "styled-components";
import { size } from "../BreakPoints";

export const Wrapper = styled.div`
  max-width: ${size.lg};
  margin: 0 auto;
  padding: 10px 0;
  text-align: center;
`;

export const Title = styled.p`
  color: ${({theme}) => theme.colors.light};
`;