import { Image } from "image-js";

type ImagePayload = {
  standard: string;
  thumbnail: string;
  placeholder: string;
};

const handleImages = async (fileName: string): Promise<ImagePayload> => {
  // New filenames
  const standardFilename = `${fileName.slice(0, -4)}.jpg`;
  const thumbnailFilename = `${fileName.slice(0, -4)}.thumbnail.jpg`;
  const placeholderFilename = `${fileName.slice(0, -4)}-small.jpg`;

  // Standard Def image
  let sdImage = await Image.load(fileName);
  let standard = sdImage.resize({ width: 1000 });
  standard.save(standardFilename);

  // Thumbnail image
  let thumbnailImage = await Image.load(fileName);
  let thumbnail = thumbnailImage
    .resize({ height: 512 })
    // .crop({ height: 512 });
  thumbnail.save(thumbnailFilename);

  // Placeholder image
  let placeholderImage = await Image.load(fileName);
  let placeholder = placeholderImage
    .resize({ height: 512 })
    // .crop({ width: 512 })
    .resize({ width: 20 });
  placeholder.save(placeholderFilename);

  return {
    standard: standardFilename,
    thumbnail: thumbnailFilename,
    placeholder: placeholderFilename,
  };
};

export default handleImages;
