import "./footer.css"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer>
        <aside id="footerSocials">
            <a href="https://www.facebook.com/profile.php?id=100064747237262" target="_blank">
                <Image src="/img/facebook-icon.svg" alt="Facebook Icon" width={100} height={100}/>
            </a>
            <a href="https://www.instagram.com/cvilleoutreachint" target="_blank">
                <Image src="/img/instagram-icon.svg" alt="Instagram Icon" width={100} height={100}/>
            </a>
            <a href="https://www.youtube.com/@cartersvilleoutreachminist800" target="_blank">
                <Image src="/img/youtube-icon.svg" alt="YouTube Icon" width={100} height={100}/>
            </a>
        </aside>
        
        <aside className="footer-links-wrapper">
          <h3 className="footer-links-title">Pages</h3>
          <ul className="footer-links">
            <Link href="/">Home</Link>
            <Link href="/events">Events</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/ourteam">Our Team</Link>
            <Link href="/donate">Donate</Link>
          </ul>
        </aside>

        <aside className="footer-links-wrapper">
          <h3 className="footer-links-title">Other Links</h3>
          <ul className="footer-links">
            <a href="https://cartersvilleoutreach.org" target="_blank">Cartersville Outreach</a>
            <a href="https://cartersvilleoutreachwomenscenter.org" target="_blank">Women's Center</a>
          </ul>
        </aside>
    </footer>
  )
}
