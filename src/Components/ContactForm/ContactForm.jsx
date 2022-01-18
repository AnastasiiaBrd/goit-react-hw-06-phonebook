import react, { Component } from "react";
import { nanoid } from "nanoid";
import propTypes from "prop-types";
import style from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };
  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    // const { name, contacts } = this.state;
    const contact = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    };

    this.props.onSubmit(contact);
    this.reset();
  };
  reset = () => this.setState({ name: "", number: "" });
  render() {
    return (
      <form className={style.form} onSubmit={this.handleSubmit}>
        <label className={style.label_text} htmlFor="">
          Name
          <br></br>
          <input
            type="text"
            className={style.input_form}
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
            id={this.inputNameId}
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
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />
        </label>
        <br></br>
        <button className={style.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
export default ContactForm;
ContactForm.propTypes = {
  state: propTypes.objectOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      number: propTypes.number.isRequired,
    })
  ),
};
