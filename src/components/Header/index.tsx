import { Button, Link } from '@mui/material';
import {
  HeaderBottomBorder,
  HeaderContainer,
  HeaderLink,
  HeaderWrapper,
  Logo,
  MenuWrapper,
  SearchBar,
  SearchBarWrapper,
} from './styles';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <div>
      <HeaderContainer>
        <HeaderWrapper>
          <Logo>책물교환</Logo>
          <MenuWrapper>
            <HeaderLink href="#">Home</HeaderLink>
            <HeaderLink>My Books</HeaderLink>
            <HeaderLink>Community</HeaderLink>
          </MenuWrapper>
        </HeaderWrapper>
        <HeaderWrapper>
          <SearchBarWrapper>
            <SearchBar />
            <SearchIcon color="action"></SearchIcon>
          </SearchBarWrapper>
          <HeaderLink href="/login">Sign In</HeaderLink>
          <Link>
            <Button>Join</Button>
          </Link>
        </HeaderWrapper>
      </HeaderContainer>
      <HeaderBottomBorder />
      <div className="relative">
        <img
          alt="광고"
          className="w-full h-[400px] object-cover"
          height="400"
          src="/placeholder.svg"
          style={{
            aspectRatio: '1902/400',
            objectFit: 'cover',
          }}
          width="1902"
        />
      </div>
    </div>
  );
};

export default Header;
