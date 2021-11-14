import React from 'react';
const BookMark = ({status, ...rest}) => {
    return (
        <>
        status ? <i className="bi bi-bookmark"></i> :
        <i className="bi bi-bookmark-fill"></i>
       </>
     );
}
 
export default BookMark;