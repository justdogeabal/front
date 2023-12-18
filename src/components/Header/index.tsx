import { Button } from '@mui/material';
import {
  HeaderBottomBorder,
  HeaderContainer,
  HeaderLink,
  HeaderWrapper,
  Logo,
  MenuWrapper,
  SearchBar,
} from './styles';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <div>
      <HeaderContainer>
        <HeaderWrapper>
          <Logo>책리뷰닷컴</Logo>
          <MenuWrapper>
            <HeaderLink href="#">Home</HeaderLink>
            <HeaderLink>My Books</HeaderLink>
            <HeaderLink>Community</HeaderLink>
          </MenuWrapper>
        </HeaderWrapper>
        <HeaderWrapper>
          <div className="flex items-center bg-gray-100 rounded-md overflow-hidden">
            <SearchIcon color="action"></SearchIcon>
            <SearchBar></SearchBar>
          </div>
          <HeaderLink>Sign In</HeaderLink>
          <Button>Join</Button>
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
