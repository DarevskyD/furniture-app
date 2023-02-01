import { Wrapper, Title } from '../../styles/home/Announcement.styled';
import { Container } from '../../styles/Container.styled';
import { theme } from '../../styles/Theme';

const Announcement = () => {
  return (
    <Container bg={theme.colors.primary}>
      <Wrapper>
        <Title>Super Deal! Free shipping on Orders Over $100</Title>
      </Wrapper>
    </Container>
  );
};

export default Announcement;
