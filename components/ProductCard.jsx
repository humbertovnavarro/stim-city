import { useEffect, useState } from "react";
import Card from "./Card";
export default function ProductCard(props) {
    let product = props.product;
    return (
        <a href={product.link}>
            <Card className="lg:w-64 w-65 lg:m-5 m-2">
                <h1>{product.title}</h1>
                <h2 className="italic text-sm">{product.type}</h2>
                <img className="rounded-lg " src={product.frontImage}></img>
                <h2 className="bold my-2">{product.price}</h2>
            </Card>
        </a>
    )
}
