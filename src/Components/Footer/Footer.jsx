import React from 'react'
import "../Styles/sass/main.css";
import {ImFacebook} from "react-icons/im"
import {BsTwitter} from "react-icons/bs"
import {GrInstagram} from "react-icons/gr"
import {GrLinkedinOption} from "react-icons/gr"


function Footer() {
  return (
    <footer className="footer">
        <div className="container">
            <div className="container__top-row">
                <div className="container__top-row--services">
                    <div className="container__top-row--services--service">
                        <h4>
                            About Netmatters
                        </h4>
                        <ul>
                            <li className='container__top-row--services--service--item'>
                                <a href="https://www.netmatters.co.uk/news" >News</a>
                            </li>
                            <li  className='container__top-row--services--service--item'>
                                <a href="https://www.netmatters.co.uk/our-careers" >Our Careers</a>
                            </li>
                            <li   className='container__top-row--services--service--item'>
                                <a href="https://www.netmatters.co.uk/team" >Our Team</a>
                            </li>
                            <li   className='container__top-row--services--service--item'>
                                <a href="https://www.netmatters.co.uk/privacy-policy" >Privacy Policy</a>
                            </li>
                            <li   className='container__top-row--services--service--item'>
                                <a href="https://www.netmatters.co.uk/cookie-policy" >Cookie Policy</a>
                            </li>
                            <li   className='container__top-row--services--service--item'>
                                <a href="https://www.netmatters.co.uk/terms-and-conditions" >Terms &amp; Conditions</a>
                            </li>
                            <li   className='container__top-row--services--service--item'>
                                <a href="https://www.netmatters.co.uk/our-culture/environmental-policy" >Environmental Policy</a>
                            </li>
                            <li   className='container__top-row--services--service--item'>
                                <a href="https://www.netmatters.co.uk/contact-us" >Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="service">
                        <h4>
                            Our Services
                        </h4>
                        <ul>
                            <li  className='container__top-row--services--service--item'>
                                <a href="#Bespoke" >Bespoke Software</a>
                            </li>
                            <li  className='container__top-row--services--service--item'>
                                <a href="#IT" >IT Support</a>
                            </li>
                            <li  className='container__top-row--services--service--item'>
                                <a href="#Digital" >Digital Marketing</a>
                            </li>
                            <li  className='container__top-row--services--service--item'>
                                <a href="#Telecos" >Telecoms Services</a>
                            </li>
                            <li  className='container__top-row--services--service--item'>
                                <a href="#Web Design" >Web Design</a>
                            </li>
                            <li  className='container__top-row--services--service--item'>
                                <a href="#Cyber" >Cyber Security</a>
                            </li>
                            <li  className='container__top-row--services--service--item'>
                                <a href="#Developer" >Developer Training</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="container__top-row--offices">
                    <div className="container__top-row--offices--location">
                        <h4 >
                            Cambridge Office
                        </h4>
                        <ul >
                            <li >
                                Unit 1.31,
                            </li>
                            <li >
                                St John's Innovation Centre,
                            </li>
                            <li >
                                Cowley Road, Milton,
                            </li>
                            <li >
                                Cambridge,
                            </li>
                            <li >
                                CB4 0WS
                            </li>
                            <li >
                                &nbsp;
                            </li>
                            <li >
                                Tel: <a href="tel:#tel">01223 37 57 72</a>
                            </li>
                        </ul>
                    </div>
                    <div className="container__top-row--offices--location">
                        <h4>
                            Wymondham Office
                        </h4>
                        <ul>
                            <li>
                                Unit 15,
                            </li>
                            <li>
                                Penfold Drive,
                            </li>
                            <li>
                                Gateway 11 Business Park,
                            </li>
                            <li>
                                Wymondham, Norfolk,
                            </li>
                            <li>
                                NR18 0WZ
                            </li>
                            <li>
                                &nbsp;
                            </li>
                            <li>
                                Tel: <a href="tel:01603704020">01603 70 40 20</a>
                            </li>
                        </ul>
                    </div>
                    <div className="container__top-row--offices--location">
                        <h4 >
                            Great Yarmouth Office
                        </h4>
                        <ul >
                            <li >
                                Suite F23,
                            </li>
                            <li >
                                Beacon Innovation Centre,
                            </li>
                            <li >
                                Beacon Park, Gorleston,
                            </li>
                            <li >
                                Great Yarmouth, Norfolk,
                            </li>
                            <li >
                                NR31 7RA
                            </li>
                            <li >
                                &nbsp;
                            </li>
                            <li >
                                Tel: <a href="tel:01493603204">01493 60 32 04</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container__bottom-row">
                <div className="container__bottom-row--horizontal-line">
                    <hr />
                </div>
                <div className="container__bottom-row--content">
                    <div className="container__bottom-row--content--copyright">
                        © Copyright Netmatters 2022.<br className="BR_77" /> All rights reserved. <span className="SPAN_78">-</span>
                        <ul className="UL_79">
                            <li className="LI_80">
                                <a href="#Sitemap" className="A_81">Sitemap</a>
                            </li>
                        </ul>
                    </div>
                    <div className="container__bottom-row--content--socials">
                        <a href="https://en-gb.facebook.com/netmatters/" rel="noopener noreferrer" className="container__bottom-row--content--socials--item"><ImFacebook/></a>
                        
                        <a href="https://twitter.com/netmattersltd" rel="noopener noreferrer" className="container__bottom-row--content--socials--item"><BsTwitter/></a> 
                        
                        <a href="https://www.instagram.com/netmattersltd/" rel="noopener noreferrer" className="container__bottom-row--content--socials--item"><GrInstagram/></a> 
                        
                        <a href="https://www.linkedin.com/company/netmatters-ltd/" rel="noopener noreferrer" className="container__bottom-row--content--socials--item"><GrLinkedinOption/></a>
                    </div>
                </div>
            </div>
        </div>
</footer>
  )
}

export default Footer