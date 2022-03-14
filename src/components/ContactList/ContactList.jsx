import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ visibleContacts, onDeleteContact }) => {
    return (
        <ul className={s.list}>
            {visibleContacts.map(({ id, name, number }) => (
                <li key={id} className={s.item}>
                    {name}:  {number}
                    <button
                        type="button"
                        onClick={() => onDeleteContact(id)}
                        className={s.btn}
                    >
                    Delete
                    </button>
                </li>
            ))}
        </ul>);
};

ContactList.propTypes = {
    visibleContacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;

