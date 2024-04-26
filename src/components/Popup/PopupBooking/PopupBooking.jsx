import { svgIcons } from '../../../data/svgIcons';
import { SVGRender } from '../../SVGRender/SVGRender';
import style from './PopupBooking.module.css';
import { useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const PopupBooking = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const dateInputRef = useRef(null);
  const MAX_DATE = 5;

  const onChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    if (start && end) {
      dateInputRef.current.value = `${start.toLocaleDateString()} - ${end.toLocaleDateString()}`;
    } else if (start) {
      dateInputRef.current.value = start.toLocaleDateString();
    } else {
      dateInputRef.current.value = '';
    }
    setShowCalendar(false);
  };

  const handleClick = () => {
    setShowCalendar(true);
  };

  const onClickOutside = () => {
    setShowCalendar(false);
  };

  return (
    <>
      <form className={style.bookingForm}>
        <h3 className={style.bookingHeader3}>Book your campervan now</h3>
        <p className={style.bookingText}>
          Stay connected! We are always ready to help you.
        </p>
        <input
          type="text"
          placeholder="Name"
          className={style.bookingName}
          required
        ></input>
        <input
          type="email"
          placeholder="Email"
          className={style.bookingEmail}
          required
        ></input>
        <div className={style.bookingCalendarWrapper}>
          <input
            type="text"
            placeholder="Booking date"
            name="rentdate"
            ref={dateInputRef}
            onClick={handleClick}
            className={style.bookingCalendar}
            required
          ></input>
          <SVGRender
            className={style.bookingCalendarIcon}
            svgString={svgIcons.calendar.svgIcon}
            onClick={handleClick}
          />
          {showCalendar && (
            <DatePicker
              calendarClassName={`${style.bookingCalendarTabel}`}
              selected={startDate}
              onChange={onChange}
              minDate={new Date()}
              maxDate={new Date().getMonth + MAX_DATE}
              startDate={startDate}
              endDate={endDate}
              onClickOutside={onClickOutside}
              selectsRange
              inline
              showDisabledMonthNavigation
            />
          )}
        </div>
        <textarea
          placeholder="Comment"
          className={style.bookingComments}
        ></textarea>
        <button type="submit" className={style.bookingButton}>
          Submit
        </button>
      </form>
    </>
  );
};
