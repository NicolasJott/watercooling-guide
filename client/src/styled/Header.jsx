import styled from "styled-components";

export const HeaderContainer = styled.header`
  margin-top: 5px;
  display: flex;
  width: 100%;
  position: fixed;
  justify-content: center;
  align-items: center;
`

export const HeaderNav = styled.nav`
  display: flex;
  background-color: #464646;
  border-radius: 1rem;
  height: 80px;
  width: 1200px;
  align-items: center;
  padding: 4px;
  justify-content: center;
`

export const HeaderNavInner = styled.div`
  height: 100%;
  width: 100%;
  background-color: #262626;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.div`
  font-size: 1.5rem;
  color: white;
  display: flex;
  margin-left: 20px;


`

export const NavItems = styled.div`
  display: flex;
  
  a {
    text-decoration: none;
    color: white;
    transition: 0.2s ease;
    
    &:hover {
      color: #868686;
    }

  }
  
  ul {
    display: flex;
    justify-content: space-between;
  }
  
  li {
    list-style-type: none;
    margin-right: 20px;
    margin-left: 30px;
  }

`

