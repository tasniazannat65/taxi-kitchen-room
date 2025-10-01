import React from 'react';
import Logo from './Logo';
import Container from '../../Container/Container';


const Navbar = () => {
    return (
    <Container>
            <div className="content-box flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5">
             
     <Logo></Logo>
    
      <nav>
        <ul className="flex gap-16 ">
          <li className="">
            <a
              href="#"
              className="border-b-3 border-amber-400 py-1   border-primary duration-200 hover:font-bold"
            >
              Orders
            </a>
          </li>
          <li className="">
            <a
              href="#"
              className="border-b-3 border-amber-400 py-1   border-primary duration-200 hover:font-bold"
            >
              Foods
            </a>
          </li>
          <li className="">
            <a
              href="#"
              className="border-b-3 border-amber-400 py-1   border-primary duration-200 hover:font-bold"
            >
              Tables
            </a>
          </li>
          <li className="">
            <a
              href="#"
              className="border-b-3 border-amber-400 py-1   border-primary duration-200 hover:font-bold"
            >
              Logout
            </a>
          </li>
        </ul>
      </nav>
      
    </div>
    </Container>
   
    
    );
};

export default Navbar;