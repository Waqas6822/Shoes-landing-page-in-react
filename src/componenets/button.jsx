import React from 'react'
import {MdMessage,MdPhone} from 'react-icons/md'
import './button.css'
const Button = () => {
  return (
    <div>
        <section className='button'>
        <button className='btn'><MdMessage /> VIA SUPPORT CHAT</button>
        <button className='btn'><MdPhone /> VIA PHONE CALL.....</button>
        </section>
        <button className='btn-Email'><MdMessage />VIA EMAIL FORM</button>
        
    </div>
  )
}

export default Button