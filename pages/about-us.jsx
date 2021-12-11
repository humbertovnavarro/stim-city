import Head from 'next/head'
import Header from 'components/Header';
import Image from 'next/image';
import logo from 'public/logo.png';
import React from 'react';
import Card from 'components/Card';
export default function AboutUs() {
  return (
    <>
    <div id="retrowaveBG">
      <video autoPlay muted loop id="retrowave">
        <source src="/retrowave.mp4" type="video/mp4"/>
      </video>
    </div>
    <div className="flex flex-col items-center justify-center">
      <main className="text-center flex flex-col items-center justify-center">
        <div className="lg:w-64 w-32">
          <a href="https://stim-city.creator-spring.com/apparel">
            <Image src={logo} className="h-10"></Image>
          </a>
        </div>
        <Card>
          <h1 className="text-5xl font-bold">About Us</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis temporibus consequatur, consectetur corrupti suscipit ullam officiis repellat necessitatibus eligendi totam maxime tenetur sed ut itaque saepe facere similique ad nesciunt? Corporis, aspernatur unde. Amet non tenetur expedita sed numquam, maiores nulla reiciendis omnis dolores quibusdam saepe repellendus cum, id dolor nemo praesentium reprehenderit aliquid a nam accusamus beatae! Ducimus repellendus recusandae aperiam saepe, reprehenderit fuga deserunt, cupiditate blanditiis consectetur ex, voluptatibus atque eligendi quasi. A eos, odit culpa est nam atque id dolore libero ipsa nesciunt hic facilis, numquam reprehenderit inventore corporis eligendi et! Iure officia optio dolore odit ducimus?</p>
        </Card>
      </main>
    </div>
    </>
  )
}
