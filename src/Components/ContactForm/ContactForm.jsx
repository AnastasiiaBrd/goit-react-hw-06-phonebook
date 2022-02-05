import { useState } from "react";
import { nanoid } from "nanoid";
import propTypes from "prop-types";
import style from "./ContactForm.module.css";

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };
  const reset = () => {
    setName("");
    setNumber("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = {
      name: name,
      number: number,
      id: nanoid(),
    };

    onSubmit(contact);
    reset();
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <label className={style.label_text} htmlFor="">
        Name
        <br></br>
        <input
          type="text"
          className={style.input_form}
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <br></br>
      <label className={style.label_text} htmlFor="">
        Number
        <br></br>
        <input
          type="tel"
          className={style.input_form}
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>
      <br></br>
      <button className={style.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  state: propTypes.objectOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      number: propTypes.number.isRequired,
    })
  ),
};
