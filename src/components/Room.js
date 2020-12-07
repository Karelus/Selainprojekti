import React from "react";

const Room = ( { name, size, typeFactor, paintName, paintPrice, paintCoverage, paintCount } ) => {

    var totalSquareMeters = (size * typeFactor) * paintCount;
    var totalLitersNeeded = totalSquareMeters / paintCoverage;
    var totalCost = totalLitersNeeded * paintPrice;

    return (
        <div>
            <p>{name} with a size of {size}m2 demands {Math.round(totalLitersNeeded * 100) / 100} liters of {paintName} - paint</p>
            <p>Cost {Math.round((totalCost * 100) / 100)}€</p>
            <p>Total cost: x </p>
            <p>Total paint needed: x </p>
        </div>
    )
}

export default Room;