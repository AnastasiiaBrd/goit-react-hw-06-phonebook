import react from "react";
import propTypes from "prop-types";
import ItemListContact from "../ItemListContact/ItemListContact";
import { number } from "prop-types";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className="list_item">
      {contacts.map(({ id, name, number }) => (
        <ItemListContact
          key={id}
          id={id}
          contactName={name}
          contactNumber={number}
          onClickDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  onDeleteContact: propTypes.func.isRequired,
};
