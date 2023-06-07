import "./style.css"

function Home(){
    return(
        <>
            <div className="home-container">
                <h2>Astro Amateur</h2>
                <p>I photograph rockets and space.
                </p>
                <a href="/photos">Check them out.</a>
            </div>
        </>
    )
}

export default Home;