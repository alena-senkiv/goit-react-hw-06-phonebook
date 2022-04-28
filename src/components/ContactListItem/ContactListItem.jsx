import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ImBin } from 'react-icons/im';
import styles from './ContactListItem.module.css';
import { removeContact } from 'redux/contactsSlice';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={styles.contactListItem}>
      <span>{name}:</span> {number}
      <button type="button" onClick={() => dispatch(removeContact({ id }))}>
        <ImBin style={{ marginRight: 5 }} />
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func,
};
