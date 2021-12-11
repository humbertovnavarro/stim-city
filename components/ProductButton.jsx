import Link from "next/link";
export default function ProductButton(props) {
    const { active, index, category } = props;
    const style = `
    ${active === index ? "text-white" : "text-yellow-100 bg-violet-500"}
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
            <button className={style}>{category}</button>
        </Link>
    )
}
