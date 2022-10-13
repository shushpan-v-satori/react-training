import React from "react";
import "./AppCard.scss";

const AppCard = (props) => {
  const cardsJSX = props.cardsArr.map((card) => (
    <div className="app__card" key={card.id}>
      <div className="card__header">
        <h2 className="card__name">{card.name}</h2>
        <h3 className="card__role">{card.role}</h3>
      </div>
      <div className="card__counter">
        <p>Counter</p>
        <div className="counter__buttons">
          <button className="buttons__button">-</button>
          <button className="buttons__button">+</button>
        </div>
      </div>
    </div>
  ));
  return <>{cardsJSX}</>;
};

export default AppCard;
