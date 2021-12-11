import Head from 'next/head'
import Header from 'components/Header';
import Image from 'next/image';
import logo from 'public/logo.png';
import Typeography from 'components/Typeography';
import config from 'config';
import React, { useEffect, useState } from 'react';
export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center text-white text-center space-y-5">
        <div className="lg:w-64 md:w-64 w-32">
          <a href="https://stim-city.creator-spring.com/apparel">
            <Image src={logo} className="h-10"></Image>
          </a>
        </div>
      </div>
    </main>
  )
}
