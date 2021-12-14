import { useEffect, useState } from "react";
import Card from "./Card";
export default function ProductCard(props) {
    let product = props.product;
    return (
        <a href={product.link}>
            <Card className="w-64 m-5">
                <h1>{product.title}</h1>
                <h2 className="italic text-sm">{product.type}</h2>
                <img className="rounded-lg " src={product.frontImage}></img>
                <h2 className="bold my-2">{product.price}</h2>
            </Card>
        </a>
    )
}