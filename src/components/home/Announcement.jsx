import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  background-color: #1C1C1C;
`;

const Wrapper = styled.div`  
  max-width: 1280px;
  margin: 0 auto;
  padding: 10px 0;
  text-align: center;
`;

const Title = styled.p`
  color: #ffffff;
`;

const Announcement = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Super Deal! Free shipping on Orders Over $100</Title>
      </Wrapper>
    </Container>
  );
};

export default Announcement;
