/* eslint-disable no-trailing-spaces */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable indent */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import PropTypes from "prop-types";
import Qualities from "./qualities";
import BookMark from "./bookmark";
const User = ({
    _id,
    name,
    qualities,
    profession,
    completedMeetings,
    rate,
    onDelete,
    bookmark,
    onHandleIcon
}) => {
    return (
        // eslint-disable-next-line no-trailing-spaces
        <tr key={_id}> 
            // eslint-disable-next-line indent
            // eslint-disable-next-line indent
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
                <BookMark status={bookmark} onClick={() => onHandleIcon(_id)} />
            </td>
            <td>
                             
                <button
                    onClick={() => onDelete(_id)}
                    className="btn bg-danger text-white btn-sm"
                >
                    {" "}
                    delete                  
                </button>
                        
            </td>
        </tr>
    );
};
User.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    qualities: PropTypes.array,
    profession: PropTypes.object.isRequired,
    completedMeetings: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
    bookmark: PropTypes.bool,
    onHandleIcon: PropTypes.func.isRequired
};
export default User;
