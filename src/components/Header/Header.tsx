import chatLogo from "../../images/Chat.svg";
import { IHeader } from "../../interface/page";
import "./Header.scss";

/**
 *
 * Модуль с хедером
 */

export const Header = ({ projectName }: IHeader) => {
  return (
    <header className="header">
      <img src={chatLogo} alt="chatLogo" className="header__image" />
      <p className="header__text">{projectName}</p>
    </header>
  );
};
