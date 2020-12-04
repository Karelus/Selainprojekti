import React from "react";
import Apartment from "./Apartment";

const HousingCooperative = ({ apartments = [], paint }) => {
    return (
        <section>
            <h5>Apartments:</h5>
            <div className="apartments">
                {apartments.map((apartment, i) => {
                    return <Apartment key={i} {...apartment} paint={paint} />
                })}
            </div>
        </section>
    )
};

export default HousingCooperative;