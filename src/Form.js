import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phone: '',
    country: '',
    city: '',
    pan: '',
    aadhar: ''
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const validate = () => {
      let tempErrors = {};
      let isValid = true;

      if (!formData.firstName) {
        isValid = false;
        tempErrors["firstName"] = "First Name is required";
      }
      if (!formData.lastName) {
        isValid = false;
        tempErrors["lastName"] = "Last Name is required";
      }
      if (!formData.username) {
        isValid = false;
        tempErrors["username"] = "Username is required";
      }
      if (!formData.email) {
        isValid = false;
        tempErrors["email"] = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        isValid = false;
        tempErrors["email"] = "Email is invalid";
      }
      if (!formData.password) {
        isValid = false;
        tempErrors["password"] = "Password is required";
      }
      if (!formData.phone) {
        isValid = false;
        tempErrors["phone"] = "Phone number is required";
      }
      if (!formData.country) {
        isValid = false;
        tempErrors["country"] = "Country is required";
      }
      if (!formData.city) {
        isValid = false;
        tempErrors["city"] = "City is required";
      }
      if (!formData.pan) {
        isValid = false;
        tempErrors["pan"] = "PAN is required";
      }
      if (!formData.aadhar) {
        isValid = false;
        tempErrors["aadhar"] = "Aadhar is required";
      }

      setErrors(tempErrors);
      return isValid;
    };

    setIsFormValid(validate());
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      navigate('/success', { state: formData });
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          {errors.firstName && <span>{errors.firstName}</span>}
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          {errors.lastName && <span>{errors.lastName}</span>}
        </div>
        <div>
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
          {errors.username && <span>{errors.username}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Password:</label>
          <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} />
          <button type="button" onClick={() => setShowPassword(!showPassword)}>Show/Hide</button>
          {errors.password && <span>{errors.password}</span>}
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
          {errors.phone && <span>{errors.phone}</span>}
        </div>
        <div>
          <label>Country:</label>
          <select name="country" value={formData.country} onChange={handleChange}>
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            {/* Add more options as needed */}
          </select>
          {errors.country && <span>{errors.country}</span>}
        </div>
        <div>
          <label>City:</label>
          <select name="city" value={formData.city} onChange={handleChange}>
            <option value="">Select City</option>
            {/* Populate cities based on the selected country */}
            {formData.country === 'India' && (
              <>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Bangalore">Bangalore</option>
              </>
            )}
            {formData.country === 'USA' && (
              <>
                <option value="New York">New York</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Chicago">Chicago</option>
              </>
            )}
            {formData.country === 'Canada' && (
              <>
                <option value="Toronto">Toronto</option>
                <option value="Vancouver">Vancouver</option>
                <option value="Montreal">Montreal</option>
              </>
            )}
          </select>
          {errors.city && <span>{errors.city}</span>}
        </div>
        <div>
          <label>PAN No.:</label>
          <input type="text" name="pan" value={formData.pan} onChange={handleChange} />
          {errors.pan && <span>{errors.pan}</span>}
        </div>
        <div>
          <label>Aadhar No.:</label>
          <input type="text" name="aadhar" value={formData.aadhar} onChange={handleChange} />
          {errors.aadhar && <span>{errors.aadhar}</span>}
        </div>
        <button type="submit" disabled={!isFormValid}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
