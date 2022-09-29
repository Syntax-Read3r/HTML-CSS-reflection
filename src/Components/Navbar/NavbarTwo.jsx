import React from 'react'
import '../Styles/sass/main.css'
import {IoAppsSharp} from 'react-icons/io5'
import {ImDisplay} from 'react-icons/im'
import {AiFillSignal} from 'react-icons/ai'
import {MdPhoneInTalk} from 'react-icons/md'
import {GrCode} from 'react-icons/gr'
import {MdSecurity} from 'react-icons/md'
import {IoMdSchool} from 'react-icons/io'

function NavbarTwo() {
  return (
    
    <div className="nav-container">
        <ul className="nav-container__list">
            <li  className="nav-container__list--software ">
                <a href="software" className='nav-container__list--software--item'>
                    <IoAppsSharp className="nav-container__list--software--item--icon"/>
                    <p className='nav-container__list--software--item--small'><small>Bespoke</small></p>
                    <p className='nav-container__list--software--item--paragraph'>Software</p>
                </a>
                <ul className="nav-container__list--software--menu">
                    <li>
                        <a href="#workflow">
                            Workflow
                        </a>
                    </li>
                    <li>
                        <a href="Automation">
                            Automation
                        </a>
                    </li>
                    <li>
                        <a href="#intergration">
                            Integration
                        </a>
                    </li>
                    <li>
                        <a href="#Apps">
                            Apps
                        </a>
                    </li>
                    <li>
                        <a href="#Database">
                            Database
                        </a>
                    </li>
                    <li>
                        <a href="#Sharepoint">
                            SharePoint
                        </a>
                    </li>
                    <li>
                        <a href="#Management">
                            Management
                        </a>
                    </li>
                    <li>
                        <a href="#Navision">
                            Navision
                        </a>
                    </li>
                </ul>
            </li>
            <li className="nav-container__it">
                <a href="#it" className="nav-container__list--it--item">
                    <ImDisplay className="nav-container__list--it--icon"/>
                    <p><small className="nav-container__list--it--small">IT</small></p>
                   <p className="nav-container__list--it--paragraph">Support</p>
                </a>
                <ul className="nav-container__list--it--menu">
                    <li>
                        <a href="#Managed IT">
                            Managed IT
                        </a>
                    </li>
                    <li>
                        <a href="#Business IT">
                            Business IT
                        </a>
                    </li>
                    <li>
                        <a href="#Office 365">
                            Office 365
                        </a>
                    </li>
                    <li>
                        <a href="#consultancy">
                            Consultancy
                        </a>
                    </li>
                    <li>
                        <a href="#Cloud Provider">
                            Cloud Provider
                        </a>
                    </li>
                    <li>
                        <a href="#Data Backup">
                            Data Backup
                        </a>
                    </li>
                </ul>
            </li>
            <li className="nav-container__list--digital">
                <a href="#digital"  className="nav-container__list--digital--item">
                    <AiFillSignal className="nav-container__list--digital--item--icon"/>
                    <p><small  className="nav-container__list--digital--item--small">Digital</small></p>
                    <p  className="nav-container__list--digital--item--paragraph">Marketing</p>
                </a>
                <ul className="nav-container__digital--menu">
                    <li>
                        <a href="#Search">
                            Search (SEO)
                        </a>
                    </li>
                    <li>
                        <a href="#Paid">
                            Paid (PPC)
                        </a>
                    </li>
                    <li>
                        <a href="#Conversion">
                            Conversion (CRO)
                        </a>
                    </li>
                    <li>
                        <a href="#Email">
                            Email
                        </a>
                    </li>
                    <li>
                        <a href="#Social Media">
                            Social Media
                        </a>
                    </li>
                    <li>
                        <a href="#Content">
                            Content
                        </a>
                    </li>
                </ul>
            </li>
            <li  className="nav-container__list--telecoms">
                <a href="#Telecoms"  className="nav-container__list--telecoms--item">
                    <MdPhoneInTalk className="nav-container__list--telecoms--item--icon"/>
                    <p><small  className="nav-container__list--telecoms--item--small">Telecoms</small></p>
                    <p  className="nav-container__list--telecoms--item--paragraph">Services</p>
                </a>
                <ul className="nav-container__telecoms--menu">
                    <li>
                        <a href="#Business Mobile">
                            Business Mobile
                        </a>
                    </li>
                    <li>
                        <a href="#Hosted">
                            Hosted VoIP
                        </a>
                    </li>
                    <li>
                        <a href="#Business VoIP">
                            Business VoIP
                        </a>
                    </li>
                    <li>
                        <a href="#Business Broadband">
                            Business Broadband
                        </a>
                    </li>
                    <li>
                        <a href="#Leased Line">
                            Leased Line
                        </a>
                    </li>
                    <li>
                        <a href="3CX Systems">
                            3CX Systems
                        </a>
                    </li>
                </ul>
            </li>
            <li className="nav-container__list--web">
                <a href="#web" className='nav-container__list--web--item'>
                    <GrCode className="nav-container__list--web--item--icon"/>
                    <p><small className='nav-container__list--web--item--small'>Web</small></p>
                    <p>Design</p>
                </a>
                <ul className="nav-container__web--menu">
                    <li>
                        <a href="#Stylish Websites">
                            Stylish Websites
                        </a>
                    </li>
                    <li>
                        <a href="#Stylish Websites">
                            eCommerce Stores
                        </a>
                    </li>
                    <li>
                        <a href="#Branding">
                            Branding
                        </a>
                    </li>
                    <li>
                        <a href="#Apps">
                            Apps
                        </a>
                    </li>
                    <li>
                        <a href="#Web Hosting">
                            Web Hosting
                        </a>
                    </li>
                    <li>
                        <a href="#Pay Monthly Websites">
                            Pay Monthly Websites
                        </a>
                    </li>
                </ul>
            </li>
            <li className="nav-container__list--security">
                <a href="#Cyber" className="nav-container__list--security--item">
                    <MdSecurity className="nav-container__list--security--item--icon"/>
                    <p><small className="nav-container__list--security--item--small">Cyber</small></p>
                    <p className="nav-container__list--security--item--paragraph">Security</p>
                </a>
                <ul className="nav-container__security--menu">
                    <li>
                        <a href="Assessment">
                            Assessment
                        </a>
                    </li>
                    <li>
                        <a href="#Management">
                            Management
                        </a>
                    </li>
                    <li>
                        <a href="Penetration Testing">
                            Penetration Testing
                        </a>
                    </li>
                    <li>
                        <a href="#Cyber Essentials">
                            Cyber Essentials
                        </a>
                    </li>
                    <li>
                        <a href="#PCI/DSS">
                            PCI/DSS
                        </a>
                    </li>
                    <li>
                        <a href="#Hacker Prevention">
                            Hacker Prevention
                        </a>
                    </li>
                </ul>
            </li>
            <li  className="nav-container__list--developer-course">
                <a href="#Developer" className="nav-container__list--developer-course--item">
                    <IoMdSchool className="nav-container__list--developer-course--item--icon" />
                    <p><small className="nav-container__list--developer-course--item--small">Developer</small></p>
                    <p className="nav-container__list--developer-course--item--paragraphy">Course</p>
                </a>
                <ul className="nav-container__developer--menu">
                    <li>
                        <a href="#Train">
                            Train For A Career In Tech
                        </a>
                    </li>
                    <li>
                        <a href="#Skills Bootcamp">
                            Skills Bootcamp
                        </a>
                    </li>
                    <li>
                        <a href="#Scion Scheme">
                            Scion Scheme Frequently Asked Questions
                        </a>
                    </li>
                    <li>
                        <a href="#Scion Collaborators">
                            Scion Collaborators
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
  )
}

export default NavbarTwo