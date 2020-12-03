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
                </div>
        </div>
    )
}

export default Apartment;