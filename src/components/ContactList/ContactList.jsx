import { useSelector } from 'react-redux';
import { ContactListItem } from 'components/ContactListItem';
import styles from './ContactList.module.css';
import { getVisibleContacts } from 'utils/getVisibleContacts';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const visibleContacts = getVisibleContacts(contacts, filter);
  return (
    <ul className={styles.contactList}>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};
