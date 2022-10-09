import React from 'react'
import {FaAsterisk} from 'react-icons/fa'
import Button from '../Button/Button'

function ContactUs() {
  return (
    <div className="contactUs__container">
        <form method='POST' action="#netmatters" className="containerUs__container--form">
            <h2 className="contactUs__container--form--title">
            Email Newsletter Sign-Up
            </h2>
            <div className="contactUs__container--form--input-field">
                <label htmlFor="name" className="contactUs__container--form--input-field--label">Your Name <FaAsterisk className='contactUs__container--form--input-field--label--icon'/></label>
                <input type="text" name="name" id="name" className="contactUs__container--form--input-field--input" required/>
            </div>
            <div className="contactUs__container--form--input-field">
                <label htmlFor="email" className="contactUs__container--form--input-field--label">Your Email <FaAsterisk className='contactUs__container--form--input-field--label--icon'/></label>
                <input type="email" name="email" id="email" className="contactUs__container--form--input-field--input" required/>
            </div>
            <div className="contactUs__container--form--checkbox">
                <input type="checkbox" name="checkbox" id="checkbox" className="contactUs__container--form--checkbox--input"/>
                <label htmlFor="checkbox" className="contactUs__container--form--checkbox--label">I agree to the terms and conditions</label>
            </div>
            <Button text='Sign Up' type='submit' className='contactUs__container--form--button'>Subscribe</Button>
        </form>
    </div>
  )
}

export default ContactUs