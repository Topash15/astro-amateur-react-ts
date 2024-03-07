import "./style.css";
// import '../../utils/blurredImagesStyle.css';
import { useState } from "react";
import { useQuery } from "react-query";
import { Params, useParams } from "react-router-dom";
import Photo from "../../types/Photo";
import Loading from "../../components/Loading";
import { blurryStyle, getPlaceholder } from "../../utils/blurredImagesHandler";
import { SERVER } from '../../environment'

function PhotoDetails() {
  const { id } = useParams();

  // blurry loading image handler
  const [isLoaded, setIsLoaded] = useState(false);
  const handleImageLoad = (): void => {
    setIsLoaded(true);
  };

  const getPhotoById = async () => {
    return await (
      await fetch(
        `${SERVER}/api/portfolio/get/photo/${id}`
      )
    ).json();
  };

  type PhotoResult = {
    result: Photo[];
  };
  const { data, error, status } = useQuery<PhotoResult, Error>(
    "photo",
    getPhotoById
  );
  const photo: Photo | undefined = data?.result[0];

  return (
    <>
      <div className="details-container">
        {status === "error" && <div>{error!.message}</div>}
        {status === "loading" && <Loading status={'loading'}></Loading>}
        {status === "success" ? (
          <>
            <div className="bread-crumbs">
              <a href="/">Home</a>&gt;
              <a href="/Photos">Photos</a> &gt;
              <a href={`/Photos/${id}`}>{photo?.title}</a>
            </div>
            <div className="photo-container">
              <a href={photo?.hdSource} target="_blank">
                <div
                  className={`blurry-img ${isLoaded ? "loaded" : ""}`}
                  // style={blurryStyle(photo?.source, "sd")}
                >
                  <img
                    src={photo?.source}
                    alt={photo?.title}
                    onLoad={handleImageLoad}
                    width="100%"
                  />
                </div>
              </a>
              <a href={photo?.hdSource} target="_blank">[View Full Resolution]</a>
              <p id="date">Date Taken: {photo?.date}</p>
            </div>
            <div className="info-container">
              <div>
                <h1 id="photo-title">{photo?.title}</h1>
                <p id="photo-description-short">{photo?.description}</p>
                <p id="photo-description-long">{photo?.detailedDescription}</p>
              </div>
              <table className="meta-table">
                <caption>Meta Information</caption>
                <tbody>
                  <tr>
                    <th>Camera:</th>
                    <td>{photo?.camera}</td>
                  </tr>
                  <tr>
                    <th>Lens:</th>
                    <td>{photo?.lens}</td>
                  </tr>
                  <tr>
                    <th>Iso:</th>
                    <td>{photo?.iso}</td>
                  </tr>
                  <tr>
                    <th>Aperture:</th>
                    <td>{photo?.aperture}</td>
                  </tr>
                  <tr>
                    <th>Exposure Time:</th>
                    <td>{photo?.exposureTime}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}

export default PhotoDetails;
