import { useState } from "react";
import { teachers } from "../data/teachers";
import CourseAccordion from "../components/CourseAccordion";
import TariffCard from "../components/TariffCard";
import BookingModal from "../components/BookingModal";

export default function TeacherDetailPage({ id, onNavigate }) {
  const [modalOpen, setModalOpen] = useState(false);
  const teacher = teachers.find((t) => t.id === id);

  if (!teacher) {
    return (
      <div>
        <p>Преподаватель не найден.</p>
        <button className="link-arrow" onClick={() => onNavigate("teachers")}>
          ← Вернуться к списку
        </button>
      </div>
    );
  }

  const initials = teacher.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <>
      <div className="teacher-detail">
        <button className="back-link" onClick={() => onNavigate("teachers")}>
          ← Все лекторы
        </button>

        {/* ============ ВЕРХНИЙ БЛОК ============ */}
        <div className="teacher-hero">
          <div className="teacher-hero-photo">
            {teacher.photo ? (
              <img src={teacher.photo} alt={teacher.name} />
            ) : (
              <div className="photo-placeholder">{initials}</div>
            )}
          </div>

          <div className="teacher-hero-info">
            <h1 className="teacher-hero-name">{teacher.name}</h1>

            <div className="teacher-hero-meta">
              {teacher.degree !== "нет" && (
                <span className="meta-chip">{teacher.degree}</span>
              )}
              <span className="meta-chip">Стаж {teacher.experience} лет</span>
            </div>

            <p className="teacher-hero-education">
              <strong>Образование:</strong> {teacher.education}
            </p>

            <button
              className="btn-primary"
              onClick={() => setModalOpen(true)}
            >
              Записаться на занятие
            </button>
          </div>
        </div>

        {/* ============ ДИСЦИПЛИНЫ ============ */}
        <section className="section">
          <h2 className="section-title">Преподаваемые дисциплины</h2>
          {teacher.disciplines.map((course, i) => (
            <CourseAccordion
              key={i}
              course={course}
              defaultOpen={i === 0}
            />
          ))}
        </section>

        {/* ============ ТАРИФЫ ============ */}
        <section className="section">
          <h2 className="section-title">Тарифы</h2>
          <div className="tariffs-grid">
            {teacher.tariffs.map((t, i) => (
              <TariffCard key={i} tariff={t} accent={i === 1} />
            ))}
          </div>
        </section>
      </div>

      {modalOpen && (
        <BookingModal
          teacher={teacher}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}