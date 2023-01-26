import styled from 'styled-components';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.header`
  width: 100%;
`;

const Wrapper = styled.div`
  max-width: 1280px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding: 0 20px;
`;

const LeftNav = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const HamburgerMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: #000000;
  cursor: pointer;
  display: none;
`;

const HamburgerMenuLines = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TopLine = styled.span`
  width: 25px;
  height: 5px;
  background-color: #ffffff;
`;
const CenterLine = styled.span`
  width: 25px;
  height: 5px;
  background-color: #ffffff;
`;
const BottomLine = styled.span`
  width: 13px;
  height: 5px;
  background-color: #ffffff;
`;

const Logo = styled.h1`
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 5px;
`;

const MainNav = styled.nav`
  flex: 2;
  display: flex;
  align-items: center;
`;

const Menu = styled.ul`
  display: flex;
`;

const MenuItem = styled.li`
  list-style-type: none;
  margin-right: 30px;
  cursor: pointer;
`;

const RightNav = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Language = styled.div`
  display: flex;
  cursor: pointer;
`;

const Registration = styled.div`
  display: flex;
`;
const RegistrationItem = styled.div`
  font-weight: 600;
  margin-right: 10px;
  &:nth-child(2) {
    margin-right: 0;
  }
  cursor: pointer;
`;
const Cart = styled.div`
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <LeftNav>
          <HamburgerMenu>
            <HamburgerMenuLines>
              <TopLine />
              <CenterLine />
              <BottomLine />
            </HamburgerMenuLines>
          </HamburgerMenu>
          <Logo>F_DESIGN</Logo>
        </LeftNav>
        <MainNav>
          <Menu>
            <MenuItem>HOME</MenuItem>
            <MenuItem>SHOP</MenuItem>
            <MenuItem>MAGAZINE</MenuItem>
          </Menu>
        </MainNav>
        <RightNav>
          <Language>EN</Language>
          <Registration>
            <RegistrationItem>REGISTRATION</RegistrationItem>
            <RegistrationItem>LOGIN</RegistrationItem>
          </Registration>
          <Cart>
            <Badge badgeContent={1} color="primary">
              <ShoppingCartOutlinedIcon color="action" />
            </Badge>
          </Cart>
        </RightNav>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
