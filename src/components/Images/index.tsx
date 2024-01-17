import React, { useState } from "react";
import { useQuery } from "react-query";
import Photo from "../../types/Photo";
import { getPlaceholder, blurryStyle } from "../../utils/blurredImagesHandler";
import "./style.css";
import "../../utils/blurredImagesStyle.css";
import Loading from '../Loading';
import { SERVER } from '../../environment'
import { useParams } from "react-router-dom";

function Images() {
  // blurry loading image handler
  const [isLoaded, setIsLoaded] = useState(false);
  const handleImageLoad = (): void => {
    setIsLoaded(true);
  };
  const { category } = useParams();

  const fetchAllPhotos = async () => {
    return await (
      await fetch(
        `${SERVER}/api/portfolio/get/photos`
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
  const photoList: Photo[] | [] = data?.results || [{
    id: 0,
    title: "No Photos Found",
    description: "There may be a connection issue. Please refresh or try later",
    detailedDescription: '',
    camera: '',
    lens: '',
    iso: 0,
    aperture: '',
    thumbnail: '',
    hdSource: '',
    source: '',
    link: '',
    date: '',
    theme: '',
    exposureTime: 0,
  }];

  return (
    <>
      <div className="photos-container">
        {status === "error" && <div>{error!.message}</div>}
        {status === "loading" && <Loading status={status} />}
        {status === "success" && !category
          ? photoList.toReversed().map((photo: any) => (
            <a
              className="photo"
              key={photo.id}
              href={`/#/photos/${photo.id}`}
            >
              <div
                className={`blurred-img ${isLoaded ? "loaded" : ""}`}
                style={blurryStyle(photo.thumbnail, "thumbnail")}
              >
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

        {status === "success" && category
          ? photoList.filter((photo) => photo.theme === category).toReversed().map((photo: any) => (
            <a
              className="photo"
              key={photo.id}
              href={`/#/photos/${photo.id}`}
            >
              <div
                className={`blurred-img ${isLoaded ? "loaded" : ""}`}
                style={blurryStyle(photo.thumbnail, "thumbnail")}
              >
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
