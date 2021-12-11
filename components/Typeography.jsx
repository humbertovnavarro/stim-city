export default function Typeography(props) {
    return (
    <div className={`
        flex
        flex-col
        items-center
        bg-gradient-to-r from-fuchsia-800/50 to-violet-500/50
        rounded-lg shadow-lg p-1
        text-white
        text-center
        ${props.className}
    `}>
      {props.children}
    </div>
    )
}
