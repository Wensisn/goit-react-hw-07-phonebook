import { useDispatch, useSelector } from 'react-redux';
import { ContactsItem } from '../ContactsItem';
import {
  selectVisibleTasks,
  selectIsLoading,
  selectError,
} from 'redux/selectors';
import { GalleryList } from './contacts.styled';
import { fetchContacts } from '../../redux/contactOperation';
import { useEffect } from 'react';

export const ContactsList = () => {
  const items = useSelector(selectVisibleTasks);
  const isLoading = useSelector(selectIsLoading);
  const Error = useSelector(selectError);

  // const dispatch = useDispatch();

  // console.log(contacts);
  // useEffect(() => {
  //   dispatch(() => fetchContacts());
  // }, [dispatch]);

  return (
    <GalleryList>
      {items.map(item => (
        <ContactsItem
          id={item.id}
          key={item.id}
          name={item.name}
          number={item.number}
        />
      ))}
    </GalleryList>
  );
};
