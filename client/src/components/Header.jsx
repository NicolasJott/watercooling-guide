import React from "react";
import { HeaderContainer, HeaderNav, HeaderNavInner, Logo, NavItems } from "../styled/Header";


const Header = () => {
    return (
        <HeaderContainer>
            <HeaderNav>
                <HeaderNavInner>
                    <Logo> Water Cooling Guide</Logo>
                    <NavItems>
                        <ul>
                            <li><a href="">Introduction</a></li>
                            <li><a href="">Getting Started</a></li>
                            <li><a href="">FAQ</a></li>
                        </ul>
                    </NavItems>
                </HeaderNavInner>
            </HeaderNav>
        </HeaderContainer>
    )
}

export default Header

