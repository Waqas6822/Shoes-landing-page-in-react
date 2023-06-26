import React from 'react'
import './main.css'

export const Mid = () => {
  return (
    <div>
        <section className='sec'>
            <div className="text">
            <h1>YOUR FEET<br/>DESERVE<br/>THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE'ER HERE TO <br />HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br /> THE BEST AND WE'ER HERE TO HELP YOU WITH OUR <br /> SHOES.</p>
            <button className='shop'>Shop Now</button>
            <button className='cat'>Category</button>
            <p style={{paddingTop:10}}>Also available on</p>
            <div className="icon">
                <img src="/images/fb.png" alt="" />
                <img src="/images/amazon.png" alt="" />
            </div>
            </div>
            <div className="img"><img src="/images/shoes.png" alt="" /></div>
            
        </section>
    </div>
  )
}


