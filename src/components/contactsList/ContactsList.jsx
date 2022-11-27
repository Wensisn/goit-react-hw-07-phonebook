import { useSelector } from 'react-redux';
import { ContactsItem } from '../ContactsItem';
import { selectVisibleTasks } from 'redux/selectors';
import { GalleryList } from './contacts.styled';

export const ContactsList = () => {
  const items = useSelector(selectVisibleTasks);
  // const filter = useSelector(selectFilter);

  // const getVisibleContacts = items.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  // console.log(getVisibleContacts);
  // console.log(filter);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <GalleryList>
      {items.map(item => (
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
