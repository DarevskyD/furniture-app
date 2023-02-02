import styled from 'styled-components';
import { size } from '../BreakPoints';

export const Container = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.middleBg};
`;

export const Wrapper = styled.div`
  max-width: ${size.lg};
  margin: 0 auto;
  padding: 20px;
  display: flex;
`;

export const Left = styled.div`
  flex: 2;
  padding: 0 50px 0 0;
`;

export const Logo = styled.h1`
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 5px;
  margin: 0 0 20px;
`;

export const Description = styled.p`
  margin: 0 0 20px;
  line-height: 1.2;
`;

export const SocialContainer = styled.div`
  display: flex;
`;
export const SocialLink = styled.a`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  color: white;
  background-color: #${({ color }) => color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px 0 0;
`;

export const CenterAbout = styled.div`
  flex: 1;
  padding: 0 20px;
`;

export const Title = styled.h3`
  margin: 0 0 20px;
`;

export const AboutUs = styled.ul``;

export const AboutUsItem = styled.li`
  padding: 0 0 10px;
`;

export const AboutUsLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
`;
export const CenterHelp = styled.div`
  flex: 1;
  padding: 0 20px;
`;

export const HelpTitle = styled.h3`
  margin: 0 0 20px;
`;

export const Help = styled.ul``;

export const HelpItem = styled.li`
  padding: 0 0 10px;
`;

export const HelpLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Right = styled.div`
  flex: 1;
  padding: 0 20px;
`;

export const ContactTitle = styled.h3`
  margin: 0 0 20px;
`;

export const Contact = styled.ul``;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0 0 10px;
`;

export const ContactLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 0 0 10px;
`;
