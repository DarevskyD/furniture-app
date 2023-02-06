import styled from 'styled-components';
import { device } from '../BreakPoints';

export const HamburgerMenu = styled.div`
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  display: none;
  transition: all 0.5s ease;
  @media only screen and (${device.md}) {
    display: flex;
    margin: 0 20px 0 0;
    width: ${({ scrolled }) => scrolled && '70px'};
    height: ${({ scrolled }) => scrolled && '70px'};
  }
`;

export const HamburgerMenuLines = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TopLine = styled.span`
  width: 25px;
  height: 5px;
  background-color: ${({ theme }) => theme.colors.light};
`;
export const CenterLine = styled.span`
  width: 25px;
  height: 5px;
  background-color: ${({ theme }) => theme.colors.light};
`;
export const BottomLine = styled.span`
  width: 13px;
  height: 5px;
  background-color: ${({ theme }) => theme.colors.light};
`;
