import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  deleteContact,
  changeFilter,
} from "./redux/contactsSlice";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import "./App.css";

function App() {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleAdd = (contact) => {
    const isDuplicate = contacts.some(
      (item) =>
        item.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isDuplicate) {
      alert("Такий контакт вже існує");
      return;
    }

    dispatch(addContact(contact));
  };

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = (value) => {
    dispatch(changeFilter(value));
  };

  return (
    <div className="app">
      <h1>Phonebook</h1>

      <h2>Add contact</h2>
      <ContactForm onAdd={handleAdd} />

      <h2>Contacts</h2>
      <SearchBox
        filter={filter}
        onChange={handleFilterChange}
      />

      <ContactList
        contacts={filteredContacts}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;