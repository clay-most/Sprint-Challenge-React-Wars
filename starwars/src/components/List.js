import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

const List = () => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(res => {
        console.log(res.data.results);
        setCharacter(res.data.results);
      })

      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {character.map((person, index) => {
        console.log("person");
        return <CharacterCard key={index} person={person} />;
      })}
    </div>
  );
};

export default List;
