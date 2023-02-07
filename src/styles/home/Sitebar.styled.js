import styled from 'styled-components';
import { device } from '../BreakPoints';

export const SitebarContainer = styled.div`
  height: 100vh;  
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: rgba(0, 0, 0, 0.16) 3px 0px 6px, rgba(0, 0, 0, 0.23) 3px 0px 6px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  display: none;
  @media only screen and (${device.md}) {
    display: flex;
    width: 50vw;
  }
  @media only screen and (${device.sm}) {
    width: 60vw;
  }
  @media only screen and (${device.xs}) {
    width: 100vw;
  }
`;

export const Wrapper = styled.div`
  padding: 20px;
`;

export const MainMenu = styled.div`
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
`;
