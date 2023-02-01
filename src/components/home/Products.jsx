import Product from './Product';
import { Container } from '../../styles/Container.styled';
import { Wrapper } from '../../styles/home/Products.styled';

import { products } from '../../data';

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
