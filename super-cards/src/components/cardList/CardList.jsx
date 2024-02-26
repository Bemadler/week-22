import React from "react";
import CardItem from "../cardItem/CardItem.jsx";
import data from "../../cardsJson/cards.json";


function CardList() {
return (
    <div className="cardList">
        {data.map((item, index) => (
        <CardItem key={index} {...item} />
    ))}
    </div>
);
}

export default CardList;
