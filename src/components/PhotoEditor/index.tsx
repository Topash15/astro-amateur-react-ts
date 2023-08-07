import { Image } from "image-js";
import { SetStateAction, useState } from "react";
import handleImages from '../../utils/imageEditor';

function PhotoEditor() {
  const [fileName, setFileName] = useState("");
  const [SDImage, setSDImage] = useState("");
  const [Thumbnail, setThumbnail] = useState("");
  const [Placeholder, setPlaceholder] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: any) => {
    setFileName(e.target.value);
    console.log(fileName);
  };

  const handleSubmit = async (e: any) => {
    // alert("Submitted");

    setFileName('src/assets/falcon-9-jellyfish.png')
    const files = await handleImages(fileName);
    setSDImage(files.standard);
    setThumbnail(files.thumbnail);
    setPlaceholder(files.placeholder);

    e.preventDefault();
    setIsSubmitted(true);
    return 
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* <label>
          Image
          <input
            type="file"
            name="image"
            value={fileName}
            onChange={handleChange}
          />
        </label> */}
        <input type="submit" value="Submit" />
      </form>
      <img src="src/assets/falcon-9-jellyfish.png" alt="test-image" width="150" />
      {isSubmitted ? (
        <>
          <div>
            <h3>Standard Definition</h3>
            <img src={SDImage} width="150" />
            <a download href={SDImage}>
                Download
            </a>
          </div>
          <div>
            <h3>Thumbnail</h3>
            <img src={Thumbnail} width="150" />
            <a download href={Thumbnail}>
                Download
            </a>
          </div>
          <div>
            <h3>Placeholder</h3>
            <img src={Placeholder} width="150" />
            <a download href={Placeholder}>
                Download
            </a>
          </div>
        </>
      ) : null}
    </>
  );
}

export default PhotoEditor;
