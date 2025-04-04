import { BrowserRouter as Router, Route, Routes } from "react-router";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import "./App.css";
import { useState } from "react";
import Home from "./pages/Home";
import Form from "./pages/Form";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState("");

  return (
    <>
      <Router>
        <SideBar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          modalImage={modalImage}
          setModalImage={setModalImage}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                modalImage={modalImage}
                setModalImage={setModalImage}
              />
            }
          />
          <Route
            path="/send_email"
            element={
              <Form
                setIsSidebarOpen={setIsSidebarOpen}
                isSidebarOpen={isSidebarOpen}
              />
            }
          />
        </Routes>
        <Footer isSidebarOpen={isSidebarOpen} />
      </Router>
    </>
  );
}

export default App;
