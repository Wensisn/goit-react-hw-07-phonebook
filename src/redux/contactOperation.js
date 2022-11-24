import axios from 'axios';
import {
  fetchingError,
  fetchingInProgress,
  fetchingSuccess,
} from '../redux/contactSlice';
axios.defaults.baseURL = 'https://637f980d2f8f56e28e913da7.mockapi.io';
export const fetchContacts = () => async dispatch => {
  try {
    dispatch(fetchingInProgress());
    const { response } = await axios.get('/contacts');
    dispatch(fetchingSuccess(response.data));
  } catch (e) {
    dispatch(fetchingError(e.message));
  }
};
