// import propTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ filter, onChange }) => {
    return (
        <label className={s.field}>
            <span className={ s.text}>Find contacts by name</span>
            <input
                type="text"
                className={s.input}
                value={filter}
                onChange={onChange}
            />
        </label>
    );
};

// ContactList.propTypes = {
//   message: propTypes.string.isRequired,
// };

export default Filter;