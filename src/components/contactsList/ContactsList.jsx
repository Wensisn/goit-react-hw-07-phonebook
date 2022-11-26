import { useSelector, useDispatch } from 'react-redux';
import { ContactsItem } from '../ContactsItem';
import { selectTasks, selectFilter } from 'redux/selectors';
import { GalleryList } from './contacts.styled';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contactOperation';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const items = useSelector(selectTasks);
  const filter = useSelector(selectFilter);

  const getVisibleContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  console.log(getVisibleContacts);
  console.log(filter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <GalleryList>
      {getVisibleContacts.map(item => (
        <ContactsItem
          key={item.id}
          id={item.id}
          name={item.name}
          number={item.number}
        />
      ))}
    </GalleryList>
  );
};
