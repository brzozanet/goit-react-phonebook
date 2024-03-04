import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts/operations";
import { selectVisibleContacts } from "redux/contacts/selectors";
import css from "./ContactsList.module.css";
import { Button } from "@mui/material";

export const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <ul className={css.contactsList}>
      {contacts.map(contact => (
        <li key={contact.id} className={css.contactsItem}>
          <div>
            {contact.name}: {contact.number}
            <Button type="submit" onClick={() => handleDelete(contact.id)}>
              Delete {contact.name}
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
};
