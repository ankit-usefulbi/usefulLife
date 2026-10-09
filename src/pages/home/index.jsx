import Header from "../../components/header";
import Footer from "../../components/footer";
import HomeView from "../../components/home";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const handleBookAppointment = () => {
    navigate("/booking");
  };

  return (
    <div
      className={`min-h-screen bg-slate-50 text-slate-900 transition-colors duration-200`}
    >
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-60"
        aria-hidden="true"
      >
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-teal-200/30 blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-emerald-100/50 blur-3xl" />
      </div>

      <main id="main-content" className="mx-auto max-w-7xl" tabIndex={-1}>
        <HomeView onBookAppointment={handleBookAppointment} />
      </main>
    </div>
  );
}

export default HomePage;
