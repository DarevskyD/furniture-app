import { useState } from 'react';
import styled from 'styled-components';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { sliderItems } from '../data';

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  max-width: 1280px;
  height: 100vh;
  margin: auto;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 60px;
  height: 60px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  margin: auto;
  opacity: 0.5;
  cursor: pointer;
  z-index: 100;
`;

const WrapperSlide = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -1280}px);
  transition: all 1.5s ease;
`;

const Slide = styled.div`
  display: flex;
  min-width: 100%;
`;

const ImgContainer = styled.div`
  flex: 2;
  overflow: hidden;  
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const InfoContainer = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bg};
`;

const InfoWrapper = styled.div`
  width: 60%;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 300;
  margin: 0 0 20px;
`;

const Text = styled.p`
  font-size: 20px;
  margin: 0 0 30px;
  letter-spacing: 2px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 30px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === 'right') {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Arrow direction="left" onClick={() => handleClick('left')}>
          <KeyboardArrowLeftOutlinedIcon />
        </Arrow>
        <WrapperSlide slideIndex={slideIndex}>
          {sliderItems.map((item) => (
            <Slide key={item.id}>
              <ImgContainer>
                <Image src={item.img} />
              </ImgContainer>
              <InfoContainer bg={item.bgc}>
                <InfoWrapper>
                  <Title>{item.title}</Title>
                  <Text>{item.text}</Text>
                  <Button>SHOW NOW</Button>
                </InfoWrapper>
              </InfoContainer>
            </Slide>
          ))}
        </WrapperSlide>
        <Arrow direction="right" onClick={() => handleClick('right')}>
          <KeyboardArrowRightOutlinedIcon />
        </Arrow>
      </Wrapper>
    </Container>
  );
};

export default Slider;
