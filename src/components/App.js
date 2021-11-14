// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import Section from './Section/Section';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import ContactsSearch from './ContactsSearch/ContactsSearch';
// import Loader from './Loader/Loader';
// import s from './Contacts/Contacts.module.css';
// import { getLoading } from '../redux/selectors';
// import * as operations from '../redux/operations';

export default function Phonebook() {
  // const isLoading = useSelector(getLoading);
  // const dispatch = useDispatch();
  // useEffect(() => dispatch(operations.fetchContacts()), [dispatch]);
  // console.log(isLoading);

  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        {/* {isLoading === false ? ( */}
        <>
          <ContactsSearch />
          <Contacts />
        </>
        {/* ) : (
          <Loader />
        )} */}
      </Section>
    </>
  );
}
