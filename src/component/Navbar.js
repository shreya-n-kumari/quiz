import React from 'react'
import { Link } from 'react-router-dom'
import { Hamburger } from './Hamburger'

function Navbar() {
  return (
    <div>
      <nav className='bg-orange-300 flex justify-between font-sans font-medium text-lg'>
        <Link to='/'>
        <h2 className='py-4 px-8'>OnlineQuiz</h2>
        </Link>
        <ul className='hidden md:flex justify-end space-x-11 px-28 py-4'>
            <li>Live Quiz</li>
            <li>Default</li>
            <li>Login</li>
            <li>Register</li>
        </ul>

        <Hamburger />
      </nav>
    </div>
  )
}

export default Navbar
