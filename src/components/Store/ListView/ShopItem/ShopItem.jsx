import React from 'react';
import PropTypes from 'prop-types';
import './ShopItem.css';

const ShopItem = ({ name, price, color, img }) => (
    <>
        <img src={ `https://blackwhite2018.github.io/ProductCards/img/${img}` } alt={ name } className="card__img"/>
        <h2 className="card__title">{ name }</h2>
        <span className="card__color">{ color }</span>
        <span className="card__price">{ `$${ price }` }</span>
        <button className="card__button">add to cart</button> 
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

