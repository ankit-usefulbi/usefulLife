import { Route, Routes, useNavigate } from "react-router-dom";
import BookingPage from "../pages/booking";
import HomePage from "../pages/home";
import Header from "../components/header";
import Footer from "../components/footer";

const PrivateRoutes = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative z-10 min-h-screen px-4 py-4 sm:px-6 lg:px-8">
        <Header onNavigate={() => navigate("/booking")} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
        <Footer onNavigate={() => navigate("/booking")} />
      </div>
    </>
  );
};
export default PrivateRoutes;
