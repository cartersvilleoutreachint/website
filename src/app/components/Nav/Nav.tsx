"use client"

import "./nav.css"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect, useRef } from "react"


export default function Nav() {

  const hamburgerMenuRef:any = useRef();
  const mainNavRef:any = useRef();

  const pathName = usePathname();

  const [isOnMobile, setIsOnMobile] = useState(false);

  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(pathName);

  function closeMobileMenu(){
    setMobileMenuIsOpen(false)
  }

  function toggleMobileMenu(){
    setMobileMenuIsOpen((old)=>!old)
  }

  useEffect(()=>{
    const isMobile = window.matchMedia("(max-width: 649px)").matches;
    setIsOnMobile(isMobile)
    setMobileMenuIsOpen(!isMobile)

    if(isMobile){

      const navStyles = window.getComputedStyle(mainNavRef.current);
      const mainNavHeight = parseFloat(navStyles.height) + parseFloat(navStyles.paddingTop) + parseFloat(navStyles.paddingBottom);

      document.querySelector("body")!.style.paddingTop = `${mainNavHeight}px`;

      window.addEventListener("click",(evt)=>{
        //@ts-ignore
        if(!(hamburgerMenuRef.current.id == evt.target!.id)){
          closeMobileMenu();
        }
      })
    }
    
  }, [])

  useEffect(()=>{
    setCurrentPage(pathName)
  }, [pathName])

  

  return (
    <nav id="mainNav" ref={mainNavRef}>
      <button ref={hamburgerMenuRef} id="mainNavHamburgerMenu" onClick={toggleMobileMenu}></button>
        <Link href="/"><div id="mainNavLogo">Cartersville Outreach International</div></Link>
        <div className="seperator"></div>
      <div id="mainNavContent">
        <ul
        id="mainNavLinks"
        onClick={(isOnMobile) ? closeMobileMenu : undefined}
        style={{
          clipPath: (!mobileMenuIsOpen) ? "polygon(0 0, 100% 0, 100% 0, 0 0)" : "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
        }}>
          <Link
          className={(currentPage == "/") ? "active" : ""}
          href={"/"}
          ><li>Home</li></Link>
          <Link
          className={(currentPage == "/events") ? "active" : ""}
          href={"/events"}
          ><li>Events</li></Link>
          <Link
          className={(currentPage == "/contact") ? "active" : ""}
          href={"/contact"}
          ><li>Contact</li></Link>
          <Link
          className={(currentPage == "/blog") ? "active" : ""}
          href={"/blog"}
          ><li>Blog</li></Link>
          <Link
          className={(currentPage == "/donate") ? "active" : ""}
          href={"/donate"}
          ><li>Donate</li></Link>
          <Link
          className={(currentPage == "/ourteam") ? "active" : ""}
          href={"/ourteam"}
          ><li>Our Team</li></Link>
        </ul>
      </div>
      <a href="https://www.facebook.com/profile.php?id=100064747237262" target="_blank" id="mainNavFacebookIcon">
        <Image src="./img/facebook-icon.svg" alt="Facebook Icon" width={100} height={100} />
      </a>
    </nav>
  )
}
