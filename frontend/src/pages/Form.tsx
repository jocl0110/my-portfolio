import { useState } from "react";
import axios from "axios";
import "../App.css";
import ToggleBtn from "../components/ToggleBtn";
import { SideBarStateProps } from "../App";

function Form({ isSidebarOpen, setIsSidebarOpen }: SideBarStateProps) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios.post("api/send_email", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setMessage(response.data.message);

      setTimeout(() => {
        setMessage("");
      }, 3000);
      setIsLoading(false);
    } catch (error) {
      console.log(error);

      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <main className={isSidebarOpen ? "" : "sidebar-closed"}>
      <ToggleBtn
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="first_name">First Name:</label>
          <input
            value={formData.first_name}
            onChange={handleChange}
            type="text"
            name="first_name"
            id="first_name"
          />
        </div>
        <div>
          <label htmlFor="last_name">Last Name:</label>
          <input
            value={formData.last_name}
            onChange={handleChange}
            type="text"
            name="last_name"
            id="last_name"
          />
        </div>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input
            value={formData.email}
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="subject">Subject:</label>
          <input
            value={formData.subject}
            onChange={handleChange}
            type="text"
            name="subject"
            id="subject"
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            value={formData.message}
            onChange={handleChange}
            name="message"
            id="message"
            rows={5}
          ></textarea>
        </div>
        <button disabled={isLoading}>Submit</button>
      </form>
      {isLoading && (
        <div className="sk-fading-circle">
          <div className="sk-circle1 sk-circle"></div>
          <div className="sk-circle2 sk-circle"></div>
          <div className="sk-circle3 sk-circle"></div>
          <div className="sk-circle4 sk-circle"></div>
          <div className="sk-circle5 sk-circle"></div>
          <div className="sk-circle6 sk-circle"></div>
          <div className="sk-circle7 sk-circle"></div>
          <div className="sk-circle8 sk-circle"></div>
          <div className="sk-circle9 sk-circle"></div>
          <div className="sk-circle10 sk-circle"></div>
          <div className="sk-circle11 sk-circle"></div>
          <div className="sk-circle12 sk-circle"></div>
        </div>
      )}
      {message && <p>{message}</p>}
    </main>
  );
}

export default Form;
