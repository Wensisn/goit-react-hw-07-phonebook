import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contactOperation';
import { getContacts } from '../../redux/selectors';

export const ContactsVies = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <div>
        {isLoading && <p>Loading tasks...</p>}
        {error && <p>{error}</p>}
        <p>{JSON.stringify(items, null, 2)}</p>
      </div>
    </>
  );
};
