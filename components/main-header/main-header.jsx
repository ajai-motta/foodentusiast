import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import LogoPng from '@/public/images/logo.png';
import classes from './main-header.module.css';
import MainHeaderBackground from './main-header-background';
import NavLinks from '../nav-links/NavLinks';

const MainHeader = () => {
  return (
    <>
    <MainHeaderBackground/>
    
 <header className={classes.header}>
    <Link href="/" className={classes.logo}>
    <Image src={LogoPng} alt="the estate developer" priority />
    Next Level Food
    </Link>
    <nav className={classes.nav}>
        <ul >
            
            <li>
              <NavLinks href="/meals">Browse food</NavLinks>
               
            </li>
             <li>
               <NavLinks href="/community">Foodie Community</NavLinks>
            </li>
        </ul>
    </nav>
 </header>
    </>
  )
}

export default MainHeader