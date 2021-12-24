import Header from 'components/Header';
import Image from 'next/image';
import logo from 'public/logo.png';
import React from 'react';
import config from 'config';
import Card from 'components/Card';
import Footer from 'components/Footer';
import VideoBackground from 'components/VideoBackground';
export default function AboutUs() {
  return (
    <>
      <VideoBackground/>
      <Footer/>
      <main className="mb-40">
        <Header/>
        <div className="my-5 flex flex-col items-center text-white text-center space-y-5">
          <div className="lg:w-32 md:w-16 w-8">
            <a href="https://stim-city.creator-spring.com/apparel">
              <Image src={logo} className="h-10"></Image>
            </a>
          </div>
          <h1 className="text-5xl font-bold">About Us</h1>
          <Card className="w-3/4 lg:w-1/2">
            {config.aboutus}
          </Card>
        </div>
      </main>
    </>
  )
}
