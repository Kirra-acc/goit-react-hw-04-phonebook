import { useState } from 'react';
import { nanoid } from 'nanoid';
import s from './Input.module.css';

export const Input = ({ contacts, newContactState }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleValueChange = event => {
    const type = event.target.name;
    const value = event.target.value;
    if (type === 'name') {
      setName(value);
    }
    if (type === 'number') {
      setNumber(value);
    }
  };

  const createContact = event => {
    event.preventDefault();

    const newContact = { name, number, id: nanoid() };

    if (contacts.some(contact => contact.name === name)) {
      alert(`Contact with the name ${name} already exists!`);
      return;
    }

    newContactState(newContact);

    setName('');
    setNumber('');
  };

  return (
    <form className={s.formBox} autoComplete="off" onSubmit={createContact}>
      <div className={s.inputBox}>
        <label className={s.formLabel}>
          <input
            className={s.formInput}
            value={name}
            onChange={event => handleValueChange('name', event)}
            type="text"
            name="name"
            placeholder="Contact name"
          />
        </label>
      </div>

      <div className={s.inputBox}>
        <label className={s.formLabel}>
          <input
            className={s.formInput}
            onChange={event => handleValueChange('number', event)}
            value={number}
            type="tel"
            name="number"
            placeholder="Phone number"
            required
          />
        </label>
      </div>

      <button className={s.addBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};