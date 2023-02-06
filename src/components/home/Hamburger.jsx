import {
  HamburgerMenu,
  HamburgerMenuLines,
  TopLine,
  CenterLine,
  BottomLine,
} from '../../styles/home/Hamburger.styled';

const Hamburger = ({scrolled}) => {
  return (
    <>
      <HamburgerMenu scrolled={scrolled}>
        <HamburgerMenuLines>
          <TopLine />
          <CenterLine />
          <BottomLine />
        </HamburgerMenuLines>
      </HamburgerMenu>
    </>
  );
};

export default Hamburger;
