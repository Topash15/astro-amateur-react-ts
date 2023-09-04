import { Image } from "image-js";
import { SetStateAction, useState } from "react";
import handleImages from '../../utils/imageEditor';
import axios from 'axios';

function PhotoEditor() {
  const [file, setFile] = useState("");
  const [SDImage, setSDImage] = useState("");
  const [Thumbnail, setThumbnail] = useState("");
  const [Placeholder, setPlaceholder] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: any) => {
    setFile(e.target.value);
    console.log(file);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if(!file){
      alert("No file found. Please choose a file before submitting.");
      return;
    }

    const fd = new FormData();
    fd.append('file', file);

    axios.post('', fd, {
      onUploadProgress: (progressEvent) => {
        console.log(progressEvent.progress || 'loading')
      },
      headers: {
        'Custom-Header' : "value"
      }
    })


    // setFile('src/assets/falcon-9-jellyfish.png')
    // const files = await handleImages(file);
    // setSDImage(files.standard);
    // setThumbnail(files.thumbnail);
    // setPlaceholder(files.placeholder);

    e.preventDefault();
    setIsSubmitted(true);
    alert("Submitted");
    return 
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Image
          <input
            type="file"
            name="image"
            value={file}
            onChange={handleChange}
          />
        </label>
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
