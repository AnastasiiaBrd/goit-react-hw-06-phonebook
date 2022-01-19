import { Component } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";
import Filter from "./Components/Filter/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };
  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };
  formSubmitHandler = (data) => {
    console.log(data);
    this.findName(data.name)
      ? alert(`${data.name} is already in contacts`)
      : this.setState((prevState) => {
          return { contacts: [...prevState.contacts, data] };
        });
  };
  filterContact = () => {
    const { filter, contacts } = this.state;
    const filterInputContact = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return filterInputContact;
  };
  findName = (dataName) => {
    const { contacts } = this.state;
    return contacts.find(
      ({ name }) => name.toLowerCase() === dataName.toLowerCase()
    );
  };
  handleSearch = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    // const { name, contacts } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h1>Contacts</h1>
        <Filter filter={this.state.filter} onSearch={this.handleSearch} />
        <ContactList
          contacts={this.filterContact()}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
