
import React, { Component } from "react";
import { nanoid } from 'nanoid';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from "./components/Filter/Filter";

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }
  handleFormSubmit = ({name, number}) => {
    if(this.checkContactsDuplicate(name)) {
      alert('Ahtung!');
      return;
    }
    const contact = {
      id: nanoid(),
      name,
      number
    }
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts]
    }));
  }

  handleFilter = (event) => {
    this.setState({filter: event.currentTarget.value});
  }

  contactsSearch = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    const requiredСontact = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return requiredСontact;
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  }

  checkContactsDuplicate = (name) => {
      const normalizedName = name.toLowerCase();
      return this.state.contacts.find(contact =>
      contact.name.toLowerCase() === normalizedName);
  }
    
  

  render () {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleFormSubmit}/>
        <h2>Contacts</h2>
        <Filter value = {this.state.filter} onChange = {this.handleFilter}/>
        <ContactList contacts = {this.contactsSearch()} onDeleteContact={this.deleteContact}/>
      </div>
    )
  }
}

export default App;
