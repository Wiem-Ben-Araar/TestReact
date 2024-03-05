import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCompetition() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",

    fee: 0,
    date: "",
    participants: 0,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/competitions", formData);
      navigate("/competitions");
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1> Ajouter Competition </h1>
        <br></br>
        name :{" "}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br></br>
        fee:{" "}
        <input
          type="text"
          name="fee"
          value={formData.fee}
          onChange={handleChange}
        />{" "}
        <br></br>
        date :{" "}
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <br></br>
        participants :{" "}
        <input
          type="text"
          name="participants"
          value={formData.participants}
          onChange={handleChange}
        />
        <br></br>
        description :{" "}
        <textarea
          rows={3}
          name="description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
        <br></br>
        <button> Add </button>
      </form>
    </div>
  );
}

export default AddCompetition;