import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import './DatePicker.css'
import 'react-datepicker/dist/react-datepicker.css';

interface ISelectedDate {
    startDate: Date | null;
    endDate: Date | null;
}

export const DatePickerComponent = () => {
    const [selectedDate, setSelectedDate] = useState<ISelectedDate>({
        startDate: new Date(),
        endDate: new Date(),
    });

    const handleDateChange = (dates: [Date | null, Date | null]) => {
        setSelectedDate({
            startDate: dates[0],
            endDate: dates[1],
        });
    };

    const currentDate = new Date();

    return (
        <DatePicker
            className="custom-datepicker"
            calendarClassName="custom-calendar"
            selectsRange
            startDate={selectedDate.startDate}
            endDate={selectedDate.endDate}
            onChange={handleDateChange}
            minDate={currentDate}
            monthsShown={2}
        />
    );
};

