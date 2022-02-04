import { useState, useEffect } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";
import Filter from "./Components/Filter/Filter";

export default function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filter, setFilter] = useState("");

  const deleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };
  const formSubmitHandler = (data) => {
    findName(data.name)
      ? alert(`${data.name} is already in contacts`)
      : setContacts((prevContacts) => [...prevContacts, data]);
  };
  const filterContact = () => {
    const normalized = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalized)
    );
  };
  const findName = (dataName) => {
    return contacts.find(
      ({ name }) => name.toLowerCase() === dataName.toLowerCase()
    );
  };
  const handleSearch = (e) => {
    setFilter(e.currentTarget.value);
  };
  useEffect(() => {
    const contact = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contact);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h1>Contacts</h1>
      <Filter filter={filter} onSearch={handleSearch} />
      <ContactList
        filterContacts={filterContact()}
        onDeleteContact={deleteContact}
      />
    </>
  );
}
