import { useState } from "react";
import { teachers } from "../data/teachers";
import "./RequestModal.css";

export default function RequestModal({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    discipline: "",
    comment: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Собираем все дисциплины из всех преподавателей (уникальные)
  const allDisciplines = Array.from(
    new Set(teachers.flatMap((t) => t.disciplines.map((d) => d.title)))
  ).sort();

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Укажите имя";
    if (!form.phone.trim()) {
      newErrors.phone = "Укажите телефон";
    } else if (!/^[\d\s\+\-\(\)]{10,}$/.test(form.phone)) {
      newErrors.phone = "Некорректный номер";
    }
    if (!form.email.trim()) {
      newErrors.email = "Укажите email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Некорректный email";
    }
    if (!form.discipline) newErrors.discipline = "Выберите дисциплину";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // Здесь могла бы быть отправка на сервер
    console.log("Заявка отправлена:", form);
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Закрыть"
        >
          ×
        </button>

        {submitted ? (
          <div className="modal-success">
            <div className="modal-success-icon">✓</div>
            <h3>Заявка отправлена!</h3>
            <p>
              Мы свяжемся с вами в ближайшее время - обычно в течение
              1 рабочего дня.
            </p>
            <button className="btn-primary" onClick={onClose}>
              Закрыть
            </button>
          </div>
        ) : (
          <>
            <h2 className="modal-title">Оставить заявку</h2>
            <p className="modal-subtitle">
              Заполните форму, и мы поможем подобрать лектора под вашу
              задачу.
            </p>

            <form className="modal-form" onSubmit={handleSubmit}>
              <div className="form-field">
                <label>Ваше имя *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="Иван Иванов"
                  className={errors.name ? "input-error" : ""}
                />
                {errors.name && (
                  <span className="form-error">{errors.name}</span>
                )}
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label>Телефон *</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="+7 (___) ___-__-__"
                    className={errors.phone ? "input-error" : ""}
                  />
                  {errors.phone && (
                    <span className="form-error">{errors.phone}</span>
                  )}
                </div>

                <div className="form-field">
                  <label>Email *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="you@example.com"
                    className={errors.email ? "input-error" : ""}
                  />
                  {errors.email && (
                    <span className="form-error">{errors.email}</span>
                  )}
                </div>
              </div>

              <div className="form-field">
                <label>Интересующая дисциплина *</label>
                <select
                  value={form.discipline}
                  onChange={(e) =>
                    handleChange("discipline", e.target.value)
                  }
                  className={errors.discipline ? "input-error" : ""}
                >
                  <option value="">— Выберите дисциплину —</option>
                  {allDisciplines.map((d, i) => (
                    <option key={i} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
                {errors.discipline && (
                  <span className="form-error">{errors.discipline}</span>
                )}
              </div>

              <div className="form-field">
                <label>Комментарий</label>
                <textarea
                  value={form.comment}
                  onChange={(e) => handleChange("comment", e.target.value)}
                  placeholder="Кратко опишите задачу: формат, количество занятий, сроки..."
                  rows={3}
                />
              </div>

              <button type="submit" className="btn-primary btn-full">
                Отправить заявку
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}