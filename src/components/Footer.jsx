export default function Footer({ onNavigate }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col">
          <div className="footer-logo">УчПлатформа</div>
          <p className="footer-text">
            Платформа, которая соединяет компании, образовательные учреждения
            и НКО с профессиональными лекторами.
          </p>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Навигация</h4>
          <ul className="footer-list">
            <li>
              <button className="footer-link" onClick={() => onNavigate("home")}>
                Главная
              </button>
            </li>
            <li>
              <button className="footer-link" onClick={() => onNavigate("partners")}>
                Партнёры
              </button>
            </li>
            <li>
              <button className="footer-link" onClick={() => onNavigate("about")}>
                О нас
              </button>
            </li>
            <li>
              <button className="footer-link" onClick={() => onNavigate("teachers")}>
                Лекторы
              </button>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Контакты</h4>
          <ul className="footer-list">
            <li className="footer-text">info@eduplatform.ru</li>
            <li className="footer-text">+7 (495) 000-00-00</li>
            <li className="footer-text">Москва, ул. Примерная, 1</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © {year} УчПлатформа. Все права защищены.
      </div>
    </footer>
  );
}