import "./style.css"
import { SERVER } from '../../environment'

function Home() {

  // current server goes idle if not used
  // this api call wakes up the server and will improve the load times
  // for following server calls
  const wakeServer = async () => {
    return await (
      await fetch(
        `${SERVER}/api/portfolio/get/photo/1`, {
        method: 'GET',
        mode: 'no-cors'
      }
      )
    ).json();
  };

  return (
    <>
      <div className="home-container">
        <h2>Astro Amateur</h2>
        <p>I photograph rockets and space.
        </p>
        <a href="/#/photos">Check them out.</a>
      </div>
      <div id="home-filters">
        <a href="/#/photos/Moon">Moon<img src="./assets/home/moon.webp" alt="Moon photos" width="200" /></a>
        <a href="#/photos/Rocket">Rockets<img src="./assets/home/rocket.webp" alt="Rocket photos" width="200" /></a>
        <a href="#/photos/Deep Space">Deep Space<img src="./assets/home/deep-space.webp" alt="Deep Space photos" width="200" /></a>
        <a href="#/photos/Planet">Planets<img src="./assets/home/planets.webp" alt="Planet photos" width="200" /></a>
      </div>

    </>
  )
}

export default Home;