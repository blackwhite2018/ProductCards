import React from 'react';
import PropTypes from 'prop-types';
import './ShopItem.css';

const ShopItem = ({ name, price, color, img }) => (
    <>
        <h2 className="card__title">{ name }</h2>
        <p className="card__color">{ color }</p>
        <img src={ img } alt={ name } className="card__img"/>
        <div className="card__box">
            <span className="card__price">{ `$${ price }` }</span>
            <button className="card__button">add to cart</button>
        </div>
    </>
);

ShopItem.propTypes = {
    props: PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.number,
        color: PropTypes.string,
        img: PropTypes.string
    })
};

export default ShopItem;

