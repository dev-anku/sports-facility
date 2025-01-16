import Image from "next/image";

const GallerySlider = ({ images, index }) => {
  return (
    <div className="overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {images.map((imageURL, index) => {
          return (
            <Image
              key={index}
              width={1280}
              height={960}
              src={imageURL}
              alt={imageURL}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GallerySlider;
