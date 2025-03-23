import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HOme from "./pages/Home";
import SinglePost from "./pages/SinglePost";
import Navbar from "./components/Navbar";

function App() {
  return(
    <Router>
       <Navbar />
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/post/:id" element={<SinglePost />}  />
        </Routes>
    </Router>
  )
};


export default App;