import "./App.css";
import React, { useState } from "react";
import AddContact from "./AddContact";
import Header from "./Header";
import ContactCard from "./ContactCard";
import ContactList from "./ContactList";

function App() {
  const [contacts, setContacts] = useState([]);
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      {/* <ContactCard /> */}
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
