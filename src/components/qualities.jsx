import React from 'react';
const Qualities = ({quality, color,name, _id}) => {
    return ( 
        <span className={`badge bg-${color}`}>
        < Qualities key={_id} {...quality}/ >
        {name}
         </span>
        );             
};
 
export default Qualities;