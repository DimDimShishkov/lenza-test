import { useEffect, useState } from "react";
import { ISystemMessage } from "../../../interface/page";
import "./SystemMessage.scss";

/**
 *
 * Модуль с датой сообщения
 */

export const SystemMessage = ({ date }: ISystemMessage) => {
  const [currentDate, setCurrentDate] = useState<string>();

  useEffect(() => {
    const newTime = new Date(date);
    let year = newTime.getFullYear();
    let month = newTime.getMonth() + 1;
    let day = newTime.getDate();
    const resultDate = [day, month, year];
    const resultDateString = resultDate
      .map((x) => (x <= 9 ? "0" + x : x))
      .join(".");
    setCurrentDate(resultDateString);
  }, [date]);

  return (
    <div className="system-message">
      <p className="system-message__text">{currentDate}</p>
    </div>
  );
};
