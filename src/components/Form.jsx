import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form Submitted!\nName: ${formData.name}\nAge: ${formData.age}\nEmail: ${formData.email}`);
    // optionally clear form
    // setFormData({ name: "", age: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 480 }}>
      <h2>React Form</h2>

      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label>Age:</label>
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        required
      />

      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <button type="submit" style={{ marginTop: 8 }}>Submit</button>
    </form>
  );
};

export default Form;
