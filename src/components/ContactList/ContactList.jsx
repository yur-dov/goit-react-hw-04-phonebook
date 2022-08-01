import React from "react";
import css from './ContactList.module.css'
import PropTypes from 'prop-types';

export const ContactList = ({contacts, deleteContact }) => <ul>
        {contacts.map(({ id, name, number }) =>
                <li className={css.list_item} key={id}>
                        <p className={css.name}>{name}: <span className={css.number}>tel. {number}</span></p>
                        <button type='button' onClick={() => deleteContact(id)}>🗑</button>
                </li>)}
</ul>

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
   deleteContact: PropTypes.func.isRequired,
};