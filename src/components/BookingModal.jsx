import { useState } from "react";
import "./BookingModal.css";

export default function BookingModal({ teacher, onClose }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    tariff: teacher.tariffs[0]?.name || "",
    date: "",
    comment: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
    if (errors[field]) setErrors({ ...errors, [field]: "" });
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Укажите имя";
    if (!form.phone.trim()) e.phone = "Укажите телефон";
    else if (!/^[\d\s\+\-\(\)]{10,}$/.test(form.phone))
      e.phone = "Некорректный номер";
    if (!form.email.trim()) e.email = "Укажите email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Некорректный email";
    if (!form.tariff) e.tariff = "Выберите тариф";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    console.log("Заявка на занятие:", { teacher: teacher.name, ...form });
    setSubmitted(true);
  };

  const initials = teacher.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal modal--booking" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Закрыть">
          ×
        </button>

        {submitted ? (
          <div className="modal-success">
            <div className="modal-success-icon">✓</div>
            <h3>Заявка отправлена!</h3>
            <p>
              Мы свяжемся с вами в течение 1 рабочего дня, чтобы согласовать
              дату и формат занятия с{" "}
              <strong>{teacher.name}</strong>.
            </p>
            <button className="btn-primary" onClick={onClose}>
              Закрыть
            </button>
          </div>
        ) : (
          <>
            <h2 className="modal-title">Записаться на занятие</h2>
            <p className="modal-subtitle">
              Оставьте заявку — мы согласуем удобное время и формат.
            </p>

            {/* Карточка лектора */}
            <div className="booking-teacher">
              <div className="booking-teacher-photo">
                {teacher.photo ? (
                  <img src={teacher.photo} alt={teacher.name} />
                ) : (
                  <span className="booking-teacher-initials">{initials}</span>
                )}
              </div>
              <div className="booking-teacher-info">
                <div className="booking-teacher-name">{teacher.name}</div>
                <div className="booking-teacher-meta">
                  {teacher.degree !== "нет" && (
                    <span>{teacher.degree} • </span>
                  )}
                  Стаж {teacher.experience} лет
                </div>
                <div className="booking-teacher-education">
                  {teacher.education}
                </div>
              </div>
            </div>

            {/* Форма */}
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
                <label>Тариф *</label>
                <select
                  value={form.tariff}
                  onChange={(e) => handleChange("tariff", e.target.value)}
                  className={errors.tariff ? "input-error" : ""}
                >
                  <option value="">— Выберите тариф —</option>
                  {teacher.tariffs.map((t, i) => (
                    <option key={i} value={t.name}>
                      {t.name} — {t.price.toLocaleString("ru-RU")} ₽
                    </option>
                  ))}
                </select>
                {errors.tariff && (
                  <span className="form-error">{errors.tariff}</span>
                )}
              </div>

              <div className="form-field">
                <label>Желаемая дата (необязательно)</label>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => handleChange("date", e.target.value)}
                />
              </div>

              <div className="form-field">
                <label>Комментарий</label>
                <textarea
                  value={form.comment}
                  onChange={(e) => handleChange("comment", e.target.value)}
                  placeholder="Опишите задачу: цель занятий, уровень подготовки, удобное время..."
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