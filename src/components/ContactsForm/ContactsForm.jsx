import { useDispatch, useSelector } from "react-redux";
// import css from './ContactsForm.module.css';
import { addContact } from "redux/contacts/operations";
import { selectContacts } from "redux/contacts/selectors";
import { Button, TextField } from "@mui/material";

const styles = {
  containerDiv: ["flex", "justify-center", "mt-5"].join(" "),
  contactForm: [
    "flex",
    "flex-col",
    "border-2",
    "p-3",
    "rounded-3xl",
    "shadow-lg",
  ].join(" "),
  label: "mb-5",
};

export const ContactsForm = () => {
  const dispatch = useDispatch();

  const stateContacts = useSelector(selectContacts);
  const stateContactsNames = stateContacts.map(contact => contact.name);

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    };

    if (stateContactsNames.includes(contact.name)) {
      e.target.reset();
      return alert(`${contact.name} is alredy in contacts`);
    }

    dispatch(addContact(contact));

    e.target.reset();
  };

  return (
    <div className={styles.containerDiv}>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <label className={styles.label}>
          <TextField
            type="text"
            size="small"
            name="name"
            label="Name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={styles.label}>
          <TextField
            type="tel"
            size="small"
            name="number"
            label="Number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <Button type="submit" variant="contained">
          Add contact
        </Button>
      </form>
    </div>
  );
};
