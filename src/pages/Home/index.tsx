import "./style.css"
import { SERVER } from '../../environment'

function Home(){

    // current server goes idle if not used
    // this api call wakes up the server and will improve the load times
    // for following server calls
    const wakeServer = async () => {
        return await (
          await fetch(
            `${SERVER}/api/portfolio/get/photo/1`
          )
        ).json();
      };

    return(
        <>
            <div className="home-container">
                <h2>Astro Amateur</h2>
                <p>I photograph rockets and space.
                </p>
                <a href="/#/photos">Check them out.</a>
                <div id="home-filters">
                  <div><a href="/#/photos/Moon">Moon</a><img src="./assets/home/moon.jpg" alt="Moon photos" width="200"/></div>
                  <div><a  href="#/photos/Rocket">Rockets</a><img src="./assets/home/rocket.jpg" alt="Rocket photos" width="200"/></div>
                  <div><a href="#/photos/Deep Space">Deep Space</a><img src="./assets/home/deep-space.jpg" alt="Deep Space photos" width="200"/></div>
                  <div><a href="#/photos/Planet">Planets</a><img src="./assets/home/planets.png" alt="Planet photos" width="200"/></div>
                </div>
                
            </div>
            
        </>
    )
}

export default Home;