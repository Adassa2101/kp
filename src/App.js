import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import api from "./api";
import BookMark from "./components/bookmark";

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) => {
    const newUsers = users.filter((user) => user._id !== userId);
    setUsers(newUsers);
  };
  const handleIcon = (id) =>
    setUsers(
      users.filter((user) => {
        if (user._id === id) {
          user.bookmarck =!user.bookmarck;
          return user;
        }
        return user;
      })
    );
  return (
    <div>
      <BookMark/>
      <SearchStatus length={users.length} />
      <Users onDelete={handleDelete} onIcon={handleIcon} users={users} />
    </div>
  );
}

export default App;
