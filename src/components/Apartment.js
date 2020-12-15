import React from "react";
import Room from "./Room";

// make the apartment element here
const Apartment = ({ name, rooms, paint }) => {

    // calculates total price by multiplying total liters with paint price per liter
    function getTotalPrice(rooms, paint) {
        let paintPrice = paint.paintPrice;
        let totalLetersNeeded = getTotalLiters(rooms, paint);
        let totalPrice = totalLetersNeeded * paintPrice;

        return totalPrice;
    }

    // calculates total liters needed based on total amount of squaremeters
    function getTotalLiters(rooms, paint) {
        let paintCount = paint.paintCount;
        let totalSquareMeters = 0;
        let paintCoverage = paint.paintCoverage;

        rooms.forEach((element) => {
            totalSquareMeters += (element.size * element.typeFactor);
        });

        let totalLetersNeeded = (totalSquareMeters / paintCoverage) * paintCount;

        return totalLetersNeeded;
    }

    function getSquareMeters(rooms) {
        let totalSquareMeters = 0;

        rooms.forEach((element) => {
            totalSquareMeters += element.size;
        });

        return totalSquareMeters;
    }

    return (
        <div className="apartmentDiv">
            <fieldset className="apartmentFieldset">
                <h3>{name} {getSquareMeters(rooms)}m<sup>2</sup></h3>
                <h4>Rooms:</h4>
                <div className="rooms">
                    {rooms.map((room, i) => {
                        return <Room key={i} {...room} {...paint} />
                    })}
                    <p><strong>
                        Total price for the apartment: {Math.round((getTotalPrice(rooms, paint) * 100) / 100)}€
                    </strong></p>
                    <p><strong>
                        Total paint needed: {Math.round((getTotalLiters(rooms, paint) * 100) / 100)} liters
                    </strong></p>
                </div>
            </fieldset>
        </div>
    )

}

export default Apartment;