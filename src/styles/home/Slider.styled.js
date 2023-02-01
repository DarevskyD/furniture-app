import styled from 'styled-components';
import { size } from '../BreakPoints';

export const Wrapper = styled.div`
  max-width: ${size.lg};
  height: 100vh;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`;

export const Arrow = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${({theme}) => theme.colors.light};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${({direction}) => direction === 'left' && '10px'};
  right: ${({direction}) => direction === 'right' && '10px'};
  margin: auto;
  opacity: 0.5;
  cursor: pointer;
  z-index: 100;
`;

export const WrapperSlide = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -1280}px);
  transition: all 1.5s ease;
`;

export const Slide = styled.div`
  display: flex;
  min-width: 100%;
`;

export const ImgContainer = styled.div`
  flex: 2;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const InfoContainer = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({bg}) => bg};
`;

export const InfoWrapper = styled.div`
  width: 60%;
`;

export const Title = styled.h1`
  font-size: 60px;
  font-weight: 300;
  margin: 0 0 20px;
`;

export const Text = styled.p`
  font-size: 20px;
  margin: 0 0 30px;
  letter-spacing: 2px;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 30px;
  border: 1px solid ${({theme}) => theme.colors.primary};
`;
