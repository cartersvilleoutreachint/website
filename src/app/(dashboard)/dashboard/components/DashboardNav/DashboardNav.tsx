"use client"
import { useEffect, useState, useRef } from "react"
import styles from "./dashboardnav.module.css"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server"

export default function DashboardNav() {
const pathname = usePathname();
const [isOnMobile, setIsOnMobile] = useState(false);
const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);

function openMobileNav(){
  setMobileNavIsOpen(true);
}
function closeMobileNav(){
  setMobileNavIsOpen(false);
}
function toggleMobileNav(){
  setMobileNavIsOpen((old)=>!old);
}

useEffect(()=>{

  const isMobile = window.matchMedia("(max-width: 990px)").matches;
  setIsOnMobile(isMobile)
  if(isMobile){
    window.addEventListener("click", ()=>{

    })
  }
}, [])

  return (
    <>
      <nav
      className={`${styles.dashboardNav} ${(mobileNavIsOpen && isOnMobile) ? styles.open : ""}`}
      >
        <h3 className={styles.navLogo}>Cartersville Outreach International</h3>

        <h4 className={styles.menuTitle}>Menu</h4>
        <menu className={styles.navMenu}>
        <li className={(pathname == "/dashboard")? `${styles.active}` : ""}>
              <Link onClick={(isOnMobile) ? closeMobileNav : undefined} className={styles.navLink} href="/dashboard">Home</Link>
            </li>
          <li className={(pathname == "/dashboard/blog")?`${styles.active}` : ""}>
              <Link onClick={(isOnMobile) ? closeMobileNav : undefined} className={styles.navLink} href="/dashboard/blog">Blog</Link>
            </li>
            <li className={(pathname == "/dashboard/events")? `${styles.active}` : ""}>
              <Link onClick={(isOnMobile) ? closeMobileNav : undefined} className={styles.navLink} href="/dashboard/events">Events</Link>
            </li>
            <li className={(pathname == "/dashboard/media")? `${styles.active}` : ""}>
              <Link onClick={(isOnMobile) ? closeMobileNav : undefined} className={styles.navLink} href="/dashboard/media">Media</Link>
            </li>
            <li className={(pathname == "/dashboard/team")? `${styles.active}` : ""}>
              <Link onClick={(isOnMobile) ? closeMobileNav : undefined} className={styles.navLink} href="/dashboard/team">Team</Link>
            </li>
        </menu>

      <a href="/api/auth/logout" className={styles.logoutLink}>Logout</a>

        <button
        className={styles.navClose}
        onClick={(isOnMobile) ? toggleMobileNav : undefined}
        ><span>&gt;</span></button>
        
      </nav>
      <div
      className={styles.navCloseFull}
      style={{display: (mobileNavIsOpen)? "inline-block" : "none"}}
      onClick={closeMobileNav}
      ></div>
    </>
  )
}
