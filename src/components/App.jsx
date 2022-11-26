import { ContactsList } from './contactsList/ContactsList';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsFilter } from './StatusFilter/ContactsFilter';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <ContactForm />
      <ContactsFilter />
      <ContactsList />
    </div>
  );
};
