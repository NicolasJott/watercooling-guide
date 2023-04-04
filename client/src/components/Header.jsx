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
                            <li><a href="#landing">Introduction</a></li>
                            <li><a href="#get-started">Getting Started</a></li>
                            <li><a href="#install">Installation</a></li>
                            <li><a href="#faq">FAQ</a></li>
                        </ul>
                    </NavItems>
                </HeaderNavInner>
            </HeaderNav>
        </HeaderContainer>
    )
}

export default Header

