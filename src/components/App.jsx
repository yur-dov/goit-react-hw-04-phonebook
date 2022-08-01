import React from "react";
import {ContactForm} from './ContactForm/ContactForm'
import {ContactList} from './ContactList/ContactList'
import {FilterForm} from './FilterForm/FilterForm'
import css from './app.module.css'
import { useState } from "react";
import useLocalStorage from "hooks/useLocalStorage";

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', defaultContacts);
  const [filter, setFilter] = useState('')

  const addNewContact = object => {
    const { name } =object;
    if (contacts.some(({ name }) => name ===object.name)) {
      alert(`Sorry, ${name} is already in contacts list`);
      return;
    }
    return(
      setContacts(prev => [...prev,object])
    );
  };

const onFilterChange = event => {
  setFilter(event.target.value );
};

const deleteContact = id => {
  const filteredItem = contacts.filter(contact => contact.id !== id);
  setContacts(filteredItem);
};

const getFilteredContacts = () => {
const normalizedFilter = filter.toLowerCase();

return contacts.filter(contact =>
  contact.name.toLowerCase().includes(normalizedFilter),
);
};

  return (
   <div className={css.container}>
        <h1 className={css.title}>PhoneBook</h1>
        <div className={css.add_contact}>
          <h2 className={css.title_add}>Add Contact</h2>
        <ContactForm addNewContact={addNewContact} />
          <h2 className={css.title_search}>Search contact</h2>
        <FilterForm onChange={onFilterChange} />
        </div>
        <div className={css.contacts}>
          <h2 className={css.title_contact}>Contacts</h2>
        <ContactList contacts={getFilteredContacts()} deleteContact={deleteContact} />
        </div>
      </div>
  );
};
