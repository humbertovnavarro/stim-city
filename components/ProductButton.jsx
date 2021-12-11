export default function ProductButton(props) {
    const { active, index, category } = props;
    return (
        <button onClick={() => { props.callback(index)}} className={`${active === index ? "text-white" : "text-yellow-100 bg-violet-500"} rounded-md hover:bg-pink-200 bg-pink-500 transition-all ease-out duration-500 active:translate-y-1`} href="https://stim-city.creator-spring.com/apparel">{category}</button>
    )
}