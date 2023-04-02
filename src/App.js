import React, { useState } from "react";
import Note from "./Note.js";

const App = ({ personsNames }) => {
  const [persons, setPersons] = useState(personsNames);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const nameExists = persons.some(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );

    if (nameExists) {
      alert(`${newName} already exists in the phonebook.`);
      return;
    }

    const noteToAddToState = {
      id: persons.length + 1,
      name: newName,
      phone: newPhone
    };

    setPersons(persons.concat(noteToAddToState));
    setNewName("");
    setNewPhone("");
    console.log(noteToAddToState);
  };

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };

  const filteredPersons = filterValue
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(filterValue.toLowerCase())
      )
    : persons;

  return (
    <div>
      Ingresa la letra que quieres buscar:
      <input value={filterValue} onChange={handleFilterChange} />
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name:{" "}
          <input
            value={newName}
            onChange={(event) => setNewName(event.target.value)}
          />{" "}
          phone:{" "}
          <input
            value={newPhone}
            onChange={(event) => setNewPhone(event.target.value)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPersons.map((note) => {
        return <Note key={note.id} {...note} />;
      })}
    </div>
  );
};

export default App;
