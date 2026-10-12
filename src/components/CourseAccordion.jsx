import { useState } from "react";

export default function CourseAccordion({ course, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={"accordion" + (open ? " accordion--open" : "")}>
      <button className="accordion-header" onClick={() => setOpen(!open)}>
        <div className="accordion-title">
          <h3>{course.title}</h3>
          <p className="accordion-description">{course.description}</p>
        </div>
        <span className="accordion-icon">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <ol className="accordion-body">
          {course.topics.map((topic, i) => (
            <li key={i} className="accordion-topic">
              {topic}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}