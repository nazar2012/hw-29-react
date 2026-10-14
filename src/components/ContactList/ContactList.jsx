import PropTypes from "prop-types";
import Contact from "../Contact/Contact";
import "./ContactList.css";

function ContactList({ contacts, onDelete }) {
    return (
        <ul className="contact-list">
            {contacts.length > 0 ? (
                contacts.map((contact) => (
                    <Contact
                        key={contact.id}
                        contact={contact}
                        onDelete={onDelete}
                    />
                ))
            ) : (
                <p>Немає контактів</p>
            )}
        </ul>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default ContactList;