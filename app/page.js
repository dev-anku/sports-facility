"use client";
import "aos/dist/aos.css";
import AOS from "aos";

import BackgroundImageSlider from "@/components/BackgroundImageSlider";
import React, { useEffect, useState } from "react";
import {
  sampleImages,
  servicesContent,
  productsContent,
  sportsContent,
  galleryImages,
} from "@/public/constants";
import Button from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import GallerySlider from "@/components/GallerySlider";

const HeroSection = () => {
  return (
    <header className="relative h-screen overflow-hidden">
      <BackgroundImageSlider images={sampleImages} overlay />
      <div
        data-aos="fade-up"
        className="flex h-full w-full flex-col items-center justify-center"
      >
        <div className="flex h-full flex-col items-center justify-center p-8 text-center text-white sm:px-20 xl:px-32">
          <h1 className="font-newsreader text-[2.5rem] font-semibold uppercase leading-normal text-white xl:text-[3.25rem]">
            Elevate Your Game
          </h1>
          <p className="my-4 font-[Raleway] font-medium leading-relaxed text-gray-300 xl:text-[1.3rem]">
            Premium sports surfaces for every court. From EPDM flooring to
            synthetic and wooden courts, we deliver top-notch solutions.
          </p>
          <p>
            <a href="tel:+917018349322">
              <Button label={"Enquire Now"} light />
            </a>
          </p>
        </div>
      </div>
    </header>
  );
};

const WelcomeSection = () => {
  return (
    <section id="about" className="flex flex-col xl:mt-20 xl:flex-row">
      <div
        data-aos="fade-right"
        className="flex flex-col justify-between gap-6 px-8 py-16 sm:px-20 xl:w-2/5"
      >
        <h1 className="font-newsreader text-5xl font-semibold">About Us</h1>
        <p className="font-raleway leading-normal">
          <strong>Sports Facility</strong> Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Saepe exercitationem repellendus vero
          perspiciatis consequatur non vitae totam. Facere dolor, ullam itaque
          tenetur illo reiciendis nostrum error nemo voluptatibus veniam
          asperiores!
        </p>
        <p className="font-raleway leading-normal">
          <strong>Ridham Enterprises</strong> Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Saepe exercitationem repellendus vero
          perspiciatis consequatur non vitae totam. Facere dolor, ullam itaque
          tenetur illo reiciendis nostrum error nemo voluptatibus veniam
          asperiores!
        </p>
        <Link target="_blank" href="/about">
          <Button label={"Know More"} />
        </Link>
      </div>
      <div
        data-aos="fade-left"
        className="relative h-96 overflow-hidden xl:h-auto xl:w-3/5"
      >
        <BackgroundImageSlider images={sampleImages} />
      </div>
    </section>
  );
};

const ProductsSection = () => {
  return (
    <section id="products" className="my-16 flex flex-col items-center">
      <h1 className="font-newsreader text-5xl font-semibold">Our Products</h1>
      <div className="relative my-4 flex items-center justify-center">
        <div className="absolute left-1/2 h-full w-1 rounded-sm bg-button"></div>
        <div className="my-8 flex flex-col items-center justify-center gap-8 xl:w-3/4">
          {productsContent.map((product, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="z-10 mx-8 flex flex-col sm:flex-row sm:odd:flex-row-reverse xl:-z-10 xl:gap-8"
            >
              <div className="xl:flex-1">
                <Image
                  src={sampleImages[index]}
                  alt=""
                  width={1920}
                  height={1080}
                  className="w-full sm:h-full"
                />
              </div>
              <div className="flex flex-col items-center justify-center bg-background-dark px-4 py-8 text-center xl:flex-1">
                <h3 className="font-newsreader text-3xl font-semibold">
                  {product.title}
                </h3>
                <p className="my-2 font-raleway font-light">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link target="_blank" href="/product">
        <Button label={"See More"} />
      </Link>
    </section>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="flex flex-col xl:mt-20 xl:flex-row">
      <div
        data-aos="fade-right"
        className="relative flex h-[650px] overflow-hidden xl:h-auto xl:w-[55%]"
      >
        <BackgroundImageSlider images={sampleImages} overlay={true} />
        <div className="flex flex-col gap-8 px-8 pt-16 text-white sm:px-20 sm:py-20 xl:items-start">
          <h1 className="font-newsreader text-5xl font-semibold">Services</h1>
          <p className="font-raleway leading-relaxed xl:w-[85%]">
            At Ridham Enterprises, we offer a range of premium sports flooring
            solutions tailored to meet your needs. From high-performance
            synthetic courts to durable EPDM and wooden surfaces, our products
            are trusted by schools, stadiums, and sports facilities across the
            region.
          </p>
          <Link target="_blank" href="/services">
            <Button label={"See More"} light={true} />
          </Link>
        </div>
      </div>
      <div
        data-aos="fade-left"
        className="flex flex-col gap-8 px-8 py-16 sm:px-20 sm:py-20 xl:w-[45%]"
      >
        {servicesContent.map((service) => (
          <div key={service.title} className="flex flex-col gap-4">
            <h1 className="flex gap-4 font-newsreader text-4xl font-[500]">
              <span className="border-b-[5px] border-l-[10px] border-t-[5px] border-button border-b-transparent border-t-transparent"></span>
              {service.title}
            </h1>
            <p className="font-raleway font-light leading-normal">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

const SportsSection = () => {
  return (
    <section
      id="sports"
      className="flex flex-col items-center justify-center bg-background-dark xl:my-20"
    >
      <div className="flex flex-col gap-4 px-8 py-8 text-center xl:w-1/2">
        <h1 className="font-newsreader text-5xl font-semibold">
          Our Sporting Surfaces
        </h1>
        <p className="font-raleway leading-relaxed text-gray-300">
          Delivering Expertly Crafted Acrylic, Cushioned, and Synthetic Surfaces
          to Transform Sporting Arenas with Premium Quality Solutions
        </p>
      </div>
      <div className="mx-8 my-8 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
        {sportsContent.map((sport) => (
          <div
            data-aos="fade-up"
            key={sport.title}
            className="flex flex-col gap-3 text-center"
          >
            <div className="w-full aspect-square overflow-hidden">
              <Image src={sport.image} alt="" width={400} height={400}/>
            </div>
            <h2 className="font-raleway text-xl font-[500] uppercase">
              {sport.title}
            </h2>
            <Link
              className="font-raleway text-sm font-semibold text-button"
              target="_blank"
              href={`/${sport.title}`}
            >
              LEARN MORE
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

const Gallery = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const handlePrev = () => {
    setIndex(
      (prevIndex) =>
        (prevIndex - 1 + galleryImages.length) % galleryImages.length,
    );
  };

  return (
    <section
      id="gallery"
      className="flex flex-col xl:mt-20 xl:flex-row-reverse"
    >
      <div
        data-aos="fade-left"
        className="flex flex-col justify-between gap-8 bg-background-dark px-8 py-16 sm:px-20 xl:w-2/5"
      >
        <h1 className="font-newsreader text-5xl font-semibold uppercase">
          Gallery
        </h1>
        <div className="flex flex-col gap-2">
          <p className="font-raleway text-lg leading-relaxed">
            &quot;Explore the highlights of our facilities through our gallery –
            a showcase of premium sports surfaces and unforgettable
            moments.&quot;
          </p>
          <Link target="_blank" href="/projects">
            <Button label={"Explore Our Projects"} />
          </Link>
        </div>
        <div className="flex gap-2">
          <button
            className="bg-button p-2 text-2xl text-black"
            onClick={handlePrev}
          >
            ⟵
          </button>
          <button
            className="bg-button p-2 text-2xl text-black"
            onClick={handleNext}
          >
            ⟶
          </button>
        </div>
      </div>
      <div data-aos="fade-right" className="xl:w-3/5">
        <GallerySlider images={galleryImages} index={index} />
      </div>
    </section>
  );
};

const Page = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    });
  }, []);

  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <ProductsSection />
      <ServicesSection />
      <SportsSection />
      <Gallery />
    </>
  );
};

export default Page;
