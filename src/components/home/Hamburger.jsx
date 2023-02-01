import {
  HamburgerMenu,
  HamburgerMenuLines,
  TopLine,
  CenterLine,
  BottomLine,
} from '../../styles/home/Hamburger.styled';

const Hamburger = () => {
  return (
    <>
      <HamburgerMenu>
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
