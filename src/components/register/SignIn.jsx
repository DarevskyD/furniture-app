import { theme } from '../../styles/Theme';
import { Container } from '../../styles/Container.styled';

import {
  Wrapper,
  FormContainer,
  Title,
  Form,
  Input,
  Button,
  Link,
} from '../../styles/register/SignIn.styled';

const LogIn = () => {
  return (
    <Container bg={theme.colors.lightS}>
      <Wrapper>
        <Title>SIGN IN</Title>
        <FormContainer>
          <Form>
            <Input placeholder="username" />
            <Input placeholder="password" />
            <Button>SIGN IN</Button>
            <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT?</Link>
          </Form>
        </FormContainer>
      </Wrapper>
    </Container>
  );
};

export default LogIn;
