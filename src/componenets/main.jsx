import React from 'react'
import './main.css'
const Main = () => {
  return (
    <div>
        <nav>
            <div className="logo">
                <img width={76} height={42.75} src="/images/logo.png" alt="logo" />
            </div>
            <ul>
                <li>Menu</li>
                <li>Location</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <button>Login</button>
        </nav>
    </div>
  )
}

export default Main