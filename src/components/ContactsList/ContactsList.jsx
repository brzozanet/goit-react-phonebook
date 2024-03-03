import { useSelector, useDispatch } from 'react-redux';
import css from './ContactsList.module.css';
import { deleteContact } from 'redux/contacts/operations';
import { selectVisibleContacts } from 'redux/contacts/selectors';


export const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  const handleDelete = (id) => dispatch(deleteContact(id));

  return (
    <ul className={css.contactsList}>
      {contacts.map(contact => (
        <li key={contact.id} className={css.contactsItem}>
          <div>
            <div>
              {contact.name}: {contact.number}
            </div>
            <button type="submit" value={contact.id} onClick={() => handleDelete(contact.id)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
