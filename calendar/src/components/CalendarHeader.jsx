import ArrowIcon from '../assets/arrow.svg';

import DarkModeToggler from './DarkModeToggler';

const CalendarHeader = ({ value, setValue }) => {
  const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];
  const prevMonth = () => {
    return value.clone().subtract(1, 'month');
  };

  const nextMonth = () => {
    return value.clone().add(1, 'month');
  };

  return (
    <div className="w-full mb-4">
      <div className="w-[29px] ml-auto">
        <DarkModeToggler />
      </div>
      <div className="flex my-[24px] items-center">
        <h2 className="first-letter:uppercase font-[800] flex-1 dark:text-white">
          {value.format('MMMM YYYY')}
        </h2>
        <button
          className="bg-[#F3F2F1] rounded-[4px] w-[32px] h-[32px] mr-[16px]"
          onClick={() => setValue(prevMonth)}
        >
          <img className="mx-auto" src={ArrowIcon} alt="prev-btn" />
        </button>
        <button
          className="bg-[#F3F2F1] rounded-[4px] w-[32px] h-[32px]"
          onClick={() => setValue(nextMonth)}
        >
          <img className="rotate-180 mx-auto" src={ArrowIcon} alt="next-btn" />
        </button>
      </div>
      <div className="flex justify-between text-center">
        {weekDays.map((day) => (
          <div className="text-[18px] text-[#414141] dark:text-white" key={day}>
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarHeader;
