import React, { useReducer, useState } from "react";
import ReactDOM from "react-dom";
import data from "../data/apartments.json";
import HousingCooperative from "./components/HousingCooperative";
import "../dist/css/styles.css";

const formReducer = (state, event) => {
    return {
        ...state,
        [event.name]: event.value
    }
}

function Form() {
    const [formData, setFormData] = useReducer(formReducer, {});

    const handleSubmit = event => {
        event.preventDefault();

        var paint = {
            paintName: event.target.name.value,
            paintPrice: event.target.price.value,
            paintCoverage: event.target.coverage.value,
            paintCount: event.target.count.value
        }
        renderResults(paint);
    }

    const handleChange = event => {
        setFormData({
            name: event.target.name,
            value: event.target.value,
        });
    }

    return (
        <div className="wrapper">
            <h1>Paint Price and Liter Counter</h1>
            <h2>Paint Details:</h2>
            <br></br>
            <br></br>

            <form onSubmit={handleSubmit}>
                <label>
                    <p>Paint name: </p>
                    <input name="name" required="required" onChange={handleChange} />
                </label>
                <br></br>
                <label>
                    <p>Price of paint (€/l): </p>
                    <input name="price" required="required" onChange={handleChange} />
                </label>
                <br></br>
                <label>
                    <p>Paint abundance (m<sup>2</sup>/l): </p>
                    <input name="coverage" required="required" onChange={handleChange} />
                </label>
                <br></br>
                <label>
                    <p>Number of layers applied: </p>
                    <select name="count" className="selectMenu" onChange={handleChange}>
                        <option value="">--Choose Amount--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </label>
                <br></br>
                <button type="submit>" className="submitButton">Submit</button>
            </form>
        </div>
    )
}

function renderResults(paint) {
    ReactDOM.render(<HousingCooperative apartments={data} paint={paint} />, document.getElementById("result-root"));
}

ReactDOM.render(<Form />, document.getElementById("root"));
