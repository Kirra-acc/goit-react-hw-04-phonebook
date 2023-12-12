import React from 'react';
import { ListItem } from '../ListItem/ListItem.jsx';
import s from './ContactList.module.css';

export const ContactList = ({
  contacts,
  getFilteredData,
  children,
  deleteContact,
}) => {
  const filteredContacts = getFilteredData(contacts);

  return (
    <>
      {children}
      {filteredContacts.length === 0 ? (
        <p className={s.errorMessage}>No contacts match your search</p>
      ) : (
        <ul className={s.listOfContacts}>
          {filteredContacts.map(({ id, name, number }) => (
            <ListItem
              key={id}
              id={id}
              name={name}
              number={number}
              deleteContact={deleteContact}
            />
          ))}
        </ul>
      )}
    </>
  );
};
