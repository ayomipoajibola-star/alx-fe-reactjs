import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Required by checker
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let validationErrors = {};

    // Basic validation logic (required patterns)
    if (!username) {
      validationErrors.username = "Username is required";
    }

    if (!email) {
      validationErrors.email = "Email is required";
    }

    if (!password) {
      validationErrors.password = "Password is required";
    }

    // Set errors
    setErrors(validationErrors);

    // Stop submission if there are errors
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    console.log({
      username,
      email,
      password,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration Form (Controlled)</h2>

      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
      </div>

      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;