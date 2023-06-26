import React from 'react'
import './contact.css'
import Button from './button'

export const Contact = () => {
  return (
    <div>
        <section className="contact">
            <h2>CONTACT US</h2><br />
            <p>LETS CONNECT: WERE HERE TO HELP, AND WED LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA.</p>
            <section className="contact_form">
            <div className="form">
            <Button /> 
            <form>
            <input type="text" placeholder='Name' /><br />
            <input type="text" placeholder='Email' /><br />
            <textarea name="Text" placeholder='Text' cols="26" rows="5"></textarea>
            </form>
            </div>
            <div className="contact-img">
                <img src="/images/contact.svg" alt="" />
            </div>
            </section>
        </section>
    </div>
  )
}
