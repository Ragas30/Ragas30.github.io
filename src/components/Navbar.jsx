import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full flex items-center justify-around border-b-2 border-black py-5'>
      <h1 className='text-2xl font-poppins font-bold'>RAGAS30</h1>
      <ul className='flex gap-5'>
        <li>Home</li>
        <li>About Me</li>
        <li>Portfolio</li>
        <li>Contact Me</li>
      </ul>
    </nav>
  )
}

export default Navbar