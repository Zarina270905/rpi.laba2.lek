export default function TeacherCard({ teacher, onNavigate }) {
  const initials = teacher.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <div className="teacher-card" onClick={() => onNavigate("teacher", teacher.id)}>
      <div className="teacher-photo">
        {teacher.photo ? (
          <img src={teacher.photo} alt={teacher.name} />
        ) : (
          <div className="photo-placeholder">{initials}</div>
        )}
      </div>

      <div className="teacher-accent-line" />

      <h3 className="teacher-name">{teacher.name}</h3>

      <p className="teacher-meta">
        {teacher.degree !== "нет" && <span>{teacher.degree} • </span>}
        Стаж {teacher.experience} лет
      </p>

      <p className="teacher-education">{teacher.education}</p>

      <div className="teacher-disciplines">
        {teacher.disciplines.slice(0, 2).map((d, i) => (
          <span key={i} className="discipline-tag">
            {d.title}
          </span>
        ))}
        {teacher.disciplines.length > 2 && (
          <span className="discipline-tag discipline-tag--more">
            +{teacher.disciplines.length - 2}
          </span>
        )}
      </div>

      <button className="btn-details" onClick={(e) => { e.stopPropagation(); onNavigate("teacher", teacher.id); }}>
        Подробнее →
      </button>
    </div>
  );
}