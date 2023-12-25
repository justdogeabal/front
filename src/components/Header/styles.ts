import styled from "@emotion/styled";

export const HeaderContainer = styled.nav`
  background-color: white;
  display:flex;
  width: 1100px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  height:86px;
`
export const HeaderBottomBorder = styled.hr`
  color:#ddd;
`
export const SearchBar = styled.input`
  background-color:#d1d5db;
  border: none;
  opacity: 0.33;
` 
export const SearchBarWrapper =styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color:#d1d5db;
  border-radius: 0.375rem;
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

