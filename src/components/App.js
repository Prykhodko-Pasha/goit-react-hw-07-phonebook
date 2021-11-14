import Section from './Section/Section';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import ContactsSearch from './ContactsSearch/ContactsSearch';

export default function Phonebook() {
  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <ContactsSearch />
        <Contacts />
      </Section>
    </>
  );
}
