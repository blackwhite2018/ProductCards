import React from 'react';
import PropTypes from 'prop-types';
import './CardsView.css';
import ShopItem from './ShopItem/ShopItem';

const CardsView = ({ cards }) => (
    <div className="cards-view">
        {
            cards.map(({ name, price, color, img}, index) => (
                    <div key={ index } className="card">
                        <ShopItem
                            name={ name }
                            price={ price }
                            color={ color }
                            img={ img }
                        />
                    </div>
                )
            )
        }
    </div>
);

CardsView.propTypes = {
    props: PropTypes.shape({
        cards: PropTypes.shape({
            name: PropTypes.string,
            price: PropTypes.number,
            color: PropTypes.string,
            img: PropTypes.string
        })
    })
};

export default CardsView;

