'use client'

import classes from './NavLinks.module.css'
import { usePathname } from "next/navigation";
import Link from 'next/link'
const NavLinks = ({href,children}) => {
    const pathname=usePathname()
  return <Link href={href} className={pathname.startsWith(href)? `${classes.active} ${classes.link}`: classes.link}>{children}</Link>
          
      
  
}

export default NavLinks