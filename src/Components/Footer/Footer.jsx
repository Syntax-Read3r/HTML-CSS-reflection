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
                            <li className='container__top-row--services--service'>
                                <a href="#News" className='container__top-row--services--service--item'>News</a>
                            </li>
                            <li  className='container__top-row--services--service'>
                                <a href="#Our Service" className='container__top-row--services--service--item'>Our Careers</a>
                            </li>
                            <li   className='container__top-row--services--service'>
                                <a href="#Our Team" className='container__top-row--services--service--item'>Our Team</a>
                            </li>
                            <li   className='container__top-row--services--service'>
                                <a href="#Privacy" className='container__top-row--services--service--item' >Privacy Policy</a>
                            </li>
                            <li   className='container__top-row--services--service'>
                                <a href="#Cookie" className='container__top-row--services--service--item' >Cookie Policy</a>
                            </li>
                            <li   className='container__top-row--services--service'>
                                <a href="#Team" className='container__top-row--services--service--item'>Terms &amp; Conditions</a>
                            </li>
                            <li   className='container__top-row--services--service'>
                                <a href="#Environmental" className='container__top-row--services--service--item'>Environmental Policy</a>
                            </li>
                            <li   className='container__top-row--services--service'>
                                <a href="#Contact" className='container__top-row--services--service--item' >Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="service">
                        <h4>
                            Our Services
                        </h4>
                        <ul>
                            <li  className='container__top-row--services--service'>
                                <a href="#Bespoke" className='container__top-row--services--service--item'>Bespoke Software</a>
                            </li>
                            <li  className='container__top-row--services--service'>
                                <a href="#IT" className='container__top-row--services--service--item'>IT Support</a>
                            </li>
                            <li  className='container__top-row--services--service'>
                                <a href="#Digital" className='container__top-row--services--service--item'>Digital Marketing</a>
                            </li>
                            <li  className='container__top-row--services--service'>
                                <a href="#Telecos" className='container__top-row--services--service--item' >Telecoms Services</a>
                            </li>
                            <li  className='container__top-row--services--service'>
                                <a href="#Web Design"  className='container__top-row--services--service--item' >Web Design</a>
                            </li>
                            <li  className='container__top-row--services--service'>
                                <a href="#Cyber"  className='container__top-row--services--service--item' >Cyber Security</a>
                            </li>
                            <li  className='container__top-row--services--service'>
                                <a href="#Developer"  className='container__top-row--services--service--item'>Developer Training</a>
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
                                Tel: <a href="tel:#tel" className="container__top-row--offices--location--tel">01223 37 57 72</a>
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
                                Tel: <a href="tel:01603704020" className="container__top-row--offices--location--tel">01603 70 40 20</a>
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
                                Tel: <a href="tel:01493603204" className="container__top-row--offices--location--tel">01493 60 32 04</a>
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
                        <p>© Copyright Netmatters 2022. All rights reserved. -  <a href="#Sitemap" className="container__bottom-row--content--copyright--linkItem">Sitemap</a></p>
             
                    </div>
                    <div className="container__bottom-row--content--socials">
                        <a href="h#facebook" rel="noopener noreferrer" className="container__bottom-row--content--socials--icon"><ImFacebook
                        className="container__bottom-row--content--socials--icon--one"/></a>
                        
                        <a href="twitter" rel="noopener noreferrer" className="container__bottom-row--content--socials--icon"><BsTwitter
                        className="container__bottom-row--content--socials--icon--two"/></a> 
                        
                        <a href="Instagram" rel="noopener noreferrer" className="container__bottom-row--content--socials--icon"><GrInstagram
                        className="container__bottom-row--content--socials--icon--three"/></a> 
                        
                        <a href="#instagram" rel="noopener noreferrer" className="container__bottom-row--content--socials--icon"><GrLinkedinOption
                        className="container__bottom-row--content--socials--icon--four" /></a>
                    </div>
                </div>
            </div>
        </div>
</footer>
  )
}

export default Footer