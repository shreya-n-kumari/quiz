import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Footer from "./component/Footer";
import Slide from "./component/Slide";
import QuizReady from "./component/QuizReady";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Ques from "./component/Ques";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Slide" element={<Slide />} /> */}
        <Route path="/quiz-ready" element={<QuizReady />} />
        <Route path="/questions" element={<Ques />} />
      </Routes>

      <Footer />
    </Router>
    </>
  );
}

export default App;
