import React from "react";
import Room from "./Room";

// make the apartment element here
const Apartment = ({ name, rooms, paint }) => {
    console.log(name);
    console.log(rooms);
    console.log(paint);
    return (
        <div>
            <h3>{name}</h3>
            <h4>Rooms:</h4>
                <div className="rooms">
                    <fieldset>
                        {rooms.map((room, i) => {
                            return <Room key={i} {...room} {...paint} />
                        })}
                    </fieldset>
                    <p>Total cost: {Math.round((totalCost * 100) / 100)}€ </p>
                    <p>Total paint needed: {Math.round(totalLitersNeeded * 100) / 100} </p>
                </div>
        </div>
    )
}

export default Apartment;