import React, {useState} from "react";
import { useQuery } from "react-query";
import Photo from "../../types/Photo";
import { getPlaceholder, blurryStyle } from "../../utils/blurredImagesHandler";
import "./style.css";
import '../../utils/blurredImagesStyle.css';

function Images() {

  // blurry loading image handler
  const [isLoaded, setIsLoaded] = useState(false);
  const handleImageLoad = ():void => {
    setIsLoaded(true);
  }

  const fetchAllPhotos = async () => {
    return await (
      await fetch(
        "https://astro-amateur-server.onrender.com/api/portfolio/get/photos"
      )
    ).json();
  };
  type Photos = {
    results: Photo[];
  };
  const { data, error, status } = useQuery<Photos, Error>(
    "photos",
    fetchAllPhotos
  );
  return (
    <>
      <div className="photos-container">
        {status === "error" && <div>{error!.message}</div>}
        {status === "loading" && <div>Loading...</div>}
        {status === "success"
          ? data.results.map((photo: any) => (
              <a
                className="photo"
                key={photo.id}
                href={`/#/photos/${photo.id}`}
              >
                <div className={`blurred-img ${isLoaded ? 'loaded' : ''}`} style={blurryStyle(photo.thumbnail, 'thumbnail')}>
                <img
                  key={photo.id}
                  src={photo.thumbnail}
                  alt={photo.title}
                  loading="lazy"
                  onLoad={handleImageLoad}
                />
                </div>
                <div className="info">
                  <h3>{photo.title}</h3>
                  <p>{photo.description}</p>
                </div>
              </a>
            ))
          : null}
      </div>
    </>
  );
}

export default Images;
