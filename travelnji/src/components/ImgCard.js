import React from 'react';
import PropTypes from 'prop-types';


const Card = ({property}) => {
    const {img,text} = property;
    return (
        <div  className="card">
            <img src={img} alt='..' />
            <div className="details">
                <h4>{text}</h4>
                
            </div>
        </div>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;