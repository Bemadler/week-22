import React from "react";
import "./CardItem.css";

function CardItem({ name, universe, alterego, occupation, friends, superpowers, url, info }) {
return (
    <div className="cardItem">
        <img src={url} className="cardItem__img" alt={name} />
        <h2>{name}</h2>
        <p><strong>Universe:</strong> {universe}</p>
        <p><strong>Alter Ego:</strong> {alterego}</p>
        <p><strong>Occupation:</strong> {occupation}</p>
        <p><strong>Friends:</strong> {friends}</p>
        <p><strong>Superpowers:</strong> {superpowers}</p>
        <p className="cardItemInfo">{info}</p>
    </div>
);
}

export default CardItem;
