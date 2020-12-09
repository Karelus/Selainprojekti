import React from "react";

const Room = ( { name, size, typeFactor, paintName, paintPrice, 
    paintCoverage, paintCount, } ) => {

    var totalSquareMeters = (size * typeFactor) * paintCount;
    var totalLitersNeeded = totalSquareMeters / paintCoverage;
    var totalCost = totalLitersNeeded * paintPrice;

    return (
        <div>
            <p>
                {name} with a size of {size}m<sup>2</sup> demands {Math.round(totalLitersNeeded * 100) / 100} liters of paint
            </p>
            <p className="costParagraph">Cost: {Math.round((totalCost * 100) / 100)}€</p>
        </div>
    )
}

export default Room;