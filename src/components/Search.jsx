import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`
  width: 100%;
  padding: 10px 0;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 1280px;
  height: 55px;
  margin: auto;
  padding: 0 20px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
`;

const Input = styled.input`
  width: 100%;
  padding: 0 20px;
  margin-left: 10px;
  font-size: 18px;
  font-style: italic;
  border: none;
  border-bottom: 1px solid lightgray;
  outline: none;
`;

const Search = () => {
  return (
    <Container>
      <Wrapper>
        <SearchContainer>
          <SearchIcon sx={{ fontSize: '30px' }} />
          <Input placeholder="Search..." />
        </SearchContainer>
      </Wrapper>
    </Container>
  );
};

export default Search;
