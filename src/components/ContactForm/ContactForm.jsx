import React from "react";
import css from './contactForm.module.css'
import { useState } from "react";
import { nanoid } from "nanoid";
import PropTypes from 'prop-types';

export const ContactForm = ({ addNewContact }) => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
 
const handleChange = eve => {
    const { name, value } = eve.target;
    switch (name) {
        case 'name':
            setName(value);
            break;

        case 'number':
            setNumber(value);
            break;
        default:
            return
    }
}

const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      name,
      number,
      id: nanoid(),
    };
    addNewContact(contact);
    reset();
  };

const reset = () => {
    setName('');
    setNumber('');
};
  

return (
    <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
            Name:
            <input
                className={css.input}
                value={name}
                type="text"
                onChange={handleChange}
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                />
        </label>
        <label className={css.label}>
            Number:
            <input
            className={css.input}
                type="tel"
                value={number}
                onChange={handleChange}
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                />
            </label>
        <button className={css.btn_add} type="submit">+Add</button>
    </form>
)
}

ContactForm.propTypes = {
  addNewContact: PropTypes.func.isRequired,
};