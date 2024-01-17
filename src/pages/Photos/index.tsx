import Images from "../../components/Images";
import './styles.css'
import { useParams } from "react-router-dom";

function Photos() {
  const {category} = useParams();

  return (
    <>
      <h2>Photos</h2>
      <div id="filters">
        {category ? <a href="/#/photos">Clear Filter</a> : null}
        <a className={category === "Moon" ? 'current': ''} href="#/photos/Moon">Moon</a>
        <a className={category === "Rocket" ? 'current': ''} href="#/photos/Rocket">Rockets</a>
        <a className={category === "Deep Space" ? 'current': ''} href="#/photos/Deep Space">Deep Space</a>
        <a className={category === "Planet" ? 'current': ''} href="#/photos/Planet">Planets</a>
      </div>
      <Images />
    </>
  );
}

export default Photos;
