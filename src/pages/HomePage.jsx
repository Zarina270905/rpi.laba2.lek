import { partners } from "../data/partners";
import { teachers } from "../data/teachers";
import PartnerCard from "../components/PartnerCard";
import TeacherCard from "../components/TeacherCard";

export default function HomePage({ onNavigate }) {
  const featuredTeachers = teachers.slice(0, 3);

  return (
    <div className="home">
      {/* ============ HERO ============ */}
      <section className="section hero-section" id="top">
        <h1 className="hero-text">
          Наша учебная платформа соединяет компании, образовательные учреждения
          и НКО с&nbsp;профессиональными лекторами, спикерами и тренерами.
          Мы упрощаем процесс подбора, бронирования и организации лекций,
          помогая находить <strong>экспертов, которые не просто делятся знаниями,
          но и вдохновляют аудиторию</strong>.
        </h1>
      </section>

      {/* ============ БЛОК ЛЕКТОРОВ (теперь выше «О нас») ============ */}
      <section className="section teachers-promo">
        <div className="teachers-promo-img">
          <img src="/teachers/lecturer.jpg" alt="Лектор за кафедрой" />
        </div>
        <div className="teachers-promo-text">
          <h2>
            Наши лекторы — <em>признанные специалисты</em> в своих областях,
            готовые делиться опытом и знаниями.
          </h2>
          <button
            className="link-arrow"
            onClick={() => onNavigate("teachers")}
          >
            Найти лектора
          </button>
        </div>
      </section>

      {/* ============ О НАС ============ */}
      <section className="section about-anchor" id="about">
        <h2 className="section-title">О нас</h2>

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

        <div className="about-mission">
          <h2>Наша миссия</h2>
          <p>
            Сделать качественное образование и экспертизу доступными для
            организаций любого масштаба — от небольших НКО до крупных
            корпораций.
          </p>
        </div>
      </section>

      {/* ============ ПАРТНЁРЫ ============ */}
      <section className="section" id="partners">
        <h2 className="section-title">Партнёры</h2>
        <div className="partners-grid">
          {partners.map((p) => (
            <PartnerCard key={p.id} partner={p} />
          ))}
        </div>
      </section>

      {/* ============ ПРЕПОДАВАТЕЛИ (превью 3 карточки) ============ */}
      <section className="section">
        <div className="section-header-row">
          <h2 className="section-title">Лекторы</h2>
          <button
            className="link-arrow"
            onClick={() => onNavigate("teachers")}
          >
            Все лекторы →
          </button>
        </div>
        <div className="teachers-grid">
          {featuredTeachers.map((t) => (
            <TeacherCard
              key={t.id}
              teacher={t}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </section>
    </div>
  );
}