import { useState } from "react";
import RequestModal from "./RequestModal";

export default function Header({ currentPage, onNavigate, onScrollTo }) {
  const [modalOpen, setModalOpen] = useState(false);

  // type: "page" — переход на страницу; "anchor" — скролл к секции
  const navItems = [
    { key: "home", label: "Главная", type: "page" },
    { key: "partners", label: "Партнёры", type: "anchor", target: "partners" },
    { key: "about", label: "О нас", type: "anchor", target: "about" },
    { key: "teachers", label: "Лекторы", type: "page" },
  ];

  const handleNavClick = (item) => {
    if (item.type === "anchor") {
      onScrollTo(item.target);
    } else {
      onNavigate(item.key);
    }
  };

  const isActive = (item) => {
    if (item.type === "anchor") return false; // якоря не подсвечиваем
    if (item.key === "teachers" && currentPage === "teacher") return true;
    return currentPage === item.key;
  };

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <div
            className="logo"
            onClick={() => onNavigate("home")}
            role="button"
            tabIndex={0}
          >
            Уч<span className="logo-accent">Платформа</span>
          </div>

          <nav className="nav">
            {navItems.map((item) => (
              <button
                key={item.key}
                className={
                  "nav-link" + (isActive(item) ? " nav-link--active" : "")
                }
                onClick={() => handleNavClick(item)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="header-actions">
            <button
              className="btn-request"
              onClick={() => setModalOpen(true)}
            >
              Оставить заявку
            </button>
            <button
              className="btn-login"
              onClick={() => alert("Форма входа в разработке")}
            >
              Войти
            </button>
          </div>
        </div>
      </header>

      {modalOpen && <RequestModal onClose={() => setModalOpen(false)} />}
    </>
  );
}