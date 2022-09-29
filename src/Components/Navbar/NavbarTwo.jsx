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
    
    <div class="container">
        <ul>
            <li  class="container__software ">
                <a href="software">
                    <IoAppsSharp class="container__software--icon"/>
                    <small>Bespoke</small>
                    Software
                </a>
                <ul class="container__software--menu">
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
            <li class="container__it">
                <a href="#it">
                    <ImDisplay class="container__it--icon"/>
                    <small>IT</small>
                    Support
                </a>
                <ul class="container__it--menu">
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
            <li class="container__digital">
                <a href="#digital">
                    <AiFillSignal class="container__digital--icon"/>
                    <small>Digital</small>
                    Marketing
                </a>
                <ul class="container__digital--menu">
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
            <li  class="container__telecoms">
                <a href="#Telecoms">
                    <MdPhoneInTalk class="container__telecoms--icon"/>
                    <small>Telecoms</small>
                    Services
                </a>
                <ul class="container__telecoms--menu">
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
            <li class="container__web">
                <a href="#web">
                    <GrCode class="container__web--icon"/>
                    <small>Web</small>
                    Design
                </a>
                <ul class="container__web--menu">
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
            <li class="container__security">
                <a href="#Cyber">
                    <MdSecurity class="container__security--icon"/>
                    <small>Cyber</small>
                    Security
                </a>
                <ul class="container__security--menu">
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
            <li  class="container__developer-course">
                <a href="#Developer">
                    <IoMdSchool class="container__developer-course--icon" />
                    <small>Developer</small>
                    Course
                </a>
                <ul class="container__developer--menu">
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