import React from "react";
import { useEffect, useState } from "react";
import { IMessage, IChat } from "../../interface/page";
import "./Chat.scss";
import { Message } from "./Message/Message";
import { NewMessage } from "./NewMessage/NewMessage";
import { SystemMessage } from "./SystemMessage/SystemMessage";

/**
 *
 *  Модуль чата
 */

export const Chat = ({ messagesArr }: IChat) => {
  const [oldMessages, setOldMessages] = useState<IMessage[]>([]);
  const [newMessages, setNewMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    setOldMessages(
      messagesArr
        .filter((message) => message.is_new === false)
        .sort((a, b) => a.created_at - b.created_at)
    );
    setNewMessages(
      messagesArr
        .filter((message) => message.is_new === true)
        .sort((a, b) => a.created_at - b.created_at)
    );
  }, [messagesArr]);

  function handleDateItem(date: number) {
    let resultDate = new Date(date);
    let year = resultDate.getFullYear();
    let month = resultDate.getMonth() + 1;
    let day = resultDate.getDate();
    const resultArr = [day, month, year];
    const resultDateString = resultArr
      .map((x) => (x <= 9 ? "0" + x : x))
      .join(".");
    return resultDateString;
  }

  return (
    <div className="chat">
      {!!oldMessages.length && (
        <SystemMessage date={oldMessages[oldMessages.length - 1].created_at} />
      )}
      {oldMessages?.map((message: IMessage, i: number) => (
        <React.Fragment key={message.id}>
          <Message
            key={message.id}
            created_at={message.created_at}
            id={message.id}
            is_new={message.is_new}
            message={message.message}
            user={message.user}
          />
          {i !== 0 &&
            handleDateItem(oldMessages[i]?.created_at) !==
              handleDateItem(oldMessages[i - 1].created_at) && (
              <SystemMessage date={oldMessages[i].created_at} />
            )}
        </React.Fragment>
      ))}
      {!!newMessages.length && <NewMessage />}
      {newMessages?.map((message: IMessage) => (
        <Message
          key={message.id}
          created_at={message.created_at}
          id={message.id}
          is_new={message.is_new}
          message={message.message}
          user={message.user}
        />
      ))}
    </div>
  );
};
