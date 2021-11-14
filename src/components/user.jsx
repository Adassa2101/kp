import React from "react";
import Qualities from "./qualities";
import BookMark from "./bookmark";
const User = ({
  _id,
  name,
  qualities,
  onDelete,
  onHandleIcon,
  profession,
  completedMeetings,
  rate,
  bookmarck,
}) => {
  return (
    <tr key={_id}>
       <td>{name}</td>
      <td>          
        {qualities.map((qualitiy) => (
          <Qualities key={qualitiy._id} {...qualitiy} />
        ))}          
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate}</td>             
      <td>
        <BookMark status={bookmarck} onClick={() => onHandleIcon(_id)} />
      </td>
      <td>             
        <button
          onClick={() => onDelete(_id)}
          className="btn bg-danger text-white btn-sm"
        >
          delete                  
        </button>
                
      </td>
    </tr>
  );
};

export default User;
