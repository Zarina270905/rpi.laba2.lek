import { useState } from "react";
import { teachers } from "../data/teachers";
import TeacherCard from "../components/TeacherCard";

export default function TeachersPage({ onNavigate }) {
  const [query, setQuery] = useState("");
  const [genderFilter, setGenderFilter] = useState("all");

  const filtered = teachers.filter((t) => {
    const matchesQuery = t.name
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesGender =
      genderFilter === "all" || t.gender === genderFilter;
    return matchesQuery && matchesGender;
  });

  return (
    <div>
      <h1 className="page-title">Наши лекторы</h1>
      <p className="page-subtitle">
        Признанные специалисты в своих областях, готовые делиться опытом
        и знаниями.
      </p>

      {/* ============ ФИЛЬТРЫ ============ */}
      <div className="filters">
        <input
          type="text"
          className="search-input"
          placeholder="Поиск по ФИО..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className="gender-buttons">
          {[
            { key: "all", label: "Все" },
            { key: "male", label: "Мужчины" },
            { key: "female", label: "Женщины" },
          ].map((g) => (
            <button
              key={g.key}
              className={
                "gender-btn" +
                (genderFilter === g.key ? " gender-btn--active" : "")
              }
              onClick={() => setGenderFilter(g.key)}
            >
              {g.label}
            </button>
          ))}
        </div>
      </div>

      {/* ============ СЕТКА ============ */}
      {filtered.length === 0 ? (
        <p className="empty-state">По вашему запросу ничего не найдено.</p>
      ) : (
        <div className="teachers-grid">
          {filtered.map((t) => (
            <TeacherCard
              key={t.id}
              teacher={t}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      )}
    </div>
  );
}   