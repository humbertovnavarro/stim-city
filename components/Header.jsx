import Link from "next/link"
import { useEffect, useState } from "react"
import ProductButton from "./ProductButton";
import config from 'config';
const numStates = 4;
export default function Header() {
    let [ active, setActive ] = useState(0);
    const buttons = config.categories.map((category, index) => {
        return(
            <ProductButton active={active} index={index} category={category} callback={setActive}></ProductButton>
        );
    });
    return (
    <div className={`
    sticky top-0 z-10
    mb-5
    font-mono 
    border-b-1 
    min-w-full
    p-8
    lg:text-xl md:text-l sm:text-s
    h-16
    rounded-md
    shadow-md
    text-white
    bg-gradient-to-r from-fuchsia-800 to-violet-500
    grid grid-cols-1 content-center
    `}>
        <div className="grid grid-cols-4 text-center gap-x-1">
            {buttons}
        </div>
    </div>
    )
}
