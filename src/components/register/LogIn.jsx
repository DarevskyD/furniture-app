import { theme } from '../../styles/Theme';
import { Container } from '../../styles/Container.styled';
import {
  Wrapper,
  FormContainer,
  Title,
  Form,
  Input,
  Agreement,
  Button,
} from '../../styles/register/LogIn.styled';

const LogIn = () => {
  return (
    <Container bg={theme.colors.lightS}>
      <Wrapper>
        <Title>CREATE ACCOUNT</Title>
        <FormContainer>
          <Form>
            <Input placeholder="name" />
            <Input placeholder="last name" />
            <Input placeholder="user name" />
            <Input placeholder="email" />
            <Input placeholder="password" />
            <Input placeholder="confirm password" />
            <Agreement>
              By creating an account, I consent to the processing of my personal data in accordance
              with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>CREATE</Button>
          </Form>
        </FormContainer>
      </Wrapper>
    </Container>
  );
};

export default LogIn;
