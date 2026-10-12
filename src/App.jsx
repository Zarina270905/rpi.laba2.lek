import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PartnersPage from "./pages/PartnersPage";
import AboutPage from "./pages/AboutPage";
import TeachersPage from "./pages/TeachersPage";
import TeacherDetailPage from "./pages/TeacherDetailPage";
import "./styles/main.css";

export default function App() {
  const [page, setPage] = useState("home");
  const [selectedTeacherId, setSelectedTeacherId] = useState(null);

  const navigate = (target, id = null) => {
    setPage(target);
    if (id !== null) setSelectedTeacherId(id);
    window.scrollTo(0, 0);
  };

  // Прокрутка к секции на главной
  const scrollToSection = (sectionId) => {
    // Если мы не на главной — сначала переходим на неё
    if (page !== "home") {
      setPage("home");
      // Ждём, пока HomePage отрисуется, потом скроллим
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const renderPage = () => {
    switch (page) {
      case "home":
        return <HomePage onNavigate={navigate} />;
      case "partners":
        return <PartnersPage onNavigate={navigate} />;
      case "about":
        return <AboutPage />;
      case "teachers":
        return <TeachersPage onNavigate={navigate} />;
      case "teacher":
        return (
          <TeacherDetailPage id={selectedTeacherId} onNavigate={navigate} />
        );
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <div className="app">
      <Header
        currentPage={page}
        onNavigate={navigate}
        onScrollTo={scrollToSection}
      />
      <main className="main-content">{renderPage()}</main>
      <Footer onNavigate={navigate} />
    </div>
  );
}