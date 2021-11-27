import React from "react";
import PropTypes from "prop-types";
const SearchStatus = ({ length }) => {
    const renderPhrase = () => {
        if (length === 0) return "Никто с тобой не тусанёт";
        if (length >= 2 && length <= 4) return `${length} человека тусанут с тобой сегодня`;
        return `${length} человек тусанёт с тобой сегодня`;
    };

    const getBageClasses = () => {
        let classes = "badge m-2 bg-";
        classes += length === 0 ? "danger" : "primary";
        return classes;
    };
    return (
        <>
            <span style={{ fontSize: "18px" }} className={getBageClasses()}>
                {renderPhrase()}
            </span>
        </>
    );
};

SearchStatus.propTypes = {
    length: PropTypes.number
};
export default SearchStatus;
