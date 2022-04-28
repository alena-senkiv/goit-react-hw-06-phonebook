import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './App.module.css';
import { Container, ContactForm, ContactList, Filter } from 'components';

export const App = () => {
  const contacts = useSelector(state => state.contacts);

  return (
    <Container>
      <h1 className={styles.mainTitle}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.secondaryTitle}>Contacts</h2>
      {contacts.length > 0 ? (
        <Filter />
      ) : (
        <p> There are no any contacts in your phonebook</p>
      )}
      <ContactList />
      <ToastContainer autoClose={3000} />
    </Container>
  );
};
