import { useState } from "react";
import axios from "axios";
import "../App.css";
import ToggleBtn from "../components/ToggleBtn";
import { SideBarStateProps } from "../App";
import { IoIosSend } from "react-icons/io";

function Form({ isSidebarOpen, setIsSidebarOpen }: SideBarStateProps) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [message, setMessage] = useState({
    success: false,
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const apiUrl = import.meta.env.VITE_API_URL || '';
      const url = apiUrl ? `${apiUrl}/api/send_email` : '/api/send_email';
      console.log('Sending request to:', url);
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      });
      console.log(response);
      setMessage({
        success: response.data.success,
        message: response.data.message,
      });
    } catch (error) {
      const axiosError = error as { response?: { data?: { message?: string } } };
      console.log(error);

      setMessage({
        success: false,
        message:
          axiosError.response?.data?.message ||
          "Something went wrong. Please try again",
      });
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setMessage({
          success: false,
          message: "",
        });
      }, 3000);
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
      <ToggleBtn setIsSidebarOpen={setIsSidebarOpen} />
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
        <button disabled={isLoading}>
          Send <IoIosSend />
        </button>
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
      {message.message && (
        <p className={`message ${message.success ? "success" : "warning"} `}>
          {message.message}
        </p>
      )}
    </main>
  );
}

export default Form;
