import styled from 'styled-components';

import CategoryItem from './CategoryItem';
import { categories } from '../data';

const Container = styled.div`
  width: 100%;
  padding: 30px 0;
`;

const Wrapper = styled.div`
  max-width: 1280px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Categories = () => {
  return (
    <Container>
      <Wrapper>
        {categories.map((item) => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Categories;
