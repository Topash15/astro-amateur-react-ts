import { useState, useEffect } from 'react';
import './style.css'
import classnames from 'classnames';

function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })
    
    const setDimension = () => {
        setScreenSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }
    useEffect(() => {
        window.addEventListener('resize', setDimension);
        
        return(() => {
            window.removeEventListener('resize', setDimension);
        })
      }, [screenSize])

    const toggleMenu = ():void => {
        setIsOpen(!isOpen);
    }

    const isMobile = ():boolean =>{
        return screenSize.width <= 768;
    }

    return(
        <header className="header">
            <h1 className='title'><a href="/">Astro Amateur</a></h1>
            <nav>
                <ul className = {classnames(isMobile() ? 'nav-mobile' : '', isOpen ? 'open' : 'closed')}>
                    <li><a onClick={()=>{toggleMenu()}} href="/">Home</a></li>
                    <li><a onClick={()=>{toggleMenu()}} href="/#/photos">Photos</a></li>
                    <li><a onClick={()=>{toggleMenu()}} href="/#/about" >About</a></li>
                    <li><a onClick={()=>{toggleMenu()}} href="/#/blog" >Blog</a></li>
                </ul>
                {isMobile() ?
                <button onClick={()=>{toggleMenu()}}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button> : null}
            </nav>
        </header>
    )
}
export default Navbar;