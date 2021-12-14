import Link from "next/link"
import { useEffect, useState } from "react"
import ProductButton from "./ProductButton";
import config from 'config';
import StimLink from "./StimLink";
import Image from "next/image";
import logo from '/public/logo.png';
import Icon from "./Icon";

export default function Header(props) {
    const buttons = config.categories.map((category, index) => {
        return(
            <ProductButton hash={props.hash} category={category} key={index}></ProductButton>
        );
    });
    return (
    <>
    <div className={`
        sticky top-0 z-10
        font-mono
        border-b-1
        min-w-full
        lg:text-xl md:text-l sm:text-s
        min-h-16
        rounded-md
        shadow-md
        text-white
        bg-gradient-to-r from-fuchsia-800 to-violet-500
        grid content-center
        grid-cols-1
        gap-x-1
        gap-y-1
        p-1
    `}>

        <div>
            <div className={`grid grid-cols-4 text-center gap-x-1`} >
                <StimLink href="/">HOME</StimLink>
                <StimLink href="/about-us">ABOUT US</StimLink>
                <StimLink newtab href={config.discord}>DISCORD</StimLink>
                <StimLink newtab href={config.shop}>TEESPRING</StimLink>
            </div>
        </div>
        {
        props.controls && 
        <div className={`grid grid-cols-5 text-center gap-x-1`}>
        {buttons}
        </div>
        }
    </div>
    </>
    )
}
