import styled, {css} from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  top: 0;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 11;
  padding: 0 50px;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  ${props =>
          props.scrollDirection === 'down' &&
          !props.scrolledToTop &&
          css`
        height: var(--nav-scroll-height);
        transform: translateY(calc(var(--nav-scroll-height) * -1));
        box-shadow: 0 10px 30px -10px var(--navy-shadow);
      `};

  @media (max-width: 768px) {
    padding: 0 40px;
  }
  
`

export const HeaderNav = styled.nav`
  display: flex;
  background-color: var(--navbar-outer);
  border-radius: 1rem;
  height: 80px;
  width: 80%;
  align-items: center;
  padding: 4px;
  margin-top: 5px;
  justify-content: center;
  z-index: 12;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const HeaderNavInner = styled.div`
  height: 100%;
  width: 100%;
  background-color: var(--navbar-inner);
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.div`
  display: flex;
  margin-left: 20px;
  
  a {
    font-size: 30px;
    color: white;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    margin-left: 10px;
    
    a {
      font-size: 20px;
    }
  }


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

  @media (max-width: 1100px) {
    display: none;
  }

`

export const NavButton = styled.div`

`

