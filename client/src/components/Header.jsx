import React, {useEffect, useState} from "react";
import { HeaderContainer, HeaderNav, HeaderNavInner, Logo, NavItems } from "../styled/Header";
import {CSSTransition, Transition, TransitionGroup} from 'react-transition-group';
import {navLinks} from "../config";
import {loaderDelay} from "../utils";
import PropTypes from "prop-types";
import {useScrollDirection} from "../hooks";
import {Link} from "react-router-dom";


const Header = ({ isHome }) => {
    const [isMounted, setIsMounted] = useState(!isHome);
    const scrollDirection = useScrollDirection('down')
    const [scrolledToTop, setScrolledToTop] = useState(true)

    const handleScroll = () => {
        setScrolledToTop(window.pageYOffset < 50)
    }

    const smoothScroll = (e, target) => {
        e.preventDefault();
        localStorage.setItem('isLearning', 'false');

        if (target === "#home") {
            const offsetTop = 0;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth',
            });
        } else {
            const targetElement = document.querySelector(target);
            const rect = targetElement.getBoundingClientRect();
            const offsetTop = rect.top + window.pageYOffset;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth',
            });
        };
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsMounted(true);
        }, 100)

        window.addEventListener('scroll', handleScroll)

        return () => {
            clearTimeout(timeout)
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const timeout = isHome ? loaderDelay : 0;
    const fadeClass = isHome ? 'fade' : '';
    const fadeDownClass = isHome ? 'fadedown' : '';

    const logo = (
        <Logo>
            {isHome ? (
                <a href="/" aria-label="home" onClick={(e) => smoothScroll(e, '#home')}>
                    Water Cooling Guide
                </a>
            ) : (
                <Link to="/" aria-label="home">
                    Water Cooling Guide
                </Link>
            )}
        </Logo>
    )

    return (
        <HeaderContainer scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
            <HeaderNav>
                <HeaderNavInner>
                    <TransitionGroup component={null}>
                        {isMounted && (
                        <CSSTransition classNames={fadeClass} timeout={timeout}>
                            {logo}
                        </CSSTransition>
                            )}
                    </TransitionGroup>
                    <NavItems>
                        <ul>
                            <TransitionGroup component={null}>
                                    {isMounted &&
                                        navLinks &&
                                        navLinks.map(({ url, name }, i) => (
                                            <CSSTransition key={i} classNames={fadeDownClass} timeout={timeout}>
                                                <li key={i} style={{ transitionDelay: `${isHome ? i * 100 : 0}ms` }}>
                                                    <a href={url} onClick={(e) => smoothScroll(e, url)}>{(i+1) + ". " + name}</a>
                                                </li>
                                            </CSSTransition>
                                        ))
                                    }
                            </TransitionGroup>
                        </ul>
                    </NavItems>
                </HeaderNavInner>
            </HeaderNav>
        </HeaderContainer>
    )
}

Header.propTypes = {
    isHome: PropTypes.bool
}

export default Header

