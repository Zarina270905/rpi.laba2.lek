import { useState, useDeferredValue, useMemo } from "react";
import { teachers } from "../data/teachers";
import TeacherCard from "../components/TeacherCard";

export default function TeachersPage({ onNavigate }) {
  const [query, setQuery] = useState("");
  const [genderFilter, setGenderFilter] = useState("all");

  const deferredQuery = useDeferredValue(query);

  const isStale = query !== deferredQuery;

  const filtered = useMemo(() => {
    return teachers.filter((t) => {
      const matchesQuery = t.name
        .toLowerCase()
        .includes(deferredQuery.toLowerCase());
      const matchesGender =
        genderFilter === "all" || t.gender === genderFilter;
      return matchesQuery && matchesGender;
    });
  }, [deferredQuery, genderFilter]);

  return (
    <div>
      <h1 className="page-title">Наши лекторы</h1>
      <p className="page-subtitle">
        Признанные специалисты в своих областях, готовые делиться опытом
        и знаниями.
      </p>

      <div className="filters">
        <div className="search-wrapper">
          <input
            type="text"
            className="search-input"
            placeholder="Поиск по ФИО..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {isStale && (
            <span className="search-stale">Обновление…</span>
          )}
        </div>

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

      {filtered.length === 0 ? (
        <p className="empty-state">По вашему запросу ничего не найдено.</p>
      ) : (
        <div
          className={"teachers-grid" + (isStale ? " teachers-grid--stale" : "")}
        >
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