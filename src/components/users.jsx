import React, { useState } from "react";
import api from "../api";
const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    const newUsers = users.filter((user) => user._id !== userId);
    setUsers(newUsers);
  };

  const getBageClasses = () => {
    let classes = "badge m-2 bg-";
    classes += users.length === 0 ? "danger" : "primary";
    return classes;
  };

  const renderPhrase = (number) => {
    number = users.length;

    if (number === 0) return "Никто с тобой не тусанёт";
    if (number >= 2 && number <= 4)
      return `${number} человека тусанут с тобой сегодня`;
    return `${number} человек тусанёт с тобой сегодня`;
  };
  return (
    <>
      <span style={{ fontSize: "18px" }} className={getBageClasses()}>
        {renderPhrase()}
      </span>
      {users.length ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <th>{user.name}</th>
                <td>
                  {user.qualities.map((qualitiy) => (
                    <span
                      className={`badge bg-${qualitiy.color}`}
                      key={qualitiy._id}
                    >
                      {qualitiy.name}
                    </span>
                  ))}
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}</td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn bg-danger text-white btn-sm"
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        ""
      )}
    </>
  );
};
export default Users;
