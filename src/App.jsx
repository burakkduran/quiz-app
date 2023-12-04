import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Introduce from "./pages/Introduce";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Introduce/>} />
          <Route path="/quiz/:category/:difficulty/:amount" element={<Quiz/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
