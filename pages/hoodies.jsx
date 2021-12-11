import Head from 'next/head'
import Header from 'components/Header';
import Image from 'next/image';
import logo from 'public/logo.png';
import React, { useEffect, useState } from 'react';
import Card from 'components/Card';
export default function Home() {
  return (
    <>
    <div className="flex flex-col items-center justify-center">
      <main className="text-center flex flex-col items-center justify-center">
        <div className="lg:w-64 w-32">
          <a href="https://stim-city.creator-spring.com/apparel">
            <Image src={logo} className="h-10"></Image>
          </a>
        </div>
        <Card>
          <p>Hello World</p>
        </Card>
      </main>
    </div>
    </>
  )
}
