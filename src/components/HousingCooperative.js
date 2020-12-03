import React from "react";

const HousingCooperative = ({ apartments = [], paint }) => {

    return (
        <section>
            <h1>Apartments</h1>
            <div className="apartments">
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
            </div>
        </section>
    )
};

export default HousingCooperative;