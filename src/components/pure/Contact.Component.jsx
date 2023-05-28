import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/Contact.class.js';

export const ContactComponent = ({ contact }) => {
  // por si en algun momento se le pasa a ContactListComponent una lista de contactos y se podria establecer a contactList el proptype de array
  //const { contactList } = props;

  return (
    <div>
      <h3>{contact.Nombre + ' ' + contact.Apellido}</h3>
      <h3>Email: {contact.Email}</h3>
      <h3>The Contact is: {contact.Conectado ? 'Conected' : 'Desconected'}</h3>
    </div>
  );
};

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};
