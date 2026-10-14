import PropTypes from "prop-types";
import "./SearchBox.css";

function SearchBox({ filter, onChange }) {
    return (
        <input
            className="search-box"
            type="text"
            value={filter}
            placeholder="Search contacts"
            onChange={(evt) => onChange(evt.target.value)}
        />
    );
}

SearchBox.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default SearchBox;