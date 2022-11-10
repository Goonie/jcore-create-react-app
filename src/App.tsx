import React from "react";
import "./App.css";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const person = {
    name: "Paul",
    email: "paul@company.com",
    photo: "https://randomuser.me/api/portraits/lego/1.jpg",
  };

  const persons = [
    {
      name: "Paul",
      email: "paul@company.com",
      photo: "https://randomuser.me/api/portraits/lego/1.jpg",
    },
    {
      name: "Dennis",
      email: "dennis@company.com",
      photo: "https://randomuser.me/api/portraits/lego/2.jpg",
    },
    {
      name: "Coen",
      email: "coen@company.com",
      photo: "https://randomuser.me/api/portraits/lego/3.jpg",
    },
  ];

  return (
    <PersonList>
      {/* Eerste voorbeeld: alles hard-coded in het component */}
      {/* <Person /> */}

      {/* Tweede voorbeeld: met props */}
      <Person
        name="Paul"
        email="paul@company.com"
        photo="https://randomuser.me/api/portraits/lego/1.jpg"
      />

      {/* Derde voorbeeld: vanuit object */}
      <Person name={person.name} email={person.email} photo={person.photo} />

      {/* Vierde voorbeeld: vanuit object, maar destructured */}
      <Person {...person} />

      {/* Vijfde voorbeeld: verzameling van objecten */}
      {persons.map((person) => (
        <Person key={person.email} {...person} />
      ))}
    </PersonList>
  );
}

export default App;
