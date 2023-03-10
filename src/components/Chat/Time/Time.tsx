import { useEffect, useState } from "react";
import { ITime } from "../../../interface/page";
import "./Time.scss";

/**
 *
 * Модуль с временем отправки сообщения
 */

export const Time = ({ My, created_at }: ITime) => {
  const [currentTime, setCurrentTime] = useState<string>();

  useEffect(() => {
    const date = new Date(created_at);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const resultTime = [hours, minutes];
    const resultTimeString = resultTime
      .map((x) => (x <= 9 ? "0" + x : x))
      .join(":");
    setCurrentTime(resultTimeString);
  }, [created_at]);

  return (
    <div className="time">
      <p className="time__value">{currentTime}</p>
      {My && <span className="message__read"></span>}
    </div>
  );
};
