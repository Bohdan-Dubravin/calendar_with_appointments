import moment from 'moment';
import 'moment/dist/locale/uk';
import { useEffect, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import buildCalendar from '../utils/buildCalendar';
import CalendarAppointments from './CalendarAppointments';
import CalendarHeader from './CalendarHeader';

const Calendar = () => {
  const [value, setValue] = useState(moment().locale('uk'));
  const [calendar, setCalendar] = useState([]);
  const [appointments, setAppointments] = useLocalStorage();
  const localStorageAppointments = localStorage.getItem('appointments');
  console.log(localStorageAppointments);
  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);
  console.log(value);
  const dayStyles = (day) => {
    if (!day.isSame(value, 'month')) return 'not-display';
    if (day.isBefore(new Date(), 'day')) return 'before-day';
    if (value.isSame(day, 'day')) return 'selected';
    if (value.isSame(day, 'day')) return 'appointment';
  };

  return (
    <div className="p-[20px] bg-white dark:bg-gray-800 shadow-[4px 8px 16px rgba(0, 0, 0, 0.1)] max-w-[fit-content] rounded-[4px]">
      <div className="flex flex-col justify-center items-center w-full">
        <CalendarHeader value={value} setValue={setValue} />
        {calendar.map((week, i) => (
          <div key={i} className="flex w-full justify-between ">
            {week.map((day) => (
              <div
                key={day.format('D')}
                className="relative w-[27px] h-[27px] mb-[16px] mr-[22px] last:mr-0"
              >
                <p
                  onClick={() => setValue(day)}
                  className={`text-[#8F8F8F] dark:text-white
                   text-center text-[18px] cursor-pointer ${dayStyles(day)}`}
                >
                  {day.format('D')}
                </p>
              </div>
            ))}
          </div>
        ))}
        <CalendarAppointments value={value} />
      </div>
    </div>
  );
};

export default Calendar;
