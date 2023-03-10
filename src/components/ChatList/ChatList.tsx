import { IChatItem, IChatList } from "../../interface/page";
import { ChatItemList } from "./ChatItemList/ChatItemList";
import "./ChatList.scss";

/**
 *
 * Модуль со списками чатов
 */

export const ChatList = ({ chatsArr, handleUploadMessages }: IChatList) => {
  return (
    <div className="chat-list">
      <div className="chat-list__header">
        <p className="chat-list__text">All chats</p>
      </div>
      <div className="chat-list__body">
        {chatsArr?.map((item: IChatItem) => (
          <ChatItemList
            key={item.id}
            title={item.title}
            avatar={item.avatar}
            id={item.id}
            last_message={item.last_message}
            count_unread={item.count_unread}
            handleUploadMessages={handleUploadMessages}
          />
        ))}
      </div>
    </div>
  );
};
