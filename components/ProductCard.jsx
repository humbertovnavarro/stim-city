import Card from "./Card";
import Carousel from './Carousel';
import StimLink from "./StimLink";
export default function ProductCard(props) {
    const { frontImage, additionalImages, title, price, type, link } = props.product;
    const $images = additionalImages.map((image, i) =>
    (
        <div>
            <img src={image} alt={title}/>
            <p className="legend">Wtf</p>
        </div>
    ));
    $images.push(<img src={frontImage} alt={title}/>)
    return (
            <Card className="w-64 m-5">
                <h1>{title}</h1>
                <h2 className="italic text-sm mb-2">{type}</h2>
                <div className="w-full h-64 relative">
                <a href={link}>
                    <Carousel disabled={type.toLowerCase().includes('sticker')} slides={[frontImage].concat(additionalImages || [])}/>
                </a>
                </div>
                <h2 className="bold my-2">{price}</h2>
                <StimLink className="px-8" href={link}>Purchase</StimLink>
            </Card>
    )
}
