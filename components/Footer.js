import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/icons/logo.png";
import { contactData, navLinks, sampleImages } from "@/public/constants";
import React from "react";
import Button from "./ui/Button";

const Footer = () => {
  return (
    <footer className="mt-20 flex flex-col">
      <div
        className="flex flex-col items-center justify-center gap-8 py-24 text-center"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${sampleImages[0]})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="px-8 font-newsreader text-3xl font-semibold xl:text-5xl">
          Connect With Us for Premium Sports Solutions
        </h1>
        <Link target="_blank" href="/contact">
          <Button label={"Contact Us"} />
        </Link>
      </div>
      <div className="grid grid-cols-1 items-center gap-12 bg-black px-8 py-16 text-white sm:grid-cols-2 sm:px-20 xl:grid-cols-3 xl:p-32">
        <div className="flex flex-row items-center justify-between gap-8 sm:flex-col sm:items-start">
          <Link className="text-center" href="/">
            <Image src={logo} alt="logo" className="w-32 sm:w-40" />
          </Link>
          <ul className="space-y-2 pr-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link className="font-raleway" href={link.href}>
                  — {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="list-disc space-y-2 pl-6">
            {contactData.map((contact) => (
              <li className="font-raleway leading-normal" key={contact.label}>
                <strong>{contact.label}</strong>: {contact.value}
              </li>
            ))}
          </ul>
        </div>
        <div className="sm:col-span-2 xl:col-span-1 xl:row-span-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1779.303644233732!2d80.9620219385119!3d26.884215396936668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957dff6c665e1%3A0xd8a2a219e075a97f!2sRidham%20Sports!5e0!3m2!1sen!2sin!4v1737020159505!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <p className="font-raleway sm:col-span-2">
          Copyright &copy; Ridham Sports. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
