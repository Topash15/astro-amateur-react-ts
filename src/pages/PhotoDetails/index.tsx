import "./style.css";
import { useQuery } from "react-query";
import { Params, useParams } from "react-router-dom";
import Photo from "../../types/Photo";

function PhotoDetails() {
  const { id } = useParams();

  const getPhotoById = async () => {
    return await (
      await fetch(
        `https://astro-amateur-server.onrender.com/api/portfolio/get/photo/${id}`
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
        {status === "loading" && <div>Loading...</div>}
        {status === "success" ? (
          <>
            <div className="photo-container">
              <a href={photo?.hdSource} target="_blank">
                <img src={photo?.source} alt={photo?.title} />
              </a>
              <p id="date">Date Taken: {photo?.date}</p>
            </div>
            <div className="info-container">
              <div>
                <h2 id="photo-title">
                  {photo?.title}
                </h2>
                <p id="photo-description-short">
                {photo?.description}
                </p>
                <p id="photo-description-long">
                  {photo?.detailedDescription}
                </p>
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
