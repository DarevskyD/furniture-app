import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import {
  Container,
  Wrapper,
  Left,
  Logo,
  Description,
  SocialContainer,
  SocialLink,
  CenterAbout,
  Title,
  AboutUs,
  AboutUsItem,
  AboutUsLink,
  CenterHelp,
  Help,
  HelpTitle,
  HelpItem,
  HelpLink,
  Right,
  Contact,
  ContactTitle,
  ContactItem,
  ContactLink,  
} from '../../styles/home/Footer.styled';

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>F_DESIGN</Logo>
          <Description>
            It’s a furnishing style that dresses the space with charm and suggestion, preferring
            textures that are soft to the touch and with a high aesthetic quality, combining
            precious woods, metals, marbles and material finishes.
          </Description>
          <SocialContainer>
            <SocialLink href="#" color="E4405F">
              <InstagramIcon />
            </SocialLink>
            <SocialLink href="#" color="3B5999">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="#" color="E60023">
              <PinterestIcon />
            </SocialLink>
            <SocialLink href="#" color="55ACEE">
              <TwitterIcon />
            </SocialLink>
          </SocialContainer>
        </Left>
        <CenterAbout>
          <Title>About Us</Title>
          <AboutUs>
            <AboutUsItem>
              <AboutUsLink href="#">About Target</AboutUsLink>
            </AboutUsItem>
            <AboutUsItem>
              <AboutUsLink href="#">Careers</AboutUsLink>
            </AboutUsItem>
            <AboutUsItem>
              <AboutUsLink href="#">News & Blog</AboutUsLink>
            </AboutUsItem>
            <AboutUsItem>
              <AboutUsLink href="#">Target Brands</AboutUsLink>
            </AboutUsItem>
            <AboutUsItem>
              <AboutUsLink href="#">Affiliates & Partners</AboutUsLink>
            </AboutUsItem>
          </AboutUs>
        </CenterAbout>
        <CenterHelp>
          <HelpTitle>Help</HelpTitle>
          <Help>
            <HelpItem>
              <HelpLink href="#">Target Help</HelpLink>
            </HelpItem>
            <HelpItem>
              <HelpLink href="#">Returns</HelpLink>
            </HelpItem>
            <HelpItem>
              <HelpLink href="#">Track Orders</HelpLink>
            </HelpItem>
            <HelpItem>
              <HelpLink href="#">Feedback</HelpLink>
            </HelpItem>
            <HelpItem>
              <HelpLink href="#">Recalls</HelpLink>
            </HelpItem>
          </Help>
        </CenterHelp>
        <Right>
          <ContactTitle>Contact Us</ContactTitle>
          <Contact>
            <ContactItem>
              <RoomOutlinedIcon />
              <ContactLink href="#">via Brescia 65, 56740, Desio</ContactLink>
            </ContactItem>
            <ContactItem>
              <PhoneIcon />
              <ContactLink href="tel:123-456-7890p123">+123-456-7890p123</ContactLink>
            </ContactItem>
            <ContactItem>
              <EmailOutlinedIcon />
              <ContactLink href="mailto:info@f_disign.com">info@f_disign.com</ContactLink>
            </ContactItem>
          </Contact>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Footer;
