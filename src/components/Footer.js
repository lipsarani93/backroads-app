import React from 'react'
import { pageLinks, socialLinks } from '../data'
export default function Footer() {
  return (
    <>
        <footer className="section footer">
        <ul className="footer-links" >
        {
          pageLinks.map((link)=>{
            return(
              <li>
                <a href={link.href} className="footer-link">{link.text}</a>
              </li>
            )
          })
        }
        </ul>
     
        <ul className="footer-icons">
     {
      socialLinks.map((link)=>{
        const{id, href, icon} = link
        return(
        <li>
          <a href={href} target="_blank" className="footer-icon"><i className={icon}></i>
          </a>
        </li>
        )
      })
     }
</ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span>, all rights reserved.
      </p>
    </footer>
    </>
  )
}
