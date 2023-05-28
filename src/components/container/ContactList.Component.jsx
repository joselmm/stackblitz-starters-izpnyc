import React from 'react';
import { Contact } from '../../models/Contact.class.js';
import { ContactComponent } from '../pure/Contact.Component.jsx';
import PropTypes from 'prop-types';
export const ContactListComponent = (props) => {
  // por si en algun momento se le pasa a ContactListComponent una lista de contactos y se podria establecer a contactList el proptype de array
  const { contactList } = props;
  const defaultContact = new Contact({
    Nombre: 'Juan',
    Apellido: 'Guerra',
    Email: 'juanguerra@gmail.com',
    Conectado: true,
  });
  const defaultContactList = [defaultContact];
  return (
    <div>
      <h1>Your Contacts:</h1>
      {defaultContactList.map((contact) => (
        <ContactComponent contact={contact}></ContactComponent>
      ))}
    </div>
  );
};

ContactListComponent.propTypes = {
  contactList: PropTypes.array,
};
