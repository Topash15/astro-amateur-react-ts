import "./style.css"
import { SERVER } from '../../environment'

function Home() {

  return (
    <>
      <div className="home-container">
        <h1>Rockets. The Moon.<br/>Stars and Beyond.</h1>
        <p>I photograph them all.
        </p>
        <a href="/photos">Check them out.</a>
      </div>
      <div id="home-filters">
        <a href="/photos/Moon">Moon<img src="./assets/home/moon.webp" alt="Moon photos" width="200" /></a>
        <a href="/photos/Rocket">Rockets<img src="./assets/home/rocket.webp" alt="Rocket photos" width="200" /></a>
        <a href="/photos/Deep Space">Deep Space<img src="./assets/home/deep-space.webp" alt="Deep Space photos" width="200" /></a>
        <a href="/photos/Planet">Planets<img src="./assets/home/planets.webp" alt="Planet photos" width="200" /></a>
      </div>

    </>
  )
}

export default Home;