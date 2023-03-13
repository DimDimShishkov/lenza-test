import React, { useEffect, useState } from "react";
import { PageIndex } from "../../pages/index";
import { MobileWight } from "../../utils/wrapper";
import "./App.scss";

/**
 *
 *  Главная страница
 */

export default function App() {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    // слушатель на изменение ширины экрана
    handlePageWidth();
    window.addEventListener("resize", handlePageWidth);
    return () => window.removeEventListener("resize", handlePageWidth);
  }, []);

  // расчёт ширины экрана
  let handlePageWidth = () => {
    let resizePageWidth = document.documentElement.scrollWidth;
    resizePageWidth > MobileWight ? setMobile(false) : setMobile(true);
  };

  return (
    <div className={`page ${isMobile ? "page_blocked" : ""}`}>
      <PageIndex />
      {isMobile && (
        <div className="page__info">
          <p className="page__text">
            ПРОСТИТЕ! НО&nbsp;ДЛЯ МОБИЛЬНЫХ ТЕЛЕФОНОВ У&nbsp;НАС ЕСТЬ МОБИЛЬНОЕ
            ПРИЛОЖЕНИЕ
          </p>
        </div>
      )}
    </div>
  );
}
