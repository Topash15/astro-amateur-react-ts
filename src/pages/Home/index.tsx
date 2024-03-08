import "./style.css"
import { SERVER } from '../../environment'

// Photo Imports
import Moon from '../../assets/home/moon.webp';
import Rocket from '../../assets/home/rocket.webp';
import DeepSpace from '../../assets/home/deep-space.webp';
import Planet from '../../assets/home/planets.webp'
import MainBackground from '../../assets/home/falcon-heavy-arrow.webp'

function Home() {

  return (
    <>
      <div className="home-container" >
        <h1>Rockets. The Moon.<br />Stars and Beyond.</h1>
        <p>I photograph them all.
        </p>
        <a href="/photos">Check them out.</a>
      </div>
      <div id="home-filters">
        <a href="/photos/Moon"><span>Moon</span><img src={Moon} alt="Moon photos" width="200" /></a>
        <a href="/photos/Rocket"><span>Rockets</span><img src={Rocket} alt="Rocket photos" width="200" /></a>
        <a href="/photos/Deep Space"><span>Deep Space</span><img src={DeepSpace} alt="Deep Space photos" width="200" /></a>
        <a href="/photos/Planet"><span>Planets</span><img src={Planet} alt="Planet photos" width="200" /></a>
      </div>

    </>
  )
}

export default Home;