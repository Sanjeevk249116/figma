import React from 'react'


function Navbar() {
  return (
    <div className='nav_Main'>
     <div className='navbar containerMain'>
       <div className='nav_Part1'>LOGO</div>
       <div className='NavPart_right'>
        <div>
        <ul style={{listStyleType: 'none'}} className='navbarRight_1'>
            <li>About</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Contact</li>
        </ul>
        </div>
        <div className='navbarRight_2'>
            <button>Sign up</button>
        </div>
       </div>
     
     </div>
    </div>
  )
}

export default Navbar