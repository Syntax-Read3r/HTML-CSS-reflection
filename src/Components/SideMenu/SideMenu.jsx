import React from 'react'
import "../Styles/sass/main.css";
import '../Styles/css/reset.css';
import {BiChevronsRight} from 'react-icons/bi'


function SideMenu() {
  return (
    <div className='sideMenu'>
        <ul>
            <li className='sideMenu__heading'>
                <a className='sideMenu__heading--anchor' href="#Services">Services</a>

                <ul className='sideMenu__heading--list'>
                    <li className='sideMenu__heading--list-item'><a href="#IT Support" className='sideMenu__heading--list-item--anchor'><BiChevronsRight className='sideMenu__heading--list-item--icon'/>   BESPOLE SOFTWARE</a></li>
                    <li className='sideMenu__heading--list-item'><a href="#IT Support" className='sideMenu__heading--list-item--anchor'><BiChevronsRight className='sideMenu__heading--list-item--icon'/>   IT SUPPORT</a></li>
                    <li className='sideMenu__heading--list-item'><a href="#IT Support" className='sideMenu__heading--list-item--anchor'><BiChevronsRight className='sideMenu__heading--list-item--icon'/>   DIGITAL MARKETING</a></li>
                    <li className='sideMenu__heading--list-item'><a href="#IT Support" className='sideMenu__heading--list-item--anchor'><BiChevronsRight className='sideMenu__heading--list-item--icon'/>   TELECOMS SERVICES</a></li>
                    <li className='sideMenu__heading--list-item'><a href="#IT Support" className='sideMenu__heading--list-item--anchor'><BiChevronsRight className='sideMenu__heading--list-item--icon'/>   WEBSITE DESIGN</a></li>
                    <li className='sideMenu__heading--list-item'><a href="#IT Support" className='sideMenu__heading--list-item--anchor'><BiChevronsRight className='sideMenu__heading--list-item--icon'/>   CYBER SECURITY</a></li>
                </ul>
            </li>

            <li className='sideMenu__heading'>
                <a className='sideMenu__heading--anchor' href="#About">OUR KNOWLEDGE</a>
                <ul className='sideMenu__heading--list'>
                    <li className='sideMenu__heading--list-item'><a href="#IT Support" className='sideMenu__heading--list-item--anchor'><BiChevronsRight className='sideMenu__heading--list-item--icon'/>   TECHNOLOGIES</a></li>
                    <li className='sideMenu__heading--list-item'><a href="#IT Support" className='sideMenu__heading--list-item--anchor'><BiChevronsRight className='sideMenu__heading--list-item--icon'/>   NEWS</a></li>
                    <li className='sideMenu__heading--list-item'><a href="#IT Support" className='sideMenu__heading--list-item--anchor'><BiChevronsRight className='sideMenu__heading--list-item--icon'/>   INSIGHTS</a></li>
                </ul>
            </li>

            <li className='sideMenu__heading'>
                <a className='sideMenu__heading--anchor' href="#Training">TRAINING</a>
                <ul className='sideMenu__heading--list'> 
                    <li className='sideMenu__heading--list-item'><a href="#IT Support" className='sideMenu__heading--list-item--anchor'><BiChevronsRight className='sideMenu__heading--list-item--icon'/>   TRAIN FOR A CAREER IN TECH</a></li>
                    <li className='sideMenu__heading--list-item'><a href="#IT Support" className='sideMenu__heading--list-item--anchor'><BiChevronsRight className='sideMenu__heading--list-item--icon'/>   ONLINE SKILLS BOOTCAMP</a></li>
                    <li className='sideMenu__heading--list-item'><a href="#IT Support" className='sideMenu__heading--list-item--anchor'><BiChevronsRight className='sideMenu__heading--list-item--icon'/>   SCS FREQUENTLY ASKED QUESTIONS</a></li>
                    <li className='sideMenu__heading--list-item'><a href="#IT Support" className='sideMenu__heading--list-item--anchor'><BiChevronsRight className='sideMenu__heading--list-item--icon'/>   SCION COLLABORATORS</a></li>
                </ul>
            </li>

            <li className='sideMenu__heading'>
                <a className='sideMenu__heading--anchor' href="#Our-events">EVENTS</a>
                <ul>
                    <li className='sideMenu__heading--list-item'><a href="#IT Support" className='sideMenu__heading--list-item--anchor'><BiChevronsRight className='sideMenu__heading--list-item--icon'/>   BUSSINESS AUTOMATION SEMINAR</a></li>
                </ul>
            </li>

            <li className='sideMenu__heading'>
                <a className='sideMenu__heading--anchor' href="#our-company">OUR COMPANY</a>
                <ul>
                    <li className='sideMenu__heading--list-item'><a href="#IT Support" className='sideMenu__heading--list-item--anchor'><BiChevronsRight className='sideMenu__heading--list-item--icon'/>   OUR CULTURE</a></li>
                    <li className='sideMenu__heading--list-item'><a href="#IT Support" className='sideMenu__heading--list-item--anchor'><BiChevronsRight className='sideMenu__heading--list-item--icon'/>   OUR TEAM</a></li>
                    <li className='sideMenu__heading--list-item'><a href="#IT Support" className='sideMenu__heading--list-item--anchor'><BiChevronsRight className='sideMenu__heading--list-item--icon'/>   OUR CAREERS</a></li>
                    <li className='sideMenu__heading--list-item'><a href="#IT Support" className='sideMenu__heading--list-item--anchor'><BiChevronsRight className='sideMenu__heading--list-item--icon'/>   OUR BENIFITS</a></li>
                    <li className='sideMenu__heading--list-item'><a href="#IT Support" className='sideMenu__heading--list-item--anchor'><BiChevronsRight className='sideMenu__heading--list-item--icon'/>   IT SUPPORT GREAT YARMOUTH</a></li>
                </ul>
            </li>

            <li className='sideMenu__heading'>
                <a className='sideMenu__heading--anchor' href="#Our-work">OUR WORK</a>
                <ul>
                    <li className='sideMenu__heading--list-item'><a href="#IT Support" className='sideMenu__heading--list-item--anchor'><BiChevronsRight className='sideMenu__heading--list-item--icon'/>   CASE STUDIES</a></li>
                </ul>
            </li>

            <li className='sideMenu__heading'><a className='sideMenu__heading--anchor' href="#Covid">COVID RISK ASSESSMENTS</a></li>

            <li className='sideMenu__heading'>
                <a className='sideMenu__heading--anchor' href="#Contact">CONTACT US</a>
                <ul>
                    <li className='sideMenu__heading--list-item'><a href="#IT Support" className='sideMenu__heading--list-item--anchor'><BiChevronsRight className='sideMenu__heading--list-item--icon'/>   CAMBRIDGE OFFICE</a></li>
                    <li className='sideMenu__heading--list-item'><a href="#IT Support" className='sideMenu__heading--list-item--anchor'><BiChevronsRight className='sideMenu__heading--list-item--icon'/>   WYMONDHAM OFFICE</a></li>
                    <li className='sideMenu__heading--list-item'><a href="#IT Support" className='sideMenu__heading--list-item--anchor'><BiChevronsRight className='sideMenu__heading--list-item--icon'/>   GREAT YARMOUTH OFFICE</a></li>
                </ul>
            </li>
        </ul>
    </div>
  )
}

export default SideMenu