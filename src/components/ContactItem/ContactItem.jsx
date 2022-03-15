import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
    return (
        <div>
            {name}:  {number}
            <button
                type="button"
                onClick={() => onDeleteContact(id)}
                className={s.btn}
            >
            Delete
            </button>
        </div>);
};

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,        
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;

