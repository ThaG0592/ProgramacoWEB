import React, { useState } from 'react';

function SimpleForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <h3>Submitted Data:</h3>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
        </div>
      )}
    </div>
  );
}

export default SimpleForm;
