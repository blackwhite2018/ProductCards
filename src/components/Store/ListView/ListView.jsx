import React from 'react';
import PropTypes from 'prop-types';
import './ListView.css';
import ShopItem from './ShopItem/ShopItem.jsx';

const ListView = ({ cards }) => (
    <div className="list-view">
        {
            cards.map(({ card: name, price, color, img}, index) => (
                    <div className="card" key={ index }>
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

ListView.propTypes = {
    props: PropTypes.shape({
        cards: PropTypes.shape({
            name: PropTypes.string,
            price: PropTypes.number,
            color: PropTypes.string,
            img: PropTypes.string
        })
    })
};

export default ListView;
