import React from 'react';
import styled from 'styled-components';
import githublogo from '../static/icons/25231.png'
import linkedinlogo from '../static/icons/linkedin.png'
import gmaillogo from '../static/icons/gmail.png'

const Footer = () => {

    const FooterContainer = styled.div`
        display: flex;
        justify-content: space-evenly;
        margin: auto;
        background-color: #679289;
    ` 

    const FooterText = styled.h3`
        display: flex;
        font-size: 1em;
        color: ${(props) => props.color || "#000000"};
    `

    return (
        <FooterContainer>
            <FooterText ><img src={githublogo} height={20} width={20}/>github.com/MCardwe</FooterText>
            <FooterText color='#fff'><img src={linkedinlogo} height={20} width={20} />linkedin.com/in/maxCardwell/</FooterText>
            <FooterText color='#EE2E31'><img src={gmaillogo} height={20} width={20}/>maximillian.cardwell@gmail.com</FooterText>
        </FooterContainer>
    );
}

export default Footer;
