export default function AboutPage() {
  return (
    <div className="about-page">
      <h1 className="page-title">О нас</h1>

      <p className="about-lead">
        Наша учебная платформа соединяет компании, образовательные учреждения
        и НКО с профессиональными лекторами, спикерами и тренерами.
      </p>

      <div className="about-grid">
        <div className="about-card">
          <div className="about-num">01</div>
          <h3>Подбор экспертов</h3>
          <p>
            Мы упрощаем процесс подбора лекторов под конкретные задачи
            компании или учебного заведения.
          </p>
        </div>

        <div className="about-card">
          <div className="about-num">02</div>
          <h3>Бронирование</h3>
          <p>
            Организация лекций, мастер-классов и тренингов в один клик —
            от выбора спикера до подтверждения даты.
          </p>
        </div>

        <div className="about-card">
          <div className="about-num">03</div>
          <h3>Вдохновляющие спикеры</h3>
          <p>
            Наши лекторы не просто делятся знаниями — они вдохновляют
            аудиторию и мотивируют на развитие.
          </p>
        </div>
      </div>

      <section className="about-mission">
        <h2>Наша миссия</h2>
        <p>
          Сделать качественное образование и экспертизу доступными для
          организаций любого масштаба — от небольших НКО до крупных
          корпораций.
        </p>
      </section>
    </div>
  );
}