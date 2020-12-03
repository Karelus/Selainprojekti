import React from "react";

const Room = ( { name, size, typeFactor, paintName, paintPrice, paintCoverage, paintCount } ) => {

    var totalSize = (size * paintCount) * typeFactor;
    var litersPerRoom = totalSize / paintCoverage;

    return (
        <div>
            <p>{name} with a size of {size}m2 demands {Math.round(litersPerRoom * 100) / 100} liters of {paintName} - paint</p>
            <p>Cost {Math.round((litersPerRoom * paintPrice) * 100) / 100}€</p>
        </div>
    )
}

export default Room;