import { Filter } from 'components/Filter';
import { ContactsForm } from 'components/ContactsForm';
import { ContactsList } from '../components/ContactsList/ContactsList';
import { selectError, selectLoading } from 'redux/contacts/selectors';
import { useSelector } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const styles = {
  containerDiv: ['flex', 'justify-center', 'mb-4', 'gap-4'].join(' '),
};

const Phonebook = () => {
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Phonebook</title>
        </Helmet>
      </HelmetProvider>

      <div className={styles.containerDiv}>
        <ContactsForm />
        <Filter />
      </div>
      {isLoading ? <p>Loading contacts...</p> : <ContactsList />}
      {isError && <p>Something went wrong. Try again later.</p>}
    </div>
  );
};

export default Phonebook;
