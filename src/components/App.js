import { useEffect, useState } from "react";
import { FormContact } from "./FormContact/FormContact";
import { ContactList } from "./ContactList/ContactList";
import { nanoid } from 'nanoid';
import { SearchFilter } from "./SearchFilter/SearchFilter";
import { Container, MainTitle, Title } from "./App.styled";

const getInitialContacts = () => {
  const savedContacts = localStorage.getItem('user-contacts');
  if (savedContacts !== null) {
    return JSON.parse(savedContacts)
  }
  return [];
};


export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('user-contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const check = contacts.some(({ name }) => newContact.name === name);
    if (check) {
      alert(`${newContact.name} is already in contacts`)
      return
    }
    
    setContacts(prevState => [...prevState, { ...newContact, id: nanoid(), }]);
  };
  
  const changeFilter = value => setFilter(value.trim().toLocaleLowerCase());

  const getVisibleItems = () => {
    return contacts.filter((contact) => {
      return contact.name.toLocaleLowerCase().includes(filter)
    })
  };

  const deleteContact = contactId => {
    setContacts(prevState => (prevState.filter(contact => contact.id !== contactId)))
  }

  const visibleItems = getVisibleItems();
  
  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <FormContact onAdd={addContact} />

      <Title>Contact List</Title>
      <SearchFilter filter={filter} onChangeFilter={changeFilter} />
      <ContactList onDelete={deleteContact} items={visibleItems} />
    </Container>
  )
};

