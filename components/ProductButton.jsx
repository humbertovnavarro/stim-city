import Link from "next/link";
export default function ProductButton(props) {
    const { category, hash } = props;
    const style = `
        text-white
        rounded-md
        hover:bg-pink-200
        transition-all
        ease-out
        duration-500
        active:translate-y-1
        p-1
    ${hash.toUpperCase() === '#' + category ? 'bg-yellow-500' : 'bg-pink-500' }
    `;
    return (
        <a className={style} href={`/#${category.toLowerCase()}`}>
            {category.replace("-", " ")}
        </a>
    )
}
