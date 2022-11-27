import { ContactsList } from './contactsList/ContactsList';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsFilter } from './StatusFilter/ContactsFilter';
import { Bosx } from './app.styled';

export const App = () => {
  return (
    <Bosx>
      <ContactForm />
      <ContactsFilter />
      <ContactsList />
    </Bosx>
  );
};
