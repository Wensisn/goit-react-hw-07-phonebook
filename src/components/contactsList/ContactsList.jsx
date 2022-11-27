import { useDispatch, useSelector } from 'react-redux';
import { ContactsItem } from '../ContactsItem';
import { GalleryList } from './contacts.styled';
import { fetchContacts } from '../../redux/contactOperation';
import { selectVisibleTasks } from '../../redux/selectors';
import { useEffect } from 'react';

export const ContactsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = useSelector(selectVisibleTasks);

  return (
    <>
      {filteredContacts.length > 0 && (
        <GalleryList>
          {filteredContacts.map(item => (
            <ContactsItem
              key={item.id}
              id={item.id}
              name={item.name}
              number={item.phone}
            />
          ))}
        </GalleryList>
      )}
    </>
  );
};
