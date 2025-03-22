import { BrowserRouter as Router, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Form from "./components/Form";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/send_email" element={<Form />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
