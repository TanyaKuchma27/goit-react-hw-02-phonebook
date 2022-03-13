// import propTypes from 'prop-types';

const Filter = ({ filter, onChange }) => {
    return (
        <label>
            Find contacts by name
            <input type="text" value={filter} onChange={onChange} />
        </label>
    );
};

// ContactList.propTypes = {
//   message: propTypes.string.isRequired,
// };

export default Filter;