import React from 'react';

const FindDate = ({prevMonth,nextMonth,now}) => {
    return (

            <div className="wrap_changeMonth">
                <button onClick={prevMonth} className="btn_changeMonth btn_changeMonth--less">&lt;</button>
                <span  className="changeMonth ">{now.format("MMMM")} {now.format("YYYY")}</span>
                <button onClick={nextMonth}  className="btn_changeMonth btn_changeMonth--more">&gt;</button>

            </div>


    );
};

export default FindDate;
