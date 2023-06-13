import React from "react";
import Container from "./container";

export default function Cta() {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-gray-900 bg-ned-green px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Are you ready for the fastest DeFi Wallet?
          </h2>
          <p className="mt-2 font-medium text-gray-900 text-opacity-90 lg:text-xl">
            Available for iOS and Android.
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="#"
            target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-ned-green bg-gray-900 rounded-md px-7 lg:px-10 lg:py-5 ">
            Download for Free
          </a>
        </div>
      </div>
    </Container>
  );
}
