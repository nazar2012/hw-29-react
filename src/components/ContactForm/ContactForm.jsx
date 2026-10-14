import { useState } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import "./ContactForm.css";

function ContactForm({ onAdd }) {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("+");
    const [error, setError] = useState("");

    const handleNumberChange = (evt) => {
        const value = evt.target.value;

        if (!value.startsWith("+")) {
            setError("Номер повинен починатися з +");
            return;
        }

        if (!/^\+\d*$/.test(value)) {
            setError("Введіть лише цифри");
            return;
        }

        setNumber(value);
        setError("");
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();

        if (!name.trim()) {
            return;
        }

        if (!/^\+\d{12}$/.test(number)) {
            setError("Введіть повний номер телефону: +380XXXXXXXXX");
            return;
        }

        onAdd({
            id: nanoid(),
            name: name.trim(),
            number,
        });

        setName("");
        setNumber("+");
        setError("");
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                placeholder="Name"
                onChange={(evt) => setName(evt.target.value)}
                required
            />

            <input
                type="tel"
                value={number}
                placeholder="+380XXXXXXXXX"
                onChange={handleNumberChange}
                required
            />

            {error && <p className="error-message">{error}</p>}

            <button type="submit">Add contact</button>
        </form>
    );
}

ContactForm.propTypes = {
    onAdd: PropTypes.func.isRequired,
};

export default ContactForm;