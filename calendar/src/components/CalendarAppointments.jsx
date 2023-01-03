import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const CalendarAppointments = ({ value }) => {
  const [appointmentsToLocal, setAppointmentsToLocal] =
    useLocalStorage('appointments');
  const appointmentTimes = ['10:00', '12:00', '16:00', '18:00'];
  const [appointment, setAppointment] = useState(null);
  const [bookedAppointments, setBookedAppointments] = useState({});
  const day = value.clone().format('DD_MM_YYYY');

  const setNewAppointment = (time) => {
    if (!bookedAppointments[day]) {
      setBookedAppointments((prev) => {
        return { ...prev, [day]: { [time]: 1 } };
      });
      setAppointmentsToLocal(bookedAppointments);
      setAppointment(time);

      return;
    }

    if (!bookedAppointments[day]?.hasOwnProperty(time)) {
      setBookedAppointments((prev) => {
        return {
          ...prev,
          [day]: { ...bookedAppointments[day], [time]: 1 },
        };
      });
      setAppointmentsToLocal('appointments', bookedAppointments);
      setAppointment(time);
    }
  };

  return (
    <div className="mt-[17px]">
      <div className="grid grid-cols-2 gap-x-[10px] gap-y-[16px]">
        {appointmentTimes.map((time) => (
          <button
            onClick={() => setAppointment(time)}
            key={time}
            className={`${
              bookedAppointments[day]?.hasOwnProperty(time)
                ? 'booked-appointment'
                : 'free-appointment'
            }`}
            type="button"
          >
            {time} {bookedAppointments[day[time]]}
          </button>
        ))}
      </div>

      <h3 className="h-[27px] my-[17px] font-[18px] dark:text-white text-center text-[#414141]">
        {value.format('DD MMMM YYYY')} {appointment && appointment}
      </h3>

      <div className="h-[40px]">
        <button
          className={`${
            appointment
              ? ' bg-[#FF6633] text-white'
              : 'bg-[#F3F2F1] text-[#414141] pointer-events-none'
          } rounded-[4px] h-full w-full`}
          type="button"
          onClick={() => setNewAppointment(appointment)}
        >
          Підтвердити
        </button>
      </div>
    </div>
  );
};

export default CalendarAppointments;
