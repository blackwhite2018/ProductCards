import React, { useState } from 'react';
import './Store.css';
import IconSwitch from './IconSwitch/IconSwitch';
import CardsView from './CardsView/CardsView';
import ListView from './ListView/ListView';

const Store = () => {
    const [iconName, setIconName] = useState('view_list');
    const [cards, setCards] = useState(
        [
            {
                name: "Nike Metcon 2",
                price: "130",
                color: "red",
                img: "1.jpg"
            },
            {
                name: "Nike Metcon 2",
                price: "130",
                color: "green",
                img: "2.jpg"
            },
            {
                name: "Nike Metcon 2",
                price: "130",
                color: "blue",
                img: "3.jpg"
            },
            {
                name: "Nike Metcon 2",
                price: "130",
                color: "black",
                img: "4.jpg"
            },
            {
                name: "Nike free run",
                price: "170",
                color: "black",
                img: "7.jpg"
            },
            {
                name: "Nike Metcon 3",
                price: "150",
                color: "green",
                img: "5.jpg"
            }
        ]
    );

    const onSwitch = iconName => {
        setIconName(iconName === 'view_list' ? 'view_module' : 'view_list');
    };

    return (
        <>
            <div className="menu root__menu">
                <IconSwitch
                    iconName={ iconName }
                    onSwitch={ onSwitch }
                />
            </div>
            {
                iconName === 'view_list' ? <CardsView  cards={ cards } /> : <ListView cards={ cards } />
            }
        </>
    )
};

export default Store;

