import React from 'react';
import PropTypes from 'prop-types';
import './IconSwitch.css';

const IconSwitch = ({ iconName, onSwitch }) => {
    const handleSwitch = () => {
        onSwitch(iconName);
    };
    
    return <span className="material-icons" onClick={ handleSwitch }>{ iconName }</span>;
};

IconSwitch.propTypes = {
    props: PropTypes.shape({
        iconName: PropTypes.string,
        onSwitch: PropTypes.func.isRequired
    })
};

export default IconSwitch;

