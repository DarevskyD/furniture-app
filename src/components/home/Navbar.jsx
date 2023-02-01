import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { Container } from '../../styles/Container.styled';
import Hamburger from './Hamburger';
import {
  Wrapper,
  LeftNav,
  Logo,
  MainNav,
  MenuItemWrapper,
  MenuItem,
  RightNav,
  Language,
  Registration,
  RegistrationItem,
  Cart,
} from '../../styles/home/Navbar.styled';

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <LeftNav>
          <Hamburger />
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
