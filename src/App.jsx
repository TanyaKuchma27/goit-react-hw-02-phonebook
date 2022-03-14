import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import initialContacts from './contacts.json';
import s from './App.module.css';

class App extends Component { 
  state = {
    contacts: initialContacts,
    filter: ''    
  };

  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number
    };

    const normalizedName = name.toLowerCase();

    if (this.state.contacts.find(contact =>
      contact.name.toLowerCase() === normalizedName
    )) {
      alert(`${name} is already in contacts`);
      return;
    };
    
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  }; 

  formSubmitHandler = ({ name, number }) => {
    this.addContact(name, number);
  };
    
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

   deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <div className={s.container}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler}/>
        
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.changeFilter} />
        <ContactList visibleContacts={ visibleContacts } onDeleteContact={this.deleteContact}/>         
      </div>
    );
  }

}

export default App;