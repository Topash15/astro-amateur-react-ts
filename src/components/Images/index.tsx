import React from "react";
import { useQuery } from "react-query";
import Photo from "../../types/Photo";
import "./style.css";

function Images() {
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
        {status === "success" ? (
          data.results.map((photo: any) => (
            <a className="photo" key={photo.id} href={photo.hdSource} target="_blank">
              <img
                key={photo.id}
                src={photo.source}
                alt={photo.title}
                loading="lazy"
              />
              <div className="info">
                <h3>{photo.title}</h3>
                <p>{photo.description}</p>
              </div>
            </a>
          ))
        ) : null }
      </div>
    </>
  );
}

export default Images;
