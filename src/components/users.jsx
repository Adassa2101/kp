import React, { useState } from "react";
import api from "../api";
const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const formUsers = () => {};
  const handleDelete = (userId) => {};
  const renderPhrase = (number) => {};
  return (
    <>
      <span>number phrase</span>
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
                ))};
              </td>
              <td>{user.profession}</td>
              <td>{user.completedMeetings}</td>
              <td>{user.rate}</td>
              <td>
                <button
                  onClick={() => handleDelete({ id: 1 })}
                  className="btn bg-danger text-white btn-sm"
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
          ;
        </tbody>
      </table>
    </>
  );
};
export default Users;
