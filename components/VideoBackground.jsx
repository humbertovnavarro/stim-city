export default function VideoBackground(props) {
    return (
      <div id="retrowaveBG">
        <video autoPlay muted loop id="retrowave">
            <source src={props.src || "/retrowave.mp4" } type="video/mp4"/>
        </video>
      </div>
    )
}