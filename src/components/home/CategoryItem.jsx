import styled from 'styled-components';

const ItemContainer = styled.div`
  flex: 1;
  min-width: 370px;
  height: 70vh;
  margin: 5px;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(165, 165, 165, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h2`
  margin-bottom: 15px;
  font-size: 40px;
  font-weight: 600;
  padding: 10px;
  background-color: #ffffff;
`;

const Button = styled.button`
  padding: 10px;
  font-weight: 500;
  border: 1px solid #ffffff;  
`;

const CategoryItem = ({ item }) => {
  const { img, title } = item;
  return (
    <ItemContainer>
      <Image src={img} />
      <Info>
        <Title>{title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </ItemContainer>
  );
};

export default CategoryItem;
