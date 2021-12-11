import Head from 'next/head'
import Header from 'components/Header';
import Image from 'next/image';
import logo from 'public/logo.png';
import React from 'react';
import config from 'config';
import Typeography from 'components/Typeography';
export default function AboutUs() {
  return (
    <>
      <main>
        <div className="flex flex-col items-center text-white text-center space-y-5">
          <div className="lg:w-64 md:w-64 w-32">
            <a href="https://stim-city.creator-spring.com/apparel">
              <Image src={logo} className="h-10"></Image>
            </a>
          </div>
          <h1 className="text-5xl font-bold">About Us</h1>
          <Typeography className="w-3/4 lg:w-1/2">
            {config.aboutus}
          </Typeography>
        </div>
      </main>
    </>
  )
}
