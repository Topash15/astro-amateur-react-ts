import { useState, useEffect } from 'react';
import './style.css'
import classnames from 'classnames';

function Footer() {

    return (
        <footer>
            <div className="footer-inner">
                <a id="footer-logo" href="/">
                    <img src="/android-chrome-192x192.png" alt="Astro Amateur Logo" width="125"/>
                </a>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/#/Photos">Photos</a></li>
                </ul>
                <div id="contact">
                    <h3>Contact</h3>
                    <a href="mailto:atopash@astroamateur.space">atopash@astroamateur.space</a>
                    <ul className='socials'>
                        <li><a href="https://www.instagram.com/TheAstroAmateur" target="_blank"><img src="/assets/Instagram_Glyph_White256.png" alt="Instagram" width="50" /></a></li>
                        <li><a href="https://www.threads.net/TheAstroAmateur" target="_blank"><img src="/assets/threads-logo-white-01.png" alt="Threads" width="50" /></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
export default Footer;