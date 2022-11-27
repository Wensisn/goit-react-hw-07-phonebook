import { useDispatch } from 'react-redux';
import {
  GalleryItem,
  GalleryInfo,
  GalleryButton,
} from './contactsList/contacts.styled';
import { deleteContact } from '../redux/contactOperation';

export const ContactsItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <GalleryItem key={id}>
        <GalleryInfo>{name}:</GalleryInfo>
        <GalleryInfo>{number}</GalleryInfo>
        <GalleryButton onClick={() => dispatch(deleteContact({ id }))}>
          Delete
        </GalleryButton>
      </GalleryItem>
    </>
  );
};
