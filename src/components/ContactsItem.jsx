import { useDispatch } from 'react-redux';
import { GalleryItem, GalleryInfo } from './contactsList/contacts.styled';
import { deleteContact } from '../redux/contactOperation';

export const ContactsItem = ({ name, number, createdAt, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <GalleryItem key={id}>
        <GalleryInfo>{name}</GalleryInfo>
        <GalleryInfo>{number}</GalleryInfo>
        <GalleryInfo>{createdAt}</GalleryInfo>
        <button onClick={() => dispatch(deleteContact({ id }))}>delete</button>
      </GalleryItem>
    </>
  );
};
