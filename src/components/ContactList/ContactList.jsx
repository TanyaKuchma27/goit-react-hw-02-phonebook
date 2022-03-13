// import propTypes from 'prop-types';

const ContactList = ({ visibleContacts, onDeleteContact }) => {
    return (
        <ul>
            {visibleContacts.map(({ id, name, number }) => (
                <li key={id} >
                    {name} {number}
                    <button
                        type="button"
                        onClick={() => onDeleteContact(id)}
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

export default ContactList;

