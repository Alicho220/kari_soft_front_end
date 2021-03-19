import React from 'react'
import { FooterDiv } from './style'
import {AiOutlineTwitter, AiOutlineInstagram, AiOutlineFacebook, AiOutlineWhatsApp } from'react-icons/ai'
import {ImCheckboxUnchecked} from 'react-icons/im'

function Footer() {
    return (
        <FooterDiv>
            <div className="inner-container">
                <div className="left-side icons">
                <AiOutlineTwitter />
                <AiOutlineFacebook />
                <AiOutlineInstagram />

                <ImCheckboxUnchecked />

                </div>
                <div className="right-side ">
                    <p>@2020 ALL RIGHTS RESERVED</p>
                    <p>TERMS AND CONDITION</p>
                    <p>PRIVACY POLICY</p>
                    <p>COOKIE POLICY</p>

                </div>
            </div> 
        </FooterDiv>
    )
}

export default Footer
