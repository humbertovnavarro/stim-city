export default function Card(props) {
    return (
    <div className={`
        bg-gradient-to-r from-fuchsia-800 to-violet-500
        rounded-lg shadow-lg p-1
        text-white
    `}>
      {props.children}
    </div>
    )
}
