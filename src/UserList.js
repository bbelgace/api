import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState(null); //state locale userliste
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/")
      .then(function (response) {
        console.log(response.data);
        setListOfUsers(response.data);
      });
  }, []);

  const handleChange = (e) => {
    const id = e.target.selectedIndex;
    id &&
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(function (response) {
          console.log(response.data);
        });
  };
  const affichage = document.querySelector("#affichage");
  return (
    <div className="container">
      <h1 className="textCente">list Of Users</h1>
      <select
        onChange={handleChange}
        className="form-select"
        aria-label="Default select example"
      >
        <option selected>Open this select menu</option>
        {listOfUsers &&
          listOfUsers.map((user) => <option id={user.id}>{user.name}</option>)}
      </select>
    </div>
  );
};

export default UserList;
