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
  margin: 0 auto;
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

const MenuItemWrapper = styled.span`
  position: relative;
  margin-right: 30px;
`;

const MenuItem = styled.a`
  text-decoration: none;
  color: #1c1c1c;
  cursor: pointer;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: -3px;
    left: 0;
    background-color: #1c1c1c;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.5s;
  }
  &:hover {
    &:after {
      transform-origin: bottom left;
      transform: scaleX(1);
    }
  }
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
          <MenuItemWrapper>
            <MenuItem href="#">HOME</MenuItem>
          </MenuItemWrapper>
          <MenuItemWrapper>
            <MenuItem href="#">SHOP</MenuItem>
          </MenuItemWrapper>
          <MenuItemWrapper>
            <MenuItem href="#">MAGAZINE</MenuItem>
          </MenuItemWrapper>
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
