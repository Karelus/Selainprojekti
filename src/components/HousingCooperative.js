import React from "react";
import Apartment from "./Apartment";

const HousingCooperative = ({ apartments = [], paint }) => {

    function getTotalPrice(apartments, paint) {
        let paintPrice = paint.paintPrice;
        let totalLitersNeeded = getTotalLiters(apartments, paint);
        var totalPrice = totalLitersNeeded * paintPrice;

        return totalPrice;
    }

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
            <h5>Apartments:</h5>
            <div className="apartments">
                {apartments.map((apartment, i) => {
                    return <Apartment key={i} {...apartment} paint={paint} />
                })}
            </div>
            <div>
                <h3>Total price for the Housing Cooperative: {getTotalPrice(apartments, paint)}€</h3>
                <h3>Total liters needed for the Housing Cooperative: {getTotalLiters(apartments, paint)} liters</h3>
            </div>
        </section>
    )
};

export default HousingCooperative;