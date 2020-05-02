import React from 'react'
import Layout from '../layout'
import {FaLinkedinIn, FaFacebook, FaInstagram, FaTwitter, FaCopyright, FaCode, FaReact, FaGofore, FaDraftingCompass} from 'react-icons/fa'


export default function Footer({props}) {
    // props is carrier check Layout.js
    return (
        <section className="footer footer-bg">
        <footer className="footer">
        <a href="https://www.linkedin.com/in/sayed-sajid-ali/"><FaLinkedinIn className="footer-icon social-media"/></a>
        <a href="https://www.facebook.com/profile.php?id=100004563371794"><FaFacebook className="footer-icon social-media"/></a>
        <a href="https://www.instagram.com/syed_sajidali_/"><FaInstagram className="footer-icon social-media" /></a>
        <a href="https://twitter.com/Sayed_Sajid_Ali"><FaTwitter className="footer-icon social-media"/></a>

        <p className="fontSize"> <FaCopyright/> Copyright 2020 DigiLearn<br/><br/>
        <FaCode/> Webpage Designed by: Sayed Sajid Ali <br/><br/>
         <FaDraftingCompass/> Made with: React <FaReact/> and <FaGofore/> Gatsby
         </p>
        </footer>
        </section>

    )
}
