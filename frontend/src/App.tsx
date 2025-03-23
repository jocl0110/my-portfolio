import { BrowserRouter as Router, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Form from "./components/Form";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import "./App.css";
import React, { SetStateAction, useState } from "react";

export interface SideBarStateProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen?: React.Dispatch<SetStateAction<boolean>>;
}

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  return (
    <>
      <Router>
        <SideBar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
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
