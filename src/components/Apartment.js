import React, { useState } from "react";
import Room from "./Room";

// make the apartment element here
const Apartment = ({ name, rooms, paint }) => {

    return (
        <div>
            <fieldset>
                <h3>{name}</h3>
                <h4>Rooms:</h4>
                <div className="rooms">
                    {rooms.map((room, i) => {
                        return <Room key={i} {...room} {...paint} />
                    })}
                    <p><strong>Total price for the apartment: x€</strong></p>
                    <p><strong>Total paint needed: x liters</strong></p>
                </div>
            </fieldset>
        </div>
    )

}

export default Apartment;