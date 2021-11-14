import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './Contacts.module.css';
import ContactsItem from '../ContactsItem/ContactsItem';
import Loader from '../Loader/Loader';
// import { getVisibleContacts } from '../../redux/selectors';
import { getLoading, getVisibleContacts } from '../../redux/selectors';
import * as operations from '../../redux/operations';

export default function Contacts() {
  const contacts = useSelector(getVisibleContacts);
  const isLoading = useSelector(getLoading);
  const dispatch = useDispatch();
  useEffect(() => dispatch(operations.fetchContacts()), [dispatch]);
  console.log(isLoading);

  return isLoading === false ? (
    <ul className={s.contacts__list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.contacts__item}>
          <ContactsItem id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  ) : (
    <Loader />
  );
}
