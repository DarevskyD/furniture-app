import styled from "styled-components";

export const HamburgerMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  display: none;
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
