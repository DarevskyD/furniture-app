import styled from 'styled-components';
import { device } from '../BreakPoints';

export const TopLine = styled.span`
  width: 25px;
  height: 5px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const CenterLine = styled.span`
  width: 25px;
  height: 5px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const BottomLine = styled.span`
  width: 13px;
  height: 5px;
  background-color: ${({ theme }) => theme.colors.primary};
  opacity: 1;
`;

export const HamburgerMenu = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.light};
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover ${TopLine} {
    height: 3px;
    width: 35px;
    transform: rotate(45deg) translate(3px, 11px);
    transition: all 0.5s ease;
  }

  &:hover ${CenterLine} {
    height: 3px;
    width: 35px;
    transform: rotate(-45deg) translate(-4px, -4px);
    transition: all 0.5s ease;
  }

  &:hover ${BottomLine} {
    height: 3px;
    width: 35px;
    opacity: 0;
    transform: translateX(20px);
    transition: all 0.5s ease;
  }

  @media only screen and (${device.md}) {
    display: flex;
    margin: 0 20px 0 0;
    width: ${({ scrolled }) => scrolled && '70px'};
    height: ${({ scrolled }) => scrolled && '70px'};
    transition: all 1s ease;
  }
`;

export const HamburgerMenuLines = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;  
`;