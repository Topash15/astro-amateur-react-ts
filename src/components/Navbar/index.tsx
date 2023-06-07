import './style.css'

function Navbar(){
    return(
        <header className="header">
            <h1 className='title'><a href="/">Astro Amateur</a></h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/photos">Photos</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/blog">Blog</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar;