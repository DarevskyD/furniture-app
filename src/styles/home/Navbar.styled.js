import styled from 'styled-components';
import { size } from '../BreakPoints';

export const Wrapper = styled.div`
  max-width: ${size.lg};
  height: 70px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 20px;
`;

export const LeftNav = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Logo = styled.h1`
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 5px;
`;

export const MainNav = styled.nav`
  flex: 2;
  display: flex;
  align-items: center;
`;

export const MenuItemWrapper = styled.span`
  position: relative;
  margin-right: 30px;
`;

export const MenuItem = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: -3px;
    left: 0;
    background-color: ${({ theme }) => theme.colors.primary};
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.5s;
  }
  &:hover {
    &:after {
      transform-origin: bottom left;
      transform: scaleX(1);
    }
  }
`;

export const RightNav = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Language = styled.div`
  display: flex;
  cursor: pointer;
`;

export const Registration = styled.div`
  display: flex;
`;
export const RegistrationItem = styled.div`
  font-weight: 600;
  margin-right: 10px;
  &:nth-child(2) {
    margin-right: 0;
  }
  cursor: pointer;
`;
export const Cart = styled.div`
  cursor: pointer;
`;
