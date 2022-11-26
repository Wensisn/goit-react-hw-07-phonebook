import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactOperation';
import {
  SectionForm,
  Form,
  Label,
  Input,
  Name,
  Click,
  Text,
} from './ContactForm/form.styled';

export const LoginForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleFormSubmit = event => {
    event.preventDefault();
    dispatch(addContact({ name, number }));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <SectionForm>
      <Text>PhoneBook</Text>

      <Form onSubmit={handleFormSubmit}>
        <Label htmlFor={nameInputId}>
          <Name>Name</Name>
          <Input
            type="text"
            name="name"
            required
            value={name}
            id={nameInputId}
            onChange={e => setName(e.currentTarget.value)}
          />
        </Label>
        <Label htmlFor={numberInputId}>
          <Name>Number</Name>
          <Input
            type="tel"
            name="number"
            required
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            id={numberInputId}
            onChange={e => setNumber(e.currentTarget.value)}
          />
        </Label>
        <Click type="submit">Add a contact</Click>
      </Form>
    </SectionForm>
  );
};
