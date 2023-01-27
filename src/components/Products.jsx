import styled from 'styled-components';
import { products } from '../data';
import Product from './Product';

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  max-width: 1280px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Products = () => {
  return (
    <Container>
      <Wrapper>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Products;
