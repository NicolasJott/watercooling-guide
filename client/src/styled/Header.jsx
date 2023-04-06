import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  margin-top: 5px;
  display: flex;
  width: 100%;
  position: fixed;
  justify-content: center;
  top: 0;
  right: 0;
  left: 0;
  z-index: 9;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  ${props =>
          props.scrollDirection === 'down' &&
          !props.scrolledToTop &&
          css`
        height: 80px;
        transform: translateY(calc(-85px));
        box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);
      `};
}
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
  
  a {
    font-size: 1.5rem;
    color: white;
    text-decoration: none;
    
  }
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

