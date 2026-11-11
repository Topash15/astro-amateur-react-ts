import { useState, useEffect } from 'react';
import './style.css'
import classnames from 'classnames';

// Image imports
import Instagram from '../../assets/Instagram_Glyph_White256.png';
import Bluesky from '../../assets/Bluesky_icon.png';
import Threads from '../../assets/threads-logo-white-01.png';
import Flickr from '../../assets/flickr.png';

function Footer() {

    return (
        <footer>
            <div className="footer-inner">
                <a id="footer-logo" href="/">
                    <img src="/android-chrome-192x192.png" alt="Astro Amateur Logo" width="125"/>
                </a>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/Photos">Photos</a></li>
                </ul>
                <div id="contact">
                    <h3>Contact</h3>
                    <a href="mailto:atopash@astroamateur.space">atopash@astroamateur.space</a>
                    <ul className='socials'>
                        <li><a href="https://www.flickr.com/photos/astroamateur/" target="_blank"><img src={Flickr} alt="Flickr" width="100%" /></a></li>
                        <li><a href="https://www.instagram.com/TheAstroAmateur" target="_blank"><img src={Instagram} alt="Instagram" width="50" /></a></li>
                        <li><a href="https://bsky.app/profile/astroamateur.bsky.social" target="_blank"><img src={Bluesky} alt="BlueSky" width="100%" /></a></li>
                        {/* <li><a href="https://www.threads.net/TheAstroAmateur" target="_blank"><img src={Threads} alt="Threads" width="50" /></a></li> */}
                    </ul>
                </div>
            </div>
        </footer>
    )
}
export default Footer;