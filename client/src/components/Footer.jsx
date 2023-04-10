import React from "react";
import styled from "styled-components";



const Footer = () => {

    const date = new Date()
    const year = date.getFullYear()


    const Footer = styled.footer`
      height: 70px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      
      p {
        font-size: 20px;
        color: white;
      }
    `

    return (
        <Footer>
            <p>Water Cooling Guide Created by Nicolas Ott {year}</p>
        </Footer>
    )
}

export default Footer