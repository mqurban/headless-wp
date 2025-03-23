import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css'; 
import Home from "./pages/Home";
import SinglePost from "./pages/SinglePost";
import Navbar from "./components/Navbar";

function App() {
  return(
    <Router>
      <div className="app">
        <Navbar />
        <main className="py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<SinglePost />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;