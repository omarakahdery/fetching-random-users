import "./App.css";
import React, { useEffect, useState } from "react";
import LokData from "./component/LokData";

const fetchUsers = async () => {
  const res = await fetch("https://randomuser.me/api/?results=10");
  const data = await res.json();
  const { results } = data;
  return results;
};
const App = () => {
  const [usersLocation, SetUsersLocation] = useState([]);
  const location = (users) => {
    users.forEach((user) => {
      const { location, name } = user;
      const nameAdd = { location, name };
      SetUsersLocation((p) => [...p, nameAdd]);
    });
  };
  useEffect(() => {
    fetchUsers().then((results) => {
      location(results);
    });
  }, []);

  return (
    <>
      {usersLocation.length === 0 ? (
        <h1>Loading ...</h1>
      ) : (
        <LokData data={usersLocation} />
      )}
    </>
  );
};

export default App;

// {users.map((user, index) => (
//   <div key={index}>{`${user.name.first} ${user.name.last}`}</div>
// ))}
