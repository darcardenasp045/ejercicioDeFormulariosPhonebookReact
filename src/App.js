import React, { useState } from "react";
import Note from "./Note.js";

const names = [
  {
    id: 1,
    name: "Daniel",
    phone: 123456
  },
  {
    id: 2,
    name: "Juan",
    phone: 453356
  }
];

const App = () => {
  const [persons, setPersons] = useState(names);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const noteToAddToState = {
      id: persons.length + 1,
      name: newName,
      phone: newPhone
    };

    setPersons(names.concat(noteToAddToState));
    setNewName("");
    setNewPhone("");
    console.log(noteToAddToState);
  };

  return (
    <div>
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
      {persons.map((note) => {
        return <Note key={note.id} {...note} />;
      })}
      ...
    </div>
  );
};

export default App;
