import Link from "next/link";
import { useEffect } from "react";
export default function ProductButton(props) {
    const { active, index, category } = props;
    const style = `
    text-white
    rounded-md
    hover:bg-pink-200
    bg-pink-500
    transition-all
    ease-out
    duration-500
    active:translate-y-1
    `;
    return (
        <Link href={`/${category.toLowerCase()}`}>
            <a className={style}>{category}</a>
        </Link>
    )
}
