import styled from "@emotion/styled";

export const HeaderContainer = styled.nav`
  background-color: white;
  display:flex;
  border-bottom: 1px solid #ddd;
  justify-content: space-between;
  align-items: center;
`

export const SearchBar = styled.input`
  background-color:#d1d5db;
  border: none;
  opacity: 0.33;
` 

export const Logo = styled.h1`
  font-size: 36px;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  height: 2.5rem;
`

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left:1rem;
`

export const HeaderLink =styled.a`
  color: #374151;
  &:hover {
    color: #111827;
    cursor: pointer;
  }
`

export const MenuWrapper = styled.div`
  @media (min-width: 768px) {
    display:flex;
  }
  margin-left: 1rem;
`