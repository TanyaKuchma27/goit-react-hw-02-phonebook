// import propTypes from 'prop-types';
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

// ContactList.propTypes = {
//   message: propTypes.string.isRequired,
// };

// FeedbackOptions.propTypes = {
//   onLeaveFeedback: PropTypes.func.isRequired,
// };
// children: PropTypes.element.isRequired,

export default ContactList;

