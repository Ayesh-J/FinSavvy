import React from "react";
import './Contact.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
    return(
        <>
         <section className="Contact">
                <div className="Contact__container">
                    <h1 className="Contact__title">Get in Touch</h1>
                    <p className="Contact__description">
                        Have questions or need assistance? Fill out the form below, and we’ll get back to you as soon as possible.
                    </p>
                    <form className="Contact__form">
                        <div className="Contact__form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Enter your name" required />
                        </div>
                        <div className="Contact__form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Enter your email" required />
                        </div>
                        <div className="Contact__form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" placeholder="Enter your message" required></textarea>
                        </div>
                        <button type="submit" className="Contact__btn">Send Message</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact;