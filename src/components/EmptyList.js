import React from "react";
import MdBook from 'react-ionicons/lib/MdBook'

const EmptyList = () => {
    return(
        <div className="empty-list">
            <MdBook fontSize="60px" color="#dddddd"/>
            <h2>Not Available</h2>
        </div>
    )
}
export default EmptyList;