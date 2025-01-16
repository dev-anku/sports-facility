"use client";
import { useState, useEffect } from "react";

const BackgroundImageSlider = ({ images, overlay }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="absolute -z-10 flex h-full transition-transform duration-500 ease-in-out"
      style={{
        transform: `translateX(-${(index / images.length) * 100}%)`,
        width: `${images.length * 100}%`,
      }}
    >
      {images.map((imageURL) => (
        <div
          key={imageURL}
          className="h-full w-screen flex-1"
          style={{
            background: overlay
              ? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${imageURL})`
              : `url(${imageURL})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundImageSlider;
