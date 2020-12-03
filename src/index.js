import React, { useReducer, useState } from "react";
import ReactDOM from "react-dom";
import data from "../data/apartments.json";
import HousingCooperative from "./components/HousingCooperative";

const formReducer = (state, event) => {
    return {
        ...state,
        [event.name]: event.value
    }
}

function Form() {
    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);

        setTimeout(() => {
            setSubmitting(false);
        }, 3000)

        var paint = {
            name: event.target.name.value,
            price: event.target.price.value,
            coverage: event.target.coverage.value,
            count: event.target.count.value
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
            <h1>Maalilaskuri</h1>
            <h2>asunto-osakeyhtiölle</h2>
            {submitting && 
            <div>
                You are submitting the following:
                <ul>
                    {Object.entries(formData).map(([name, value]) => (
                        <li key={name}><strong>{name}</strong>: {value.toString()}</li>
                    ))}
                </ul>
            </div>
            }
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Maalin nimi</p>
                    <input name="name" onChange={handleChange} />
                </label>
                <label>
                    <p>Maalin hinta</p>
                    <input name="price" onChange={handleChange} />
                </label>
                <label>
                    <p>Maalin riittoisuus</p>
                    <input name="coverage" onChange={handleChange} />
                </label>
                <label>
                    <p>Montako kertaa pinnat maalataan</p>
                    <select name="count" onChange={handleChange}>
                        <option value="">--Valitse määrä--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </label>
                <br></br>
                <button type="submit>">Submit</button>
            </form>
        </div>
    )
}

function renderResults(paint) {
    console.log(paint)
    ReactDOM.render(<HousingCooperative apartments={data} paint={paint} />, document.getElementById("result-root"));
}

ReactDOM.render(<Form />, document.getElementById("root"));
