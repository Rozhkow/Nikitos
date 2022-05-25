import Home from "./Home/Home";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import America from "./Pages/America/America";
import CommingSoon from "./Pages/CommingSoon/CommingSoon";
import NotFound from "./NotFound/NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="america" element={<America />} />
          <Route path="europe" element={<CommingSoon />} />
          <Route path="asia" element={<CommingSoon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
