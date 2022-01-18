import react from "react";
import propTypes from "prop-types";
import style from "./ItemListContact.module.css";

const ItemListContact = ({
  id,
  contactName,
  contactNumber,
  onClickDeleteContact,
}) => {
  return (
    <li key={id} className={style.contacts_item}>
      {contactName}: {contactNumber}
      <button
        className={style.button}
        type="submit"
        onClick={() => onClickDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};
export default ItemListContact;
ItemListContact.propTypes = {
  id: propTypes.string.isRequired,
  contactName: propTypes.string.isRequired,
  contactNumber: propTypes.string.isRequired,
  onClickDeleteContact: propTypes.func.isRequired,
};
