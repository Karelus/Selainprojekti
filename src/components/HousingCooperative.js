import React from "react";
import Apartment from "./Apartment";

const HousingCooperative = ({ apartments = [], paint }) => {

    // calculates total price by multiplying total liters with paint price per liter
    function getTotalPrice(apartments, paint) {
        let paintPrice = paint.paintPrice;
        let totalLitersNeeded = getTotalLiters(apartments, paint);
        var totalPrice = totalLitersNeeded * paintPrice;

        return totalPrice;
    }

    // calculates total liters needed based on total amount of squaremeters 
    function getTotalLiters(apartments, paint) {
        let paintCount = paint.paintCount;
        let totalSquareMeters = 0;
        let paintCoverage = paint.paintCoverage;

        apartments.forEach((element) => {
            element.rooms.forEach((element) => {
                totalSquareMeters += (element.size * element.typeFactor);
            })
        });

        let totalLitersNeeded = (totalSquareMeters / paintCoverage) * paintCount;
        return totalLitersNeeded;
    }

    return (
        <section>
            <h5 className="apartmentHeader">Apartments:</h5>
            <div className="apartments">
                {apartments.map((apartment, i) => {
                    return <Apartment key={i} {...apartment} paint={paint} />
                })}
            </div>
            <div>
                <h3>
                    Total price for the Housing Cooperative: {Math.round((getTotalPrice(apartments, paint) * 100) / 100)}€
                </h3>
                <h3>
                    Total liters of {paint.paintName} needed for the Housing Cooperative: {Math.round((getTotalLiters(apartments, paint) * 100) / 100)} liters
                </h3>
            </div>
            <div>
                <br></br>
                <h6>
                    That doesn't seem too bad, go for it!
                </h6>
            </div>
        </section>
    )
};

export default HousingCooperative;